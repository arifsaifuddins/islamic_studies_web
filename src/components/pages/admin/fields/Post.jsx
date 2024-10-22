import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function PostField({ url }) {

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  const [Title, setTitle] = useState(null)
  const [Category, setCategory] = useState(null)
  const [Poster, setPoster] = useState(null)

  const nav = useNavigate()

  useEffect(() => {

    if (document.querySelector('.tit').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Title])

  const submitProgram = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')

    const date = new Date()
    const y = date.getFullYear().toString()
    const m = (date.getMonth() + 1).toString()
    const d = date.getDate().toString()

    let forms = new FormData()

    forms.append('title', Title)
    forms.append('category', Category || document.querySelector('.cat').value)
    forms.append('poster', Poster)
    forms.append('date', `${d}/${m}/${y}`)
    forms.append('body', document.querySelector('#x').value)

    return await fetch(`${url}/programs.php`, {
      method: 'POST',
      body: forms
    })
      .then(r => r.json())
      .then(j => {
        if (j.sts == 'failed') {
          setError(j.msg)
          setCommited(true)
          setErrored(true)
          document.body.classList.remove('cursor-wait')
          document.body.classList.add('cursor-default')
        }

        if (j.sts == 'success') {
          setError(j.msg)
          setCommited(true)
          setErrored(true)
          document.body.classList.remove('cursor-wait')
          document.body.classList.add('cursor-default')
          nav('/programs')
        }
      }).catch(j => {
        document.body.classList.remove('cursor-wait')
        document.body.classList.add('cursor-default')
        setError('Error!.')
        setCommited(true)
        setErrored(true)
      })
  }

  return (
    <>
      <h1 className="text-center mb-6 mt-2 text-xl font-bold">زيادة الأخبار أو المؤتمرات</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 my-4 rounded-lg text-[#222222] dark:text-slate-100 flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-blue-600 hover:text-blue-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <div>
        <div className="w-full">
          <input required type="text" onChange={(e) => setTitle(e.target.value)} placeholder="موضوع البرنامج" className="tit  bg-transparent py-1 pr-3 mt-4 rounded-lg  border outline-none border-blue-600 w-[100%]" />
        </div>
        <div className="flex justify-around items-center md:gap-8 md:flex-row flex-col">
          <div className="w-full">
            <label htmlFor="postfile" className="my-2 block font-bold text-blue-600">الصورة :</label>
            <input required onChange={(e) => setPoster(e.target.files[0])} type="file" id="postfile" className="pos bg-transparent py-1 pr-3 rounded-lg  border outline-none border-blue-600 w-[100%]" />
          </div>
          <div className="w-full">
            <label htmlFor="authorpost" className="my-2 block font-bold text-blue-600">نوع البرامح :</label>
            <select required type="text" id="authorpost" onChange={(e) => setCategory(e.target.value)} className="cat bg-transparent p-3 rounded-lg  border  outline-none border-blue-600 w-[100%]" >
              <option value="البرامج">البرامج</option>
              <option value="الأخبار">الأخبار</option>
              <option value="المؤتمرات">المؤتمرات</option>
              <option value="البكالوريوس">البكالوريوس</option>
              <option value="الماجستير">الماجستير</option>
              <option value="الدكتوراه">الدكتوراه</option>
            </select>
          </div>
        </div>
        {
          (Poster != null) && <img src={URL.createObjectURL(Poster)} alt="blog" className="mt-4 w-full" />
        }
        <div className="w-full mt-10">
          <label htmlFor="x" className="my-2 block font-bold text-blue-600">المعلومات :</label>
          <textarea id="x" name="content" className="hidden"></textarea>
          <trix-editor input="x"></trix-editor>
        </div>
        <div className="my-5">
          {
            (Commited == false) ? <p className="bblog cursor-not-allowed text-center bg-blue-800 text-slate-400 py-1 pl-3 rounded-lg font-bold w-[100%]">إضافة البرنامج</p> : <p className="cursor-pointer text-center bg-blue-600 text-white py-1 pl-3 rounded-lg hover:bg-blue-700 font-bold w-[100%]" onClick={() => submitProgram()}>إضافة البرنامج</p>
          }
        </div>
      </div>
    </>
  )
}

export default PostField