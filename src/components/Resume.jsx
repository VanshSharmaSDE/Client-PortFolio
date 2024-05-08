import React from 'react'
import './Resume.css'
import Resumsepic from '../assets/Resume-pic.jpg'
import DownlodeButton from './DownlodeButton'
import resume from '../assets/resumeJ.pdf'

export default function Resume() {
    return (

        <>
            <div className="resume-wrapper">
                <section className="profile section-padding">
                    <div className="container">
                        <div className="picture-resume-wrapper">
                            <div className="picture-resume">
                                <div className="circle-1" />
                                <div className="circle-2" />
                                <img src={Resumsepic} alt="" />
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="name-wrapper">
                            <h1>Javeriya <br />Zubair</h1>
                        </div>
                        <div className="clearfix" />
                        <div className="contact-info clearfix">
                            <ul className="list-titles" style={{ listStyle: 'none' }}>
                                <li>Call </li>
                                <li>Mail </li>
                                <li>Home </li>
                                <li>GitHub </li>
                                <li>LinkedIn </li>
                            </ul>
                            <ul className="list-content" style={{ listStyle: 'none', paddingLeft: 0 }}>
                                <li><a href="tel:839-580-0989">+91 839 580 0989</a></li>
                                <li><a href="mailto:javeriya0225@gmail.com?subject=Following up from Résumé">javeriya0225@gmail.com</a></li>
                                <li>Moradabad,Up, India</li>
                                <li><a href="https://github.com/JaveriyaZubair">github.com/JaveriyaZubair</a></li>
                                <li><a href="https://www.linkedin.com/in/javeriya-zubair-a3b15a292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin.com/JaveriyaZubair</a></li>
                            </ul>
                        </div>
                        <a href={resume} download="Resume">
                            <DownlodeButton></DownlodeButton>
                        </a>
                        <div className="contact-presentation">
                            {/* YOUR PRESENTATION RESUME  */}
                            <p><span className="bold">Education--  </span> Diploma in Computer Science and Engineering in 2017-2020 B. Tech in Computer Science and Engineering in 2020-2023</p>
                        </div>
                        <div className="contact-social clearfix">
                            <ul className="list-titles" style={{ listStyle: 'none' }}>
                                <li>Contacts</li>
                                <li>Javeriya Zubair </li>
                                <li>Dhruv kashyap </li>
                            </ul>
                            <ul className="list-content" style={{ listStyle: 'none', paddingLeft: 0 }}> {/* REMEMBER TO PUT THE URL ON THE HREF TAG  */}
                                <li>&nbsp;</li>
                                <li><a href="tel:839-580-0989">(839) 580 0989</a></li>
                                <li><a href="tel:970-640-7270">(750) 583-2422</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="experience section-padding" style={{ marginTop: '-1rem' }}>
                    <div className="container">
                        <h3 className="experience-title">Experience</h3>
                        <div className="experience-wrapper">
                            <div className="company-wrapper clearfix">
                                <div className="experience-title">Fresher --</div>
                                <div className="time">0 Years</div>
                            </div>
                            <div className="job-wrapper clearfix">
                                <div className="experience-title">-------</div>
                                <div className="company-description">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, facere!</p>
                                </div>
                            </div>
                            <h3 className="experience-title">Extra Circulum</h3>
                            <div className="company-wrapper clearfix">
                                <div className="experience-title">Skyscanner Front-End Software Engineering</div>
                                <div className="time">November 2023</div>
                            </div>
                            <div className="job-wrapper clearfix">
                                <div className="experience-title">Virtual experience programme on Forage</div>
                                <div className="company-description">
                                    <p>* Completed a job simulation where I built a web application using React as a
                                        front-end engineer at Skyscanner.</p>

                                    <p> * Developed a page for picking a travel date using Skyscanner’s open-source
                                        Backpack React library.</p>

                                    <p> * Customised my application and ran automated tests to ensure it rendered
                                        properly.</p>
                                </div>
                            </div>
                            <h3 className="experience-title">Certificates</h3>
                            <div className="company-wrapper clearfix">
                                <div className="experience-title">Training/Courses</div>
                            </div>
                            <div className="job-wrapper clearfix">
                                <div className="experience-title">Php by Dzine solutions,
                                    ,Java by Dzine solutions
                                   , Python by Dzine solutions
                                    ,JavaScript by Dzine solutions</div>
                            </div>
                        </div>
                        <div className="section-wrapper clearfix">
                            <h3 className="section-title">Skills</h3>
                            <ul style={{ listStyle: 'none' }}>
                                <li className="skill-percentage">HTML</li>
                                <li className="skill-percentage">CSS</li>
                                <li className="skill-percentage">Javascript</li>
                                <li className="skill-percentage">React</li>
                                <li className="skill-percentage">Java</li>
                                <li className="skill-percentage">Python</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="clearfix" />
            </div>
        </>
    )
}
