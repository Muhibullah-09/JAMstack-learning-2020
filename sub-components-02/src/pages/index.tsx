import React from "react"
import Header from "../components/Header"
import { Link } from 'gatsby'

export default function Home() {
  return (
    <div>
      <Header title='Index Page'/>
      <h1>Hello world Home Page !!</h1>
      <br/>
      <Link to='/about'>About</Link>
    </div>
  )
}