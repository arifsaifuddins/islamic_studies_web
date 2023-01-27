import { useEffect, useState } from "react"

function FeesField({ url }) {
  const [Program, setProgram] = useState(null)
  const [Dollar, setDollar] = useState(null)
  const [Pound, setPound] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.categor').value !== '' && document.querySelector('.dollar').value !== '' && document.querySelector('.pound').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Program, Dollar, Pound])

  const submitFees = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')
    return await fetch(`${url}/fees/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: Program,
        dollar: Dollar,
        pound: Pound
      })
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)
        document.querySelector('.categor').value = ''
        document.querySelector('.dollar').value = ''
        document.querySelector('.pound').value = ''
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
      <h1 className="text-center mb-6 mt-2 text-xl font-bold">رسوم التسجيل والقبول</h1>
      <div>
        {
          (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-lg text-[#222222]  flex justify-between items-center">
            <div>{Error}</div>
            <p onClick={() => setErrored(false)} className="text-yellow-600 hover:text-yellow-700 text-2xl cursor-pointer">&times;</p>
          </div>
        }
        <input required type="text" onChange={(e) => setProgram(e.target.value)} name="Program" placeholder="البرامج الدراسية" className="categor my-4 bg-transparent py-1 pr-3 rounded-lg mt-4 border outline-none border-yellow-600 w-[100%]" />
        <div className="flex flex-row-reverse gap-4">
          <input required type="number" onChange={(e) => setDollar(e.target.value)} placeholder="الدولار " className="dollar mb-4 bg-transparent py-1 pr-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
          <input required type="number" onChange={(e) => setPound(e.target.value)} onKeyUp={(e) => e.which === 13 && submitFees()} placeholder="الجنيه " className="pound mb-4 bg-transparent py-1 pr-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
        </div>
        {
          (Commited == false) ? <p className="bprogram cursor-not-allowed text-center mt-4 bg-yellow-800 text-slate-400 py-1 pl-3 rounded-lg font-bold w-[100%]">إضافة الرسوم</p> : <p className="cursor-pointer text-center mt-4 bg-yellow-600 text-white py-1 pl-3 rounded-lg hover:bg-yellow-700 font-bold w-[100%]" onClick={() => submitFees()}>إضافة الرسوم</p>
        }
      </div>
    </>
  )
}

export default FeesField