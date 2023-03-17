import { useState } from "react"
import { useNavigate } from "react-router-dom"

function DaleelField({ url }) {

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)

  const [Daleel, setDaleel] = useState(null)

  const nav = useNavigate()

  const submitdaleel = async () => {
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')

    let forms = new FormData()

    forms.append('daleel', Daleel)

    return await fetch(`${url}/daleel.php`, {
      method: 'POST',
      body: forms
    })
      .then(r => r.json())
      .then(j => {
        if (j.sts == 'failed') {
          setError(j.msg)
          setErrored(true)
          document.body.classList.remove('cursor-wait')
          document.body.classList.add('cursor-default')
        }

        if (j.sts == 'success') {
          setError(j.msg)
          setErrored(true)
          document.body.classList.remove('cursor-wait')
          document.body.classList.add('cursor-default')
          nav('/')
        }
      }).catch(j => {
        document.body.classList.remove('cursor-wait')
        document.body.classList.add('cursor-default')
        setError('Error!.')
        setErrored(true)
      })
  }

  return (
    <>
      <h1 className="text-center mb-6 mt-2 text-xl font-bold">إبدال دليل الكلية</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 my-4 rounded-lg text-[#222222] flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-blue-600 hover:text-blue-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <div className="flex justify-around items-center md:gap-8 md:flex-row flex-col">
        <div className="w-full">
          <label htmlFor="postfile" className="my-2 block font-bold text-blue-600">الدليل :</label>
          <input required onChange={(e) => setDaleel(e.target.files[0])} type="file" id="postfile" className="pos bg-transparent py-1 pr-3 rounded-lg  border outline-none border-blue-600 w-[100%]" />
        </div>
      </div>
      <div className="my-5">
        <p className="cursor-pointer text-center bg-blue-600 text-white py-1 pl-3 rounded-lg hover:bg-blue-700 font-bold w-[100%]" onClick={() => submitdaleel()}>إبدال الدليل</p>
      </div>
    </>
  )
}

export default DaleelField
