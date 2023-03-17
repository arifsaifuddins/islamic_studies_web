import React, { useState } from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import apis from '../../apis'
import { ConfirmAlert } from '../../confirm'
import { useCookies } from 'react-cookie'
import { FiTrash } from 'react-icons/fi'
import Loader from '../../layouts/Loader'

const About = () => {
  const [VisMis, setVisMis] = useState(null)
  const [cookies] = useCookies()

  useEffect(() => {
    apis.getVismis().then(a => setVisMis(a.data))
  }, [])

  const vision = VisMis?.filter(a => a.category == '1')
  const mission = VisMis?.filter(a => a.category == '2')
  const risalat = VisMis?.filter(a => a.category == '3')
  const qiyam = VisMis?.filter(a => a.category == '4')

  return (
    <>
      <Helmet>
        <title>Islamic Studies | التعريف بالكلية</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>التعريف بالكلية</h1>
      </div>
      <div className="bg-white border-t-4 border-blue-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute rounded-bl-lg bg-blue-600 w-max text-white'>عن كلية الدراسات الإسلامية</h2>
          <div className="mx-auto  lg:w-[900px] w-full leading-9 py-32">
            <img src="/building.jpg" alt="photo" className='object-cover  hover:object-right-bottom transition-all duration-500 w-full mb-14 h-60' />
            <p className="mb-12">
              جاء إنشاء هذه الكلية تلبية لحاجة أبناء المسلمين في مختلف بقاع العالم للتزود بسلاح العلم الشرعي، والمعارف الإسلامية، وتأهيلهم وتنمية قدراتهم لأداء دورهم للقيام بواجب الدعوة الإسلامية في بلادهم، وفق أهداف الجامعة ورسالتها، وخصوصية طلابها.
            </p>
            <p className="mb-12">
              يعود تاريخ إنشاء الكلية إلى عام 1986م تحت اسم كلية الدعوة والدراسات الإسلامية، وكان ذلك تطويراً لدبلوم الدعوة في المركز الإسلامي الإفريقي، وفي أول نشأتها ارتبطت علمياً بجامعة أم درمان الإسلامية التي كانت تمنح الدرجة العلمية البكالريوس لخريجي الكلية، وبإنشاء الجامعة عام 1991م استقلت بمناهجها وبناءاتها، وأصبحت تحمل اسم  كلية الشريعة والدراسات الإسلامية.
            </p>
            <p className="mb-12">
              تأسست كلية الدراسات الإسلامية وكان ذلك نتاجاً طبيعياً؛ لتطور الجامعة تطوراً أفقياً وراسياً، لا سيما في زيادة عدد الكليات المتخصصة، فعلى سبيل المثال لا الحصر، تطور كلية الشريعة والدراسات الإسلامية؛ لكليتي الشريعة والقانون، وكلية الدراسات الإسلامية، التي ضمت حين تأسيسها أقسام: قسم التفسير وعلوم القرآن، وقسم السنة وعلوم الحديث وقسم العقيدة والفكر الإسلامي، وقسم الدعوة والسيرة.
            </p>
            <p className="mb-12">
              ما انفكت الكلية تؤدي رسالة الجامعة، وترفد المجتمعات المحلية والعالمية بخريجين، على مدى عقدٍ من الزمان، من خلال واجبها التعليمي والبحثي وفي خدمات المجتمعات على أكمل وجه، لكن دون أن يحدث لها تطوير لمناهجها، تواكب المتغيرات المتسارعة، مما جعل أمر النظر في تحديث هذه المناهج وتنقيحها، ضرورة علمية؛ لمواكبة التطور العلمي الهائل في مجال الدراسات الإسلامية، وتلبية المناهج لسوق العمل وإضافة ما هو مفيد لأقسامها.
            </p>
            <p className="mb-12">
              تعد هذه الندوة، الخطوة الأولى في طريق بناء استراتيجية، تقوم على أفضل مؤشرات القياس وتحقيق الجودة والتقويم وتحقيق الاعتماد، لتميز الكلية وتطوير مناهجها وتنقحيها، لا سيما وقد تطور قسم التفسير وعلوم القرآن بالكلية؛ ليصبح كلية القرآن الكريم في العام 2018م.
            </p>
            <p>
              ووفقاً للخطة الاستراتيجية للجامعة 2010-2020م التي وافق عليها مجلس الأمناء في دورته رقم 17 للعام 2011م، تقرر تطوير كلية الشريعة والدراسات الإسلامية إلى كليتين، وترجم ذلك إلى واقع بقرار المجلس العلمي رقم 111 سبتمبر 2012م . وتطوير قسم الدراسات الإسلامية في كلية الشريعة والدراسات الإسلامية ليصبح كلية الدراسات الإسلامية، وأنشئت وفق هذه القرارات لجنة عليا مختصةللاضطلاع بمهمة ضبط وتحديث مناهج الكلية الجديدة، ثم أقيمت ورشة علمية لتقويم عمل اللجنة، شارك فيها خبراء من جامعات عريقة في البلاد، خرجت بموجهات أكاديمية منضبطة قائمة على رؤية واضحة، ورسالة قاصدة تضطلع بها الكلية الجديدة، التي تعدّ من أهم كليات الجامعة، حيث تعني بدراسة العلوم الإسلامية لتخرج العلماء والدعاة لسد حاجات المسلمين في هذا المجال في المجتمعات المستهدفة.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t-4 border-blue-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:left-0 left-4 rounded-br-lg bg-blue-600 w-max text-white'>الرؤيات والأهداف لكلية الدراسات الإسلامية</h2>
          <div className="mx-auto lg:w-[900px] w-full leading-9 py-32">
            {
              vision != null ? vision?.length > 0 && (
                <>
                  <h2 className='text-2xl font-bold text-blue-600 mb-12'>رؤيات الكلية</h2>
                  {
                    vision?.map(a => {
                      return (
                        <ul key={a._id}>
                          <li className='flex flex-row relative mb-6'>
                            {
                              cookies.admin && cookies.id_admin && (
                                <button onClick={() => ConfirmAlert(a._id, 'vismis')} className="h-8 w-8 rounded-br-lg rounded-tl-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute left-0">
                                  <FiTrash color='white' />
                                </button>
                              )
                            }

                            <div className="h-6 w-6 rounded-full bg-blue-600 absolute -top-3"></div>
                            <p className='py-2 px-6 rounded-lg bg-white mr-3 w-full'>{a.point}</p>
                          </li>
                        </ul>
                      )
                    })
                  }
                </>
              ) : (
                <Loader />
              )
            }
            {
              mission?.length > 0 && (
                <>
                  <h2 className='text-2xl mt-20 font-bold text-blue-600 mb-12'>أهداف الكلية</h2>
                  {
                    mission?.map(a => {
                      return (
                        <ul key={a._id}>
                          <li className='flex flex-row relative mb-6'>
                            {
                              cookies.admin && cookies.id_admin && (
                                <button onClick={() => ConfirmAlert(a._id, 'vismis')} className="h-8 w-8 rounded-br-lg rounded-tl-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute left-0">
                                  <FiTrash color='white' />
                                </button>
                              )
                            }

                            <div className="h-6 w-6 rounded-full bg-blue-600 absolute -top-3"></div>
                            <p className='py-2 px-6 rounded-lg bg-white mr-3 w-full'>{a.point}</p>
                          </li>
                        </ul>
                      )
                    })
                  }
                </>
              )
            }
            {
              risalat?.length > 0 && (
                <>
                  <h2 className='text-2xl mt-20 font-bold text-blue-600 mb-12'>رسالات الكلية</h2>
                  {
                    risalat?.map(a => {
                      return (
                        <ul key={a._id}>
                          <li className='flex flex-row relative mb-6'>
                            {
                              cookies.admin && cookies.id_admin && (
                                <button onClick={() => ConfirmAlert(a._id, 'vismis')} className="h-8 w-8 rounded-br-lg rounded-tl-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute left-0">
                                  <FiTrash color='white' />
                                </button>
                              )
                            }

                            <div className="h-6 w-6 rounded-full bg-blue-600 absolute -top-3"></div>
                            <p className='py-2 px-6 rounded-lg bg-white mr-3 w-full'>{a.point}</p>
                          </li>
                        </ul>
                      )
                    })
                  }
                </>
              )
            }
            {
              qiyam?.length > 0 && (
                <>
                  <h2 className='text-2xl mt-20 font-bold text-blue-600 mb-12'>قيم الكلية</h2>
                  {
                    qiyam?.map(a => {
                      return (
                        <ul key={a._id}>
                          <li className='flex flex-row relative mb-6'>
                            {
                              cookies.admin && cookies.id_admin && (
                                <button onClick={() => ConfirmAlert(a._id, 'vismis')} className="h-8 w-8 rounded-br-lg rounded-tl-lg text-xl flex items-center justify-center font-bold bg-red-600 absolute left-0">
                                  <FiTrash color='white' />
                                </button>
                              )
                            }

                            <div className="h-6 w-6 rounded-full bg-blue-600 absolute -top-3"></div>
                            <p className='py-2 px-6 rounded-lg bg-white mr-3 w-full'>{a.point}</p>
                          </li>
                        </ul>
                      )
                    })
                  }
                </>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default About
