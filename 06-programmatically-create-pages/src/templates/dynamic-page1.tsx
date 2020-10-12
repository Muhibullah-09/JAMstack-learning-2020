import React from "react";

export default ({pageContext}) => {
  return (
    <div>
      <div>Hello Dynamic Page 1 from {pageContext.name}</div>
      <div>This page is create dynamically at Build Time</div>
    </div>
  )
}