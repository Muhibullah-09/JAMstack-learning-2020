import React from 'react'
import { Link } from 'gatsby'

export default ()  => {
    return (
        <div>
            <h1>Hello From Client 1 ONE</h1>
            <Link to='/app/client2'>Go to Client 2</Link>
        </div>
    )
}