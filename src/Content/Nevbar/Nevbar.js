import React from 'react'
import { Link } from 'react-router-dom'
const img = require("../../images/logo.png")
const Nevbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
  <Link class="navbar-brand" to="/">
    <img src={img} alt="myogo"/>
    <p>MT WEB SOLUTION</p>
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" to="/features">Features</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" to="/project">Project</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" to="/about">About</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Nevbar