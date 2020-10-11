import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Layout from '../components/Layout'
import styles from  './about.module.css';

function About() {
    return (
        <Layout header='ABOUT PAGE TITLE'>
            <div>
                <Header head='About Page Header !!!' />
                <h1 className={styles.head}>Hello from About Component</h1>
                <br/>
                <Link to='/'>Home</Link>
            </div>
        </Layout>
    )
}

export default About
