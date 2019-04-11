import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaJediOrder } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello from Gatsby!</h1>
    <FaJediOrder />
  </Layout>
)

export default IndexPage
