import React from 'react'
import './Home.css'
import pic from '../assets/picture.jpg'
import { useState } from 'react'
import Contact from './contact'
import instagram from '../assets/instagram.png'
import linkdin from '../assets/linkedin.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'


export default function Home(props) {

   const [hiremename,setname] = useState("Hire Me");

    const [isShow, setshow] = useState(false)

    const showcontactform = () => {
        if (isShow == true) {
            setshow(false)
            setname("Hire Me")
        } else {
            setshow(true)
            setname("Close")
        }
    }

    return (
        <div className="main">
            <div className="left">
                <div className="intro">
                    <h5>Hello !</h5>
                    <div className="H1">
                        <h3>I'M</h3>
                        <h1>{props.firstname}</h1>
                    </div>
                    <h1>{props.lastname}</h1>
                    <h2>{props.jobTitle}</h2>
                </div>
                {
                    isShow && <Contact></Contact>
                }
                <div className="important_buttons">
                    <div className="leftbutton">
                        <button onClick={showcontactform}>{hiremename}</button>
                    </div>
                    <div className="rightbutton">
                        <button>Skills</button>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={pic} alt="" />
            </div>
            <div className="links">
                <ul>
                    <li><a href=""><img src={instagram} alt="" /></a></li>
                    <li><a href="https://www.linkedin.com/in/javeriya-zubair-a3b15a292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkdin} alt="" /></a></li>
                    <li><a href=""><img src={twitter} alt="" /></a></li>
                    <li><a href="https://github.com/JaveriyaZubair"><img src={github} alt="" /></a></li>
                </ul>
            </div>
        </div>
    )
}
