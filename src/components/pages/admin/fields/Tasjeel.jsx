import { useEffect, useState } from "react"
import { FiPlus } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

function TasjeelField() {

  const [sharat, setSharat] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.shar').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [sharat])

  const url = import.meta.env.VITE_URL
  const nav = useNavigate()

  const submitSharat = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')
    let sharat

    if (document.querySelector('.sharats')) {
      let Mis = []
      document.querySelectorAll('.sharats')
        .forEach(data => {
          if (data.value != '') {
            Mis.push(data.value)
          }
        })
      sharat = Mis
    }

    return await fetch(`${url}/sharat/add`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        sharat: sharat
      })
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)
        document.body.classList.add('cursor-default')
        document.body.classList.remove('cursor-wait')
        nav('/organizations/Category')
      }).catch(j => {
        setError(j.message)
        document.body.classList.add('cursor-default')
        document.body.classList.remove('cursor-wait')
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

    input.placeholder = "شروط القبول أو التسجيل"
    input.className = `mt-2 bg-transparent py-1 pr-3 text-end pl-9 w-[100%] rounded-lg  border outline-none border-yellow-600 ${a.toLowerCase()}s`

    div.append(input)
    div.append(close)
    div.className = 'relative'

    document.querySelector(`.${a.toLowerCase()}`).append(div)
  }

  return (
    <>
      <h1 className="text-center mb-6 mt-2 text-xl font-bold">إضافة الرؤية أو القيم أو الهدف</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-lg text-[#222222] flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-yellow-600 hover:text-yellow-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <div className="sharat">
        <div className="flex flex-row-reverse justify-between items-end text-yellow-600 font-bold my-3">
          <label htmlFor="sharat" className="block">: الشروط</label>
          <p onClick={() => addInput('Sharat')} className="h-max -mb-1 cursor-pointer py-3">
            <FiPlus />
          </p>
        </div>
        <textarea required id="sharat" onChange={(e) => setSharat(e.target.value)} placeholder="شروط القبول أو التسجيل" className="shar sharats bg-transparent py-1 pr-3 rounded-lg text-end border outline-none border-yellow-600 w-[100%]" />
      </div>
      {
        (Commited == false) ? <p className="bmiss cursor-not-allowed text-center mt-4 bg-yellow-800 text-slate-400 py-1 rounded-lg font-bold w-[100%]">إضافة الشرط الواحد</p> : <p className="cursor-pointer text-center mt-4 bg-yellow-600 text-white py-1 rounded-lg hover:bg-yellow-700 font-bold w-[100%]" onClick={() => submitSharat()}>إضافة الشرط الواحد</p>
      }
    </>
  )
}

export default TasjeelField