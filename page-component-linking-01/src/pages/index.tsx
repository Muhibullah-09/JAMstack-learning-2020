import React from 'react';
import { Link } from 'gatsby';

function index() {
  return (
    <div>
       <h1>Hello from Main page</h1>
       <p>We can link pages in gatsby with "Link"</p>
      <Link to='/about'>About</Link>
      <br/>
      <Link to='/kamali'>Kamali</Link>
    </div>
  )
}

export default index