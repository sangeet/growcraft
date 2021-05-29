import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const Header = ({ hasLogo }) => {
  const [isActive, setActive] = useState(false)
  const [isSmall, setSmall] = useState(false)
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -300) {
      setSmall(true)
    } else {
      setSmall(false)
    }
  })
  const height = isSmall ? "md:h-16" : "md:h-24"
  const mobileHeight = isSmall ? "h-10" : "h-20"
  const shadow = isSmall ? "shadow" : "shadow-lg"
  const justify = hasLogo ? "justify-between" : "justify-end"
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Course",
      href: "/course",
    },
  ]
  return (
    <header
      className={`bg-green-500 text-white font-bold ${shadow} fixed w-full z-40 font-sans transition-all duration-300`}
    >
      <div
        className={`mx-auto container px-10 py-3 flex flex-wrap ${justify} items-center text-xl transition-all duration-300 ${height}`}
      >
        {hasLogo && (
          <Link to="/" className="w-40 h-full">
            <StaticImage
              src="../images/growcraft-logo.webp"
              alt="Logo"
              className="object-contain h-full"
              placeholder="blurred"
              objectFit="contain"
              objectPosition="left"
            />
          </Link>
        )}
        <button
          className={`md:hidden ${mobileHeight} flex items-center transition-all duration-300`}
          onClick={() => setActive(!isActive)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
        <ul
          className={`${
            isActive ? "flex md:flex" : "hidden md:flex"
          } flex-col md:flex-row items-center w-full md:w-auto bg-green-500`}
        >
          {links.map((link, index) => (
            <li className="px-3 py-2 md:py-0" key={index}>
              <Link to={link.href} className="text-white">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
