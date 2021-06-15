import React from 'react'

import { FaLinkedin, FaGithub } from 'react-icons/fa';




export default function Home() {
    return (

        <div className="mar-b">

            <div className="container mt-5">
                <h1 className="text-white name ">Ariel Ortiz</h1>
                <h1 className="color-t sub">Full stack developer</h1>
                <h1 className="color-t">Experience development React Native apps and mobile games with Unity.</h1>
            </div>

            <div className="container mt-top">
                <h1 className="text-white sub">Projects</h1>

                <div className="card-deck mt-3">

                
                    <div className="card col-sm-4 card-color">
                        <img className="card-img-top" src={process.env.PUBLIC_URL +"/images/note_w.png"} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-white">Your Note</h5>
                            <p className="text-white">App for notes, made with React Native.</p>

                            <a href={"https://play.google.com/store/apps/details?id=com.WaveGamesPlay.YourNote"} className="btn btn-primary">Go to website</a>
                        </div>
                    </div>
                    <div className="card col-sm-4 card-color">
                        <img className="card-img-top" src={process.env.PUBLIC_URL +"/images/incomenify_w.png"} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-white">Incomenify</h5>
                            <p className="text-white">App for Income management, made with React Native.</p>

                            <a href={"https://play.google.com/store/apps/details?id=com.WaveGamesPlay.Incomenify"} className="btn btn-primary">Go to website</a>
                        </div>
                    </div>
                    <div className="card col-sm-4 card-color">
                        <img className="card-img-top" src={process.env.PUBLIC_URL +"/images/ufo_w.png"} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-white">Crazy Ufo's</h5>
                            <p className="text-white">Destroy all the Ufo's before they destroy the planet, made with Unity.</p>
                            <a href={"https://play.google.com/store/apps/details?id=com.WaveGamesPlay.CRAZYUFOs"} className="btn btn-primary">Go to website</a>
                        </div>
                    </div>
                </div>



                <div className="card-deck mt-5">
                   
                    <div className="card col-sm-4 card-color">
                        <img className="card-img-top" src={process.env.PUBLIC_URL +"/images/piggy_w.png"} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-white">Piggy Jumper</h5>
                            <p className="text-white">Jump over obstacles to get the highest score, made with Unity.</p>

                            <a href={"https://play.google.com/store/apps/details?id=com.WaveGamesPlay.PiggyJumper"} className="btn btn-primary">Go to website</a>
                        </div>
                    </div>
                    <div className="card col-sm-4 card-color">
                        <img className="card-img-top" src={process.env.PUBLIC_URL +"/images/hollow_w.png"} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-white">Hollow Pumpkin</h5>
                            <p className="text-white">Destroy all the Pumpkins before they catch you, made with Unity.</p>
                            <a href={"https://play.google.com/store/apps/details?id=com.WaveGamesPlay.HollowPumpkin"} className="btn btn-primary">Go to website</a>
                        </div>
                    </div>

                    <div className="col-sm-4 ">
                        </div>
                </div>

                <hr className="mt-5 color-line-bottom" />
                    
                    
            </div>

           

            <div className="container content-a mt-5 ">
                
                <a href={"https://www.linkedin.com/in/ariel-ortiz-llamas-b66979186/"}><FaLinkedin size="30" color="white" className="mr-3" /></a>
                <a href={"https://github.com/ariel0123"}><FaGithub size="30" color="white" /></a>
            </div>



        </div>

    )
}
