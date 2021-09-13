import React from 'react'

import { FaLinkedin, FaGithub } from 'react-icons/fa';




export default function Home() {
    return (

        <div className="mar-b">

            <div className="container mt-5 ">
                <div className="row">
                <div className="col-md ">
          <h1 className="mb-3 display-3">Mobile developer</h1>
                <p className="text-about">Ariel Ortiz - Experience development React Native apps, iOS(Swift), and mobile games with Unity.</p>
          </div>
  
          <div className="col-md text-center mt-4">
                <a href="https://github.com/Ariel0123" className="align fs-4"><FaGithub size={35} className="p-1"/> GitHub</a>
                <a href="https://www.linkedin.com/in/ariel-ortiz-b66979186/" className="align fs-4"><FaLinkedin size={35} className="p-1"/> Linkedin</a>
            </div>
                </div>
            </div>

            <div className="container mt-top">
                <h1 className="text-white sub sub-s">Projects</h1>

                <div className="row mt-3">

                
                    <div className="card col-md card-color m-2">
                        <img className="card-img-top" src={process.env.PUBLIC_URL +"/images/note_w.png"} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-white">Your Note</h5>
                            <p className="text-white">App for notes, made with React Native.</p>

                            <a href={"https://play.google.com/store/apps/details?id=com.WaveGamesPlay.YourNote"} className="btn btn-primary">Go to Play Store</a>
                        </div>
                    </div>
                    <div className="card col-md card-color m-2">
                        <img className="card-img-top" src={process.env.PUBLIC_URL +"/images/incomenify_w.png"} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-white">Incomenify</h5>
                            <p className="text-white">App for Income management, made with React Native.</p>

                            <a href={"https://play.google.com/store/apps/details?id=com.WaveGamesPlay.Incomenify"} className="btn btn-primary">Go to Play Store</a>
                        </div>
                    </div>

                    <div className="card col-md card-color m-2">
                        <img className="card-img-top" src={process.env.PUBLIC_URL +"/images/note_t.png"} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-white">Note Thread</h5>
                            <p className="text-white">This note app was created with SwiftUI, you can create a note, edit note, delete note, check notes, select by categories and sort by checked and unchecked.</p>
                            <a href={"https://apps.apple.com/us/app/note-thread/id1583119687"} className="btn btn-primary">Go to App Store</a>
                        </div>
                    </div>

                  
                </div>



                <div className="row ">
                   
                    <div className="card col-md card-color m-2">
                        <img className="card-img-top" src={process.env.PUBLIC_URL +"/images/piggy_w.png"} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-white">Piggy Jumper</h5>
                            <p className="text-white">Jump over obstacles to get the highest score, made with Unity.</p>

                            <a href={"https://play.google.com/store/apps/details?id=com.WaveGamesPlay.PiggyJumper"} className="btn btn-primary">Go to Play Store</a>
                        </div>
                    </div>
                    <div className="card col-md card-color m-2">
                        <img className="card-img-top" src={process.env.PUBLIC_URL +"/images/hollow_w.png"} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-white">Hollow Pumpkin</h5>
                            <p className="text-white">Destroy all the Pumpkins before they catch you, made with Unity.</p>
                            <a href={"https://play.google.com/store/apps/details?id=com.WaveGamesPlay.HollowPumpkin"} className="btn btn-primary">Go to Play Store</a>
                        </div>
                    </div>

                    <div className="card col-md card-color m-2">
                        <img className="card-img-top" src={process.env.PUBLIC_URL +"/images/ufo_w.png"} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-white">Crazy Ufo's</h5>
                            <p className="text-white">Destroy all the Ufo's before they destroy the planet, made with Unity.</p>
                            <a href={"https://play.google.com/store/apps/details?id=com.WaveGamesPlay.CRAZYUFOs"} className="btn btn-primary">Go to Play Store</a>
                        </div>
                    </div>
                </div>

                    
                    
            </div>

           



        </div>

    )
}
