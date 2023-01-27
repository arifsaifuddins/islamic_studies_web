import { useEffect, useState } from "react"
import { FiPlus } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

function kuliatField({ url }) {

  const [Poster, setPoster] = useState(null)
  const [Name, setName] = useState(null)
  const [Desc, setDesc] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.images').value !== '' && document.querySelector('.kulia').value !== '' && document.querySelector('.dess').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Poster, Name, Desc])

  const nav = useNavigate()

  const submitKuliat = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')
    let paragraph

    if (document.querySelector('.kuliats')) {
      let Mis = []
      document.querySelectorAll('.kuliats')
        .forEach(data => {
          if (data.value != '') {
            Mis.push(data.value)
          }
        })
      paragraph = Mis
    }

    let forms = new FormData()

    forms.append('title', Name)
    forms.append('paragraph', JSON.stringify(paragraph))
    forms.append('poster', Poster)

    return await fetch(`${url}/kuliats.php`, {
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
          nav('/kuliat')
        }
      }).catch(j => {
        document.body.classList.remove('cursor-wait')
        document.body.classList.add('cursor-default')
        setError('Error!.')
        console.log(j)
        setCommited(true)
        setErrored(true)
      })
  }

  const addInput = (a) => {

    const div = document.createElement('div')
    const input = document.createElement('textarea')
    const close = document.createElement('p')

    close.innerHTML = '&times;'
    close.className = 'absolute left-3 top-3 cursor-pointer hover:text-yellow-800 text-yellow-600 text-3xl'
    close.onclick = e => e.target.parentElement.remove()

    input.placeholder = "السطر التعريفي"
    input.className = `mt-2 bg-transparent py-1 pr-3  pl-9 w-[100%] rounded-lg  border outline-none border-yellow-600 ${a.toLowerCase()}s`

    div.append(input)
    div.append(close)
    div.className = 'relative'

    document.querySelector(`.${a.toLowerCase()}`).append(div)
  }

  return (
    <>
      <h1 className="text-center mb-6 mt-2 text-xl font-bold">إضافة الكليات المنتسبة</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-lg text-[#222222] flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-yellow-600 hover:text-yellow-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <label htmlFor="postimg" className="my-2 block font-bold text-yellow-600">الصورة :</label>
      <input type="file" required id="postimg" onChange={(e) => setPoster(e.target.files[0])} className="images bg-transparent py-1 px-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
      <label htmlFor="name" className="my-2 block font-bold text-yellow-600">اسم الكلية :</label>
      <input type="text" required id="name" onChange={(e) => setName(e.target.value)} placeholder="اسم الكلية" className="dess bg-transparent py-1 pr-3  rounded-lg  border outline-none border-yellow-600 w-[100%] mb-2" />
      {
        (Poster != null) && <img src={URL.createObjectURL(Poster)} alt="blog" className="mt-4 w-full" />
      }
      <div className="kuliat">
        <div className="flex flex-row justify-between text-yellow-600 font-bold mb-3">
          <label htmlFor="missions" className="block">المعلومات :</label>
          <p onClick={() => addInput('kuliat')} className="h-max -mb-1 cursor-pointer py-3">
            <FiPlus />
          </p>
        </div>
        <textarea required id="missions" onChange={(e) => setDesc(e.target.value)} placeholder="السطر التعريفي" className="kulia kuliats bg-transparent py-1 pr-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
      </div>
      {
        (Commited == false) ? <p className="bmiss cursor-not-allowed text-center mt-4 bg-yellow-800 text-slate-400 py-1 rounded-lg font-bold w-[100%]">إضافة الكلية المنتسبة</p> : <p className="cursor-pointer text-center mt-4 bg-yellow-600 text-white py-1 rounded-lg hover:bg-yellow-700 font-bold w-[100%]" onClick={() => submitKuliat()}>إضافة الكلية المنتسبة</p>
      }
    </>
  )
}

export default kuliatField