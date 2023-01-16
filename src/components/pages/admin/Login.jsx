import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import { useCookies } from "react-cookie"
import { FiEye } from "react-icons/fi"

function Login() {

  const nav = useNavigate()

  const [Email, setEmail] = useState(null)
  const [Pass, setPass] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  const [_, setCookie, removeCookie] = useCookies()

  useEffect(() => {

    if (document.querySelector('.maile').value !== '' && document.querySelector('.pass').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }

  }, [Email, Pass])

  const url = import.meta.env.VITE_NURL
  const adm = import.meta.env.VITE_ADMIN
  const idadm = import.meta.env.VITE_ID

  const submitAdmin = async () => {
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')
    setCommited(false)

    return await fetch(`${url}/admin/login`, {
      body: JSON.stringify({
        email: Email,
        password: Pass
      }),
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(r => r.json())
      .then(j => {
        if (j.data) {
          removeCookie(adm)
          removeCookie(idadm)
          setCookie(adm, j.data.name, { path: '/', maxAge: 10000 * 12 })
          setCookie(idadm, j.data._id, { path: '/', maxAge: 10000 * 12 })
          setCommited(true)
          document.body.classList.add('cursor-default')
          document.body.classList.remove('cursor-wait')
          nav('/admin')
        } else {
          setError(j.message)
          document.body.classList.add('cursor-default')
          document.body.classList.remove('cursor-wait')
          setCommited(true)
          setErrored(true)
        }
      })
  }

  return (
    <>
      <Helmet>
        <title>Islamic Studies | الدخول إلى الكلية</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>الدخول إلى الكلية</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>الدخول إلى كلية الدراسات الإسلامية</h2>
          <div className="mx-auto  lg:w-[900px] w-full text-end leading-9 py-32">
            <div className="relative md:w-96 w-full mx-auto p-3 rounded-lg shadow">
              <h1 className="text-center mb-6 mt-2 text-xl font-bold"> الدخول إلى الكلية</h1>
              {
                (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mb-4 rounded-xl text-black  flex justify-between items-center">
                  <div>{Error}</div>
                  <p onClick={() => setErrored(false)} className="text-yellow-600 hover:text-yellow-700 text-2xl cursor-pointer">&times;</p>
                </div>
              }
              <input required autoFocus type="email" onChange={(e) => setEmail(e.target.value)} placeholder="البريد أو الاسم" className="maile mt-2 bg-transparent py-1 pr-3 text-end rounded-lg border outline-none border-yellow-600 w-[100%]" />
              <input required type="password" id="passwords" onKeyUp={(e) => e.which === 13 && submitAdmin()} onChange={(e) => setPass(e.target.value)} placeholder="كلمة المرور" className="pass mt-4 bg-transparent pl-12 py-1 pr-3 text-end rounded-lg border outline-none border-yellow-600 w-[100%] mb-4" />
              <p onMouseEnter={() => document.getElementById('passwords').type = 'text'} onMouseLeave={() => document.getElementById('passwords').type = 'password'} className="absolute left-5 mb-4 bottom-[95px] cursor-pointer hover:text-yellow-800 text-yellow-600"><FiEye /></p>
              {
                (Commited == false) ? <p className="badmin cursor-not-allowed text-center mt-4 bg-yellow-800 text-slate-400 py-2 pl-3 rounded-lg font-bold w-[100%]">الدخول كالمشرف</p> : <p className="cursor-pointer text-center mt-4 bg-yellow-600 text-white py-2 pl-3 rounded-lg hover:bg-yellow-700 font-bold w-[100%]" onClick={() => submitAdmin()}>الدخول كالمشرف</p>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login