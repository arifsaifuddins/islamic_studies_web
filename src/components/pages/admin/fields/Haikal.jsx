import { useEffect, useState } from "react"
import { FiPlus } from "react-icons/fi"

function HaikalField({ url }) {

  const [Category, setCategory] = useState(null)
  const [Desc, setDesc] = useState(null)
  const [Mission, setMission] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.vissis').value !== '' && document.querySelector('.missis').value !== '' && document.querySelector('.descis').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Category, Desc, Mission])

  const submitHaikal = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')
    let works

    if (document.querySelector('.haikals')) {
      let Mis = []
      document.querySelectorAll('.haikals')
        .forEach(data => {
          if (data.value != '') {
            Mis.push(data.value)
          }
        })
      works = Mis
    }

    return await fetch(`${url}/haikal/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        category: document.querySelector('.vissis').value || parseInt(Category),
        description: Desc,
        works
      })
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)
        document.querySelector('.missis').value = ''
        document.querySelector('.descis').value = ''
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

  const addInput = (a) => {

    const div = document.createElement('div')
    const input = document.createElement('textarea')
    const close = document.createElement('p')

    close.innerHTML = '&times;'
    close.className = 'absolute left-3 top-3 cursor-pointer hover:text-blue-800 text-blue-600 text-3xl'
    close.onclick = e => e.target.parentElement.remove()

    input.placeholder = 'التعريف العملي الوظيفي'
    input.className = `mt-2 bg-transparent py-1 pr-3 pl-9 w-[100%] rounded-lg  border outline-none border-blue-600 ${a.toLowerCase()}s`

    div.append(input)
    div.append(close)
    div.className = 'relative'

    document.querySelector(`.${a.toLowerCase()}`).append(div)
  }

  return (
    <>
      <h1 className="text-center mb-6 mt-2 text-xl font-bold">إضافة العمل والتعريف الوظيفي</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-lg text-[#222222] flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-blue-600 hover:text-blue-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <label htmlFor="categ" className="my-2 block font-bold text-blue-600">النوع :</label>
      <select required id="categ" onChange={(e) => setCategory(e.target.value)} className="vissis bg-transparent p-3 rounded-lg  border outline-none border-blue-600 w-[100%]" >
        <option value="1">مجلس الكلية</option>
        <option value="2">عميد الكلية</option>
        <option value="3">نائب عميد الكلية</option>
        <option value="4">رؤوساء الأقسام</option>
        <option value="5">مسجل الكلية</option>
        <option value="6">رئيس وحدة الشؤون التعليمية</option>
        <option value="7">رئيس وحدة الشؤون الثقافية والاجتماعية</option>
        <option value="8">رئيس وحدة شؤون الخدمة المجتمعية</option>
        <option value="9">رئيس وحدة الكليات المنتسبة</option>
        <option value="10">رئيس وحدة شؤون الجودة وترقية الأداء</option>
        <option value="11">رئيس وحدة شؤون الدراسات العليا</option>
      </select>
      <label htmlFor="desc" className="my-2 block font-bold text-blue-600">التعريف بالعمل :</label>
      <input type="text" required id="desc" onChange={(e) => setDesc(e.target.value)} placeholder="التعريف بالعمل" className="descis bg-transparent py-1 p-3 rounded-lg  border outline-none border-blue-600 w-[100%] mb-2" />

      <div className="haikal">
        <div className="flex flex-row justify-between items-end text-blue-600 font-bold mb-3">
          <label htmlFor="missio" className="block">المعلومات :</label>
          <p onClick={() => addInput('haikal')} className="h-max -mb-1 cursor-pointer py-3">
            <FiPlus />
          </p>
        </div>
        <textarea required id="missio" onChange={(e) => setMission(e.target.value)} placeholder='التعريف العملي الوظيفي' className="missis haikals bg-transparent py-1 pr-3 rounded-lg border outline-none border-blue-600 w-[100%]" />
      </div>
      {
        (Commited == false) ? <p className="bmiss cursor-not-allowed text-center mt-4 bg-blue-800 text-slate-400 py-1 rounded-lg font-bold w-[100%]">إضافة الهيكل الوظيفي</p> : <p className="cursor-pointer text-center mt-4 bg-blue-600 text-white py-1 rounded-lg hover:bg-blue-700 font-bold w-[100%]" onClick={() => submitHaikal()}>إضافة الهيكل الوظيفي</p>
      }
    </>
  )
}

export default HaikalField