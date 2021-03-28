import * as React from "react"
import { useState } from "react"

const Header = ({ siteTitle }) => {
  const [isActive, setActive] = useState(false)
  return (
    <header class="bg-green-500 text-white font-bold shadow-lg fixed w-full z-40 font-sans">
      <div class="mx-auto container px-10 lg: flex flex-wrap justify-end py-8 text-xl">
        <span class="md:hidden"><i class="fas fa-bars text-2xl" onClick={() => setActive(!isActive)}></i></span>
        <ul class={`${isActive ? 'flex md:flex' : 'hidden md:flex'} flex-col md:flex-row items-center w-full md:w-auto` }>
          <li class="px-3 py-2 md:py-0"> <a href="#" class="text-white"> Home </a> </li>
          <li class="px-3 py-2 md:py-0"> <a href="#" class="text-white"> About Us </a> </li>
          <li class="px-3 py-2 md:py-0"> <a href="#" class="text-white"> Course </a> </li>
          <li class="px-3 py-2 md:py-0"> <a href="#" class="text-white"> Store </a> </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
