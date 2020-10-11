import React from 'react'
import Header from '../components/Header'
import { Link } from 'gatsby'

function about() {
    return (
        <div>
            <Header title='About Page' />
            <h1>Hello from About Page !!</h1>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default about
