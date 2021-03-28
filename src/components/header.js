import * as React from "react"

const Header = ({ siteTitle }) => (
  <header class="bg-green-500 text-white font-bold shadow-lg fixed w-full z-40 font-sans">
    <div class="mx-auto container flex justify-end py-8 text-xl">
      <ul class="flex">
        <li class="px-3"><a href="#" class="text-white">Home</a></li>
        <li class="px-3"><a href="#" class="text-white">About Us</a></li>
        <li class="px-3"><a href="#" class="text-white">Course</a></li>
        <li class="px-3"><a href="#" class="text-white">Store</a></li>
      </ul>
    </div>
  </header>
)

export default Header
