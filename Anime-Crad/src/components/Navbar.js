import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light ">
<div className='navbar-wrapper'>
    <h2>Anime Cards</h2>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar