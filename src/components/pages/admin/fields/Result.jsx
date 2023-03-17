import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function ResultField({ url }) {

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  const [Name, setName] = useState(null)
  const [Year, setYear] = useState(null)
  const [Level, setLevel] = useState(null)
  const [Qism, setQism] = useState(null)
  const [Daur, setDaur] = useState(null)
  const [Result, setResult] = useState(null)

  const nav = useNavigate()

  useEffect(() => {

    if (document.querySelector('.namess').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Name])

  const submitResult = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')

    let forms = new FormData()

    forms.append('name', Name)
    forms.append('year', Year || document.querySelector('.year').value)
    forms.append('level', Level || document.querySelector('.level').value)
    forms.append('qism', Qism || document.querySelector('.qisms').value)
    forms.append('kuliah', Daur || document.querySelector('.daur').value)
    forms.append('result', Result)

    return await fetch(`${url}/results.php`, {
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
          nav('/results')
        }
      }).catch(j => {
        document.body.classList.remove('cursor-wait')
        document.body.classList.add('cursor-default')
        setError('Error!.')
        setCommited(true)
        setErrored(true)
      })
  }

  return (
    <>
      <h1 className="text-center mb-6 mt-2 text-xl font-bold">زيادة الهيئة التدريسية</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 my-4 rounded-lg text-[#222222] dark:text-slate-100 flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-blue-600 hover:text-blue-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <div>
        <div className="flex md:flex-row justify-around items-center md:gap-8 flex-col">
          <div className="w-full">
            <label htmlFor="namehaiookok" className="my-2 block font-bold text-blue-600">اسم الكلية :</label>
            <input required type="text" onChange={(e) => setName(e.target.value)} id="namehaiookok" placeholder="اسم الكلية" className="namess  bg-transparent py-1 pr-3 rounded-lg  border outline-none border-blue-600 w-[100%]" />
          </div>
        </div>
        <div className="flex md:flex-row justify-around items-center md:gap-8 flex-col">
          <div className="w-full">
            <label htmlFor="daur" className="my-2 block font-bold text-blue-600">دور الامتحان :</label>
            <select required type="text" id="daur" onChange={(e) => setDaur(e.target.value)} className="daur bg-transparent p-3 rounded-lg  border  outline-none border-blue-600 w-[100%]" >
              <option value=" الدور الأول"> الدور الأول</option>
              <option value="الدور الثاني">الدور الثاني</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="level" className="my-2 block font-bold text-blue-600">الفصل الدراسي :</label>
            <select required type="text" id="level" onChange={(e) => setLevel(e.target.value)} className="level bg-transparent p-3 rounded-lg  border  outline-none border-blue-600 w-[100%]" >
              <option value="الأول">الأول</option>
              <option value="الثاني">الثاني</option>
              <option value="الثالث">الثالث</option>
              <option value="الرابع">الرابع</option>
              <option value="الخامس">الخامس</option>
              <option value="السادس">السادس</option>
              <option value="السابع">السابع</option>
              <option value="الثامن">الثامن</option>
            </select>
          </div>

        </div>
        <div className="flex md:flex-row justify-around items-center md:gap-8 flex-col">
          <div className="w-full">
            <label htmlFor="qism" className="my-2 block font-bold text-blue-600">القسم :</label>
            <select required type="text" id="qism" onChange={(e) => setQism(e.target.value)} className="qisms bg-transparent p-3 rounded-lg  border  outline-none border-blue-600 w-[100%]" >
              <option value="جميع التخصصات">جميع التخصصات</option>
              <option value="قسم السنة وعلوم الحديث">قسم السنة وعلوم الحديث</option>
              <option value="قسم الدعوة والسيرة">قسم الدعوة والسيرة</option>
              <option value="قسم العقيدة والفكر الإسلامي">قسم العقيدة والفكر الإسلامي</option>
              <option value="علوم القرآن (الدبلوم الوسيط)">علوم القرآن (الدبلوم الوسيط)</option>
              <option value="الدعوة (الدبلوم الوسيط)">الدعوة (الدبلوم الوسيط)</option>
              <option value="الدراسات الإسلامية (الدبلوم العليا)">الدراسات الإسلامية (الدبلوم العليا)</option>
              <option value="الدعوة والسيرة (الدبلوم العليا)">الدعوة والسيرة (الدبلوم العليا)</option>
              <option value="السنة وعلوم الحديث (الماجستير)">السنة وعلوم الحديث (الماجستير)</option>
              <option value="الدعوة والسيرة (الماجستير)">الدعوة والسيرة (الماجستير)</option>
              <option value="العقيدة والفكر الإسلامي (الماجستير)">العقيدة والفكر الإسلامي (الماجستير)</option>
              <option value="الدكتوراه">الدكتوراه</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="year" className="my-2 block font-bold text-blue-600">السنة الدراسية :</label>
            <input type="number" name="year" id="year" className="year bg-transparent px-3 py-1 rounded-lg  border  outline-none border-blue-600 w-[100%]" placeholder="السنة الدراسية" />
          </div>
        </div>
        <div className="flex md:flex-row justify-around items-center md:gap-8 flex-col">
          <div className="w-full">
            <label htmlFor="postfile" className="my-2 block font-bold text-blue-600">النتيجة :</label>
            <input required onChange={(e) => setResult(e.target.files[0])} type="file" id="postfile" className="postfile bg-transparent py-1 pr-3 rounded-lg  border outline-none border-blue-600 w-[100%]" />
          </div>
        </div>
        <div className="my-5">
          {
            (Commited == false) ? <p className="bblog cursor-not-allowed text-center bg-blue-800 text-slate-400 py-1 pl-3 rounded-lg font-bold w-[100%]">إضافة النتيجة للكلية</p> : <p className="cursor-pointer text-center bg-blue-600 text-white py-1 pl-3 rounded-lg hover:bg-blue-700 font-bold w-[100%]" onClick={() => submitResult()}>إضافة النتيجة للكلية</p>
          }
        </div>
      </div>
    </>
  )
}

export default ResultField