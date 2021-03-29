import * as React from "react"
import { useState } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const Header = () => {
  const [isActive, setActive] = useState(false)
  const [isSmall, setSmall] = useState(false)
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -300) {
      setSmall(true)
    } else {
      setSmall(false)
    }
  })
  const padding = isSmall ? "py-3" : "py-8"
  const shadow = isSmall ? "shadow" : "shadow-lg"
  return (
    <header
      class={`bg-green-500 text-white font-bold ${shadow} fixed w-full z-40 font-sans transition-all duration-300`}
    >
      <div
        class={`mx-auto container px-10 ${padding} flex flex-wrap justify-end text-xl transition-all duration-300`}
      >
        <span class="md:hidden">
          <i
            class="fas fa-bars text-2xl"
            onClick={() => setActive(!isActive)}
          ></i>
        </span>
        <ul
          class={`${
            isActive ? "flex md:flex" : "hidden md:flex"
          } flex-col md:flex-row items-center w-full md:w-auto`}
        >
          <li class="px-3 py-2 md:py-0">
            <a href="#" class="text-white">
              Home
            </a>
          </li>
          <li class="px-3 py-2 md:py-0">
            <a href="#" class="text-white">
              About Us
            </a>
          </li>
          <li class="px-3 py-2 md:py-0">
            <a href="#" class="text-white">
              Course
            </a>
          </li>
          <li class="px-3 py-2 md:py-0">
            <a href="#" class="text-white">
              Store
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
