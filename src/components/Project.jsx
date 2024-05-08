import React from 'react'
import './Project.css'

export default function Project() {
    return (
        <>
            <div className="title">
                <div className="myproject-name">
                    <h1>My projects &#x2192;</h1>
                </div>
            </div>

            <div className="projects-container">
                <div className="cards">
                    <main className="page-content">
                        <div className="card">
                            <div className="content">
                                <h2 className="title">Weather App</h2>
                                <p className="copy">Checkout Real Time Temperature Of Any Location in The Whole World</p>
                                <a href="https://javeriyazubair.github.io/weather-app/"><button className="btn">View Project</button></a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <h2 className="title">To-do App</h2>
                                <p className="copy">Create-Read-&Delete your Notes With Todo-App</p>
                                <a href="https://javeriyazubair.github.io/todo-list-master/"><button className="btn">View Project</button></a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <h2 className="title">Rock-Paper-Scissor App</h2>
                                <p className="copy">Getting Bored? Have fun With This Cool Gaming App !</p>
                                <a href="https://javeriyazubair.github.io/YT-rock-paper-scissors-game-master/"><button className="btn">View Project</button></a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <h2 className="title">Mp3 App</h2>
                                <p className="copy">Listen to your favourite songs with just one click</p>
                                <a href="https://javeriyazubair.github.io/mp3/"><button className="btn">View Project</button></a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <h2 className="title">Notes App</h2>
                                <p className="copy">Keep track of everything with your written notes</p>
                                <a href="https://javeriyazubair.github.io/notes-app/"><button className="btn">View Project</button></a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <h2 className="title">Drawing App</h2>
                                <p className="copy">Push your imagination to art.
                                    Try drawing</p>
                                <a href="https://javeriyazubair.github.io/drawing-app/"><button className="btn">View Project</button></a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <h2 className="title">Quiz App</h2>
                                <p className="copy">Wanna challenge yourself? Have a self-quiz competition</p>
                                <a href="https://javeriyazubair.github.io/quiz/"><button className="btn">View Project</button></a>
                            </div>
                        </div>
                        {/* <div className="card">
                            <div className="content">
                                <h2 className="title">Explore The Galaxy</h2>
                                <p className="copy">Seriously, straight up, just blast off into outer space today</p>
                                <button className="btn">Book Now</button>
                            </div>
                        </div> */}
                    </main>
                </div>
            </div>
        </>
    )
}
