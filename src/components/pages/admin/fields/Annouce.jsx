import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function AnnoucField() {

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  const [Title, setTitle] = useState(null)
  const [Poster, setPoster] = useState(null)

  const url = import.meta.env.VITE_URL
  const nav = useNavigate()

  useEffect(() => {

    if (document.querySelector('.titl').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Title])

  const submitBlogs = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')

    const date = new Date()
    const y = date.getFullYear().toString()
    const m = (date.getMonth() + 1).toString()
    const d = date.getDate().toString()

    let forms = new FormData()

    forms.append('title', Title)
    forms.append('poster', Poster)

    return await fetch(`${url}/blogs.php`, {
      method: 'POST',
      body: forms
    })
      .then(r => r.json())
      .then(j => {
        if (j.sts == 'gagal') {
          setError(j.msg)
          setCommited(true)
          setErrored(true)
          document.body.classList.remove('cursor-wait')
          document.body.classList.add('cursor-default')
        }

        if (j.sts == 'berhasil') {
          setError(j.msg)
          setCommited(true)
          setErrored(true)
          document.body.classList.remove('cursor-wait')
          document.body.classList.add('cursor-default')
          nav('/blogs')
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
      <h1 className="text-center mb-6 mt-2 text-xl font-bold">زيادة الإعلام الواحد</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 my-4 rounded-lg text-[#222222] dark:text-slate-100 flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-yellow-600 hover:text-yellow-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <div className="w-full">
        <input required type="text" onChange={(e) => setTitle(e.target.value)} id="titlepost" placeholder="موضوع الإعلام" className="titl text-end bg-transparent py-1 pr-3 mt-4 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
      </div>
      <div className="flex justify-around items-center md:gap-8 md:flex-row flex-col">
        <div className="w-full">
          <label htmlFor="postfile" className="my-2 block font-bold text-yellow-600">: الصورة</label>
          <input required onChange={(e) => setPoster(e.target.files[0])} type="file" id="postfile" className="pos bg-transparent py-1 pl-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
        </div>
      </div>
      {
        (Poster != null) && <img src={URL.createObjectURL(Poster)} alt="blog" className="mt-4 w-full" />
      }
      <div className="my-5">
        {
          (Commited == false) ? <p className="bblog cursor-not-allowed text-center bg-yellow-800 text-slate-400 py-1 pl-3 rounded-lg font-bold w-[100%]">إضافة البرنامج</p> : <p className="cursor-pointer text-center bg-yellow-600 text-white py-1 pl-3 rounded-lg hover:bg-yellow-700 font-bold w-[100%]" onClick={() => submitBlogs()}>إضافة البرنامج</p>
        }
      </div>
    </>
  )
}

export default AnnoucField