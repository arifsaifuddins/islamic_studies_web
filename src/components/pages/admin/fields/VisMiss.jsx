import { useEffect, useState } from "react"
import { FiPlus } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

function VisMissField() {

  const [Category, setCategory] = useState(null)
  const [Mission, setMission] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.viss').value !== '' && document.querySelector('.mis').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Category, Mission])

  const url = import.meta.env.VITE_URL
  const nav = useNavigate()

  const submitVisMiss = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')
    let mission

    if (document.querySelector('.misis')) {
      let Mis = []
      document.querySelectorAll('.misis')
        .forEach(data => {
          if (data.value != '') {
            Mis.push(data.value)
          }
        })
      mission = Mis
    }

    return await fetch(`${url}/vision/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        category: Category,
        mission: mission
      })
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)
        document.body.classList.add('cursor-default')
        document.body.classList.remove('cursor-wait')
        nav('/')
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

    input.placeholder = 'الرؤية أو الهدف أو القيمة'
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
      <label htmlFor="category" className="my-2 block font-bold text-yellow-600">: النوع</label>
      <select required id="category" onChange={(e) => setCategory(e.target.value)} className="viss bg-transparent p-3 text-end rounded-lg  border outline-none border-yellow-600 w-[100%]" >
        <option value="vision">الروية</option>
        <option value="mission">الهدف</option>
        <option value="message">الرسالة</option>
        <option value="qimmah">القيمة</option>
      </select>

      <div className="misi">
        <div className="flex flex-row-reverse justify-between items-end text-yellow-600 font-bold my-3">
          <label htmlFor="mission" className="block">: المعلومات</label>
          <p onClick={() => addInput('Misi')} className="h-max -mb-1 cursor-pointer py-3">
            <FiPlus />
          </p>
        </div>
        <textarea required id="mission" onChange={(e) => setMission(e.target.value)} placeholder='الرؤية أو الهدف أو القيمة' className="mis misis bg-transparent py-1 pr-3 rounded-lg text-end border outline-none border-yellow-600 w-[100%]" />
      </div>
      {
        (Commited == false) ? <p className="bmiss cursor-not-allowed text-center mt-4 bg-yellow-800 text-slate-400 py-1 rounded-lg font-bold w-[100%]">إضافة الرؤيات أو الأهداف</p> : <p className="cursor-pointer text-center mt-4 bg-yellow-600 text-white py-1 rounded-lg hover:bg-yellow-700 font-bold w-[100%]" onClick={() => submitVisMiss()}>إضافة الرؤيات أو الأهداف</p>
      }
    </>
  )
}

export default VisMissField