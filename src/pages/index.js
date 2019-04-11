import React from "react"
//import { Link } from "gatsby"
import { FaBeer } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello from Gatsby!</h3>
    <div className="container">
      <h3>
        Lets go for a <FaBeer />?{" "}
      </h3>
      <div className="row">
        <div className="col-6">TEST</div>

        <div className="col-5">TEST</div>
        <div className="col-1">TEST</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
