import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function MawadField() {

  const [Program, setProgram] = useState(null)
  const [Class, setClass] = useState(null)
  const [Madah, setMadah] = useState(null)
  const [Time, setTime] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.madah').value !== '' && document.querySelector('.time').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Madah, Time])

  const url = import.meta.env.VITE_URL
  const nav = useNavigate()

  const submitStudies = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')

    return await fetch(`${url}/studies/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        program: Program,
        class: Class,
        madah: Madah,
        time: Time
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

  return (
    <>
      <h1 className="text-center mb-6 mt-2 text-xl font-bold">إضافة المواد الدراسية</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-lg text-[#222222] flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-yellow-600 hover:text-yellow-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <label htmlFor="categor" className="my-2 block font-bold text-yellow-600">: البرنامج</label>
      <select required id="categor" onChange={(e) => setProgram(e.target.value)} className="progm bg-transparent p-3 text-end rounded-lg  border outline-none border-yellow-600 w-[100%]" >
        <option value="all_major">جميع التخصصات</option>
        <option value="dakwah_bachelor">قسم السنة وعلوم الحديث</option>
        <option value="hadith_bachelor">قسم الدعوة والسيرة</option>
        <option value="akidah_bachelor">قسم العقيدة والفكر الإسلامي</option>
        <option value="diploma_wasit_quran">علوم القرآن (الدبلوم الوسيط)</option>
        <option value="diploma_wasit_dakwah">الدعوة (الدبلوم الوسيط)</option>
        <option value="diploma_ulya_dirasat">الدراسات الإسلامية (الدبلوم العليا)</option>
        <option value="diploma_ulya_dakwah">الدعوة والسيرة (الدبلوم العليا)</option>
        <option value="hadith_master">السنة وعلوم الحديث (الماجستير)</option>
        <option value="dakwah_master">الدعوة والسيرة (الماجستير)</option>
        <option value="akidah_master">العقيدة والفكر الإسلامي (الماجستير)</option>
        <option value="phd">الدكتوراه</option>
      </select>
      <label htmlFor="categori" className="my-2 block font-bold text-yellow-600">: الفصل الدراسي</label>
      <select required id="categori" onChange={(e) => setClass(e.target.value)} className="classes bg-transparent p-3 text-end rounded-lg  border outline-none border-yellow-600 w-[100%]" >
        <option value="1">الأول</option>
        <option value="2">الثاني</option>
        <option value="3">الثالث</option>
        <option value="4">الرابع</option>
        <option value="5">الخامس</option>
        <option value="6">السادس</option>
        <option value="7">السابع</option>
        <option value="8">الثامن</option>
      </select>
      <label htmlFor="madah" className="my-2 block font-bold text-yellow-600">: المادة</label>
      <input type="text" required id="madah" onChange={(e) => setMadah(e.target.value)} placeholder="المادة" className="madah bg-transparent py-1 p-3 text-end rounded-lg  border outline-none border-yellow-600 w-[100%] mb-2" />
      <label htmlFor="time" className="my-2 block font-bold text-yellow-600">: الساعة</label>
      <input type="number" required id="time" onChange={(e) => setTime(e.target.value)} placeholder="الساعة " className="time bg-transparent py-1 p-3 text-end rounded-lg  border outline-none border-yellow-600 w-[100%] mb-2" />
      {
        (Commited == false) ? <p className="bmiss cursor-not-allowed text-center mt-4 bg-yellow-800 text-slate-400 py-1 rounded-lg font-bold w-[100%]">إضافة المواد الدراسية</p> : <p className="cursor-pointer text-center mt-4 bg-yellow-600 text-white py-1 rounded-lg hover:bg-yellow-700 font-bold w-[100%]" onClick={() => submitStudies()}>إضافة المواد الدراسية</p>
      }
    </>
  )
}

export default MawadField