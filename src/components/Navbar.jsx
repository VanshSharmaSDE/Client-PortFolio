import React from 'react'
import './Navbar.css'
import './NavbarResponsive.css'
import dev from '../assets/Developer.png'
import home from '../assets/home.png'
import about from '../assets/about.png'
import blog from '../assets/blog.png'
import project from '../assets/project.png'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div className="navbar">
        <div className="Developer">
            <img src={dev} alt="" /><h1>{props.title}</h1>
        </div>
        <div className="nav_links">
                <li><img src={home} alt="" /><Link to="/">Home</Link></li>
                <li><img src={about} alt="" /><Link to="/about">About</Link></li>
                <li><img src={blog} alt="" /><Link to="/project">Projects</Link></li>
                <li><img src={project} alt="" /><Link to="/resume">Resume</Link></li>
        </div>
    </div>
  )
}
