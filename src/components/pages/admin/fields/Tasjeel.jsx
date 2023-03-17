import { useEffect, useState } from "react"

function TasjeelField({ url }) {

  const [sharat, setSharat] = useState(null)
  const [category, setCategory] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.shar').value !== '' && document.querySelector('.categ').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [sharat])

  const submitTasjeel = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')

    return await fetch(`${url}/tasjeel/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        sharat,
        category: category || document.querySelector('.categ').value
      })
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)
        document.querySelector('.shar').value = ''
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
      <h1 className="text-center mb-6 mt-2 text-xl font-bold">إضافة شروط التسجيل</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-lg text-[#222222] flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-blue-600 hover:text-blue-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <div className="sharat">
        <div className="w-full">
          <label htmlFor="sharatid" className="my-2 block font-bold text-blue-600">النوع :</label>
          <select required type="text" id="sharatid" onChange={(e) => setCategory(e.target.value)} className="categ bg-transparent p-3 rounded-lg  border  outline-none border-blue-600 w-[100%]" >
            <option value="1">البكالوريوس</option>
            <option value="2">الدبلومات</option>
            <option value="3">الماجستير</option>
            <option value="4">الدكتوراه</option>
          </select>
        </div>
        <div className="flex flex-row justify-between text-blue-600 font-bold my-3">
          <label htmlFor="sharat" className="block">الشروط :</label>
        </div>
        <textarea required id="sharat" onChange={(e) => setSharat(e.target.value)} placeholder="شروط القبول أو التسجيل" className="shar sharats bg-transparent py-1 pr-3 rounded-lg border outline-none border-blue-600 w-[100%]" />
      </div>
      {
        (Commited == false) ? <p className="bmiss cursor-not-allowed text-center mt-4 bg-blue-800 text-slate-400 py-1 rounded-lg font-bold w-[100%]">إضافة الشرط الواحد</p> : <p className="cursor-pointer text-center mt-4 bg-blue-600 text-white py-1 rounded-lg hover:bg-blue-700 font-bold w-[100%]" onClick={() => submitTasjeel()}>إضافة الشرط الواحد</p>
      }
    </>
  )
}

export default TasjeelField