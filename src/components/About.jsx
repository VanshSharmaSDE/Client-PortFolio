import React from 'react'
import './About.css'
import aboutpic from '../assets/about-pic.png'
import picture from '../assets/picture.png'
import { useState } from 'react'

export default function About() {

    const [showabout, setshowabout] = useState(false)
    const [readmore, setname] = useState("Read More");

    const Sabout = () => {
        if (showabout == true) {
            setshowabout(false)
            setname("Read More")
        } else {
            setshowabout(true)
            setname("Fold")
        }
    }

    return (
        <>
            <div className="main">
                <div className="left">
                    <div className="imgSection">
                        <div className="circle" >
                        </div>
                        <div className="circle2">
                            <img src={aboutpic} alt="" />
                        </div>
                    </div>
                    {
                        showabout && (<div style={{ margin: 180 }} className="imgSection">
                            <div className="circle" >
                            </div>
                            <div className="circle2">
                                <img  src={picture} alt="" />
                            </div>
                        </div>)
                    }
                </div>
                <div className="right2">
                    <div className="aboutMeSection">
                        <h1 style={{ color: "#E27627" }}>About Me</h1>
                        <p style={{ color: "white" }}>
                            My name is JAVERIYA ZUBAIR and I am a recent graduate with a passion for front-end development, I am eager to apply my skills and knowledge to real-world projects. Throughout my academic journey, I have honed my expertise in HTML, CSS, JavaScript, and various front-end frameworks. I thrive in dynamic environments where I can collaborate with diverse teams to create intuitive user interfaces and engaging web experiences. With a strong attention to detail and a commitment to continuous learning, I am excited to embark on a career where I can contribute to innovative solutions and make a meaningful impact in the world of software development.
                        </p>
                        {
                            showabout && (<p>As a recent graduate in software development with a passion for front-end development, I am excited to embark on a career where I can combine my technical skills with my creativity to build immersive and user-friendly web experiences. Throughout my academic journey, I have gained a solid foundation in programming languages such as HTML, CSS, and JavaScript, along with frameworks like React and Angular. Driven by a curiosity to explore emerging technologies and trends in the field, I am constantly seeking opportunities to enhance my skills and stay updated with industry best practices. I thrive in collaborative environments where I can contribute ideas and work alongside talented individuals to bring concepts to life.

                                With a keen eye for design and a dedication to delivering high-quality solutions, I am committed to creating seamless user interfaces that not only meet the needs of clients but also exceed their expectations. I am eager to leverage my knowledge and enthusiasm for front-end development to make meaningful contributions to innovative projects and contribute to the ever-evolving landscape of technology.</p>)
                        }
                        <button onClick={Sabout} >{readmore}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
