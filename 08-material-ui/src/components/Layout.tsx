//Now if we need header and footer in my website all pages.
//best practice is in gatsby that make Layout for that purpose.
//if we don't pass children your content is not visible on any component where you call Layout component.

import React, { ReactNode } from "react";
import { Link } from "gatsby";

type LayoutProps = {
    children: ReactNode
}

export default ({ children }: LayoutProps) => {
  return (
    <div>
      <h1>My JAMstack Application</h1>
      <Link to="/about">About</Link>
      <br/>
      <Link to="/">Home</Link>
      {children}
    </div>
  )
}