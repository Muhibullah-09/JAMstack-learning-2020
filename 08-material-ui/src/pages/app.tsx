import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Client1 from "../components/Client1"
import Client2 from "../components/Client2"

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <Client1 path="/client1" />
        <Client2 path="/client2" />
      </Router>
    </Layout>
  )
}

export default App