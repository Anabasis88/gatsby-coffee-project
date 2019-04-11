import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 1,
        path: "/about",
        text: "about",
      },
    ],
  }
  navbarHandler = () => {
    console.log("hello!")
  }
  render() {
    return <div>navbar content</div>
  }
}
