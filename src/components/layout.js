/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, mainClassName="", hasLogo=true }) => {

  return (
    <>
      <Header hasLogo={hasLogo}/>
      <div className="font-sans">
        <main className={mainClassName}>{children}</main>
      </div>
    </>
  )
}

export default Layout
