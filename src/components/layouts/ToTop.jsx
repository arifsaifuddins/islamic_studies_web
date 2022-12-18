import React from "react"
import { FiArrowUp } from 'react-icons/fi'

const ToTop = () => {

  window.addEventListener("scroll", () => {
    const toTop = document.querySelector(".topscroll")

    if (window.pageYOffset >= 300) {
      toTop.classList.remove('hidden')
      toTop.classList.add('block')
    } else {
      toTop.classList.remove('block')
      toTop.classList.add('hidden')
    }
  })

  return (
    <div>
      <a href="#" className="topscroll hidden ">
        <i className="fixed bottom-4 lg:bottom-8 left-4 lg:left-8 bg-yellow-600 p-2 cursor-pointer hover:bg-yellow-400 rounded-xl text-lg text-white font-bold z-10">
          <FiArrowUp />
        </i>
      </a>
    </div>
  )
}

export default ToTop