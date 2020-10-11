//Now if we need header and footer in my website all pages.
//best practice is in gatsby that make Layout for that purpose.
//if we don't pass children your content is not visible on any component where you call Layout component.

import React, { ReactNode } from "react";
import { Link } from "gatsby";
import Header from "./Header";

type LayoutProps = {
    children: ReactNode
    header: string
}

export default ({ children , header}: LayoutProps) => {
  return (
    <div>
        <Header head={header}/>
        <div>
            {children}
        </div>
    </div>
  )
}