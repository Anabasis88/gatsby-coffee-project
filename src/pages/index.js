import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello from Gatsby!</h3>
    <div className="container">
      <div className="row">
        <div className="col-6">TEST</div>
        <div className="col-5">TEST</div>
        <div className="col-1">TEST</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
