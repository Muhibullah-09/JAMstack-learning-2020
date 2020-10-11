import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Layout from '../components/Layout'

function Home() {
  return (
    <Layout header='HOME PAGE TITLE'>
      <div>
        <Header head='Home Page Header !!!' />
        <h1 className='head' >Hello from Home Component</h1>
        <br />
        <Link to='/about'>About</Link>
      </div>
    </Layout>
  )
}

export default Home