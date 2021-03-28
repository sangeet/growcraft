/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header/>
      <div class="font-sans">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
