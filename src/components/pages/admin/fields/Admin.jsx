import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminField({ url }) {
  const [Name, setName] = useState(null)
  const [Email, setEmail] = useState(null)
  const [Pass, setPass] = useState(null)
  const [Conf, setConf] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  const nav = useNavigate()

  useEffect(() => {

    if (document.querySelector('.mailed').value !== '' && document.querySelector('.passed').value !== '' && document.querySelector('.named').value !== '' && document.querySelector('.confed').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }

    if (document.querySelector('.passed').value != document.querySelector('.confed').value) {
      setError('يرجى التأكد من كلمة المرور')
      setCommited(false)
      setErrored(true)
    } else {
      setErrored(false)
    }

  }, [Email, Pass, Name, Conf])

  const submitAdmin = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')

    return await fetch(`${url}/admin/register`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: Name,
        email: Email,
        password: Pass
      })
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)
        document.body.classList.add('cursor-default')
      }).catch(j => {
        setError(j.message)
        document.body.classList.add('cursor-default')
        setCommited(true)
        setErrored(true)
      })
  }

  return (
    <>
      <h1 className="text-center mb-6 mt-2 text-xl font-bold">إضافة المشرف الواحد</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-xl text-[#222222] flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-yellow-600 hover:text-yellow-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <input required type="text" placeholder="اسم المشرف" onChange={(e) => setName(e.target.value)} className="named mt-4 bg-transparent text-end py-1 pr-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
      <input required type="email" placeholder="بريد أو مسمى المشرف" onChange={(e) => setEmail(e.target.value)} className="mailed mt-2 bg-transparent text-end py-1 pr-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
      <input required type="text" placeholder="كلمة المرور" onChange={(e) => setPass(e.target.value)} className="passed mt-2 bg-transparent text-end py-1 pr-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
      <input required type="password" placeholder="تأكيد كلمة المرور" onKeyUp={(e) => e.which === 13 && submitAdmin()} onChange={(e) => setConf(e.target.value)} className="confed mt-2 bg-transparent text-end py-1 pr-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
      {
        (Commited == false) ? <p className="badminadd cursor-not-allowed text-center mt-4 bg-yellow-800 text-slate-400 py-1 rounded-lg font-bold w-[100%]">إضافة المشرف</p> : <p className="cursor-pointer text-center mt-4 bg-yellow-600 text-white py-1 rounded-lg hover:bg-yellow-700 font-bold w-[100%]" onClick={() => submitAdmin()}>إضافة المشرف</p>
      }
    </>
  )
}

export default AdminField