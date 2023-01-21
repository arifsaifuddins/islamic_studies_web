import { useEffect, useState } from "react"

function VisMissField({ url }) {
  const [Category, setCategory] = useState(null)
  const [Point, setPoint] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.viss').value !== '' && document.querySelector('.mis').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Category, Point])

  const submitVisMiss = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')

    return await fetch(`${url}/about/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        category: document.querySelector('.viss').value || Category,
        point: Point
      })
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)
        document.querySelector('.mis').value = ''
        document.body.classList.add('cursor-default')
        document.body.classList.remove('cursor-wait')
      }).catch(j => {
        setError(j.message)
        document.body.classList.add('cursor-default')
        document.body.classList.remove('cursor-wait')
        setCommited(true)
        setErrored(true)
      })
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
        <option value="1">الروية</option>
        <option value="2">الهدف</option>
        <option value="3">الرسالة</option>
        <option value="4">القيمة</option>
      </select>

      <div className="misi">
        <div className="flex flex-row-reverse justify-between items-end text-yellow-600 font-bold my-3">
          <label htmlFor="mission" className="block">: المعلومات</label>
        </div>
        <textarea required id="mission" onChange={(e) => setPoint(e.target.value)} placeholder='الرؤية أو الهدف أو القيمة' className="mis misis bg-transparent py-1 pr-3 rounded-lg text-end border outline-none border-yellow-600 w-[100%]" />
      </div>
      {
        (Commited == false) ? <p className="bmiss cursor-not-allowed text-center mt-4 bg-yellow-800 text-slate-400 py-1 rounded-lg font-bold w-[100%]">إضافة الرؤيات أو الأهداف</p> : <p className="cursor-pointer text-center mt-4 bg-yellow-600 text-white py-1 rounded-lg hover:bg-yellow-700 font-bold w-[100%]" onClick={() => submitVisMiss()}>إضافة الرؤيات أو الأهداف</p>
      }
    </>
  )
}

export default VisMissField