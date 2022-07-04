import React from 'react'

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {projects, games} from '../Data/projects'





export default function Home() {


    return (

        <div className="mar-b">

            <div className="container mt-5 ">
                <div className="row">
                <div className="col-md ">
          <h1 className="mb-3 display-3">iOS developer</h1>
                <p className="text-about">Hello, my name is Ariel Ortiz and I’m a iOS developer. I studied engineering in multimedia, I have experience creating mobile apps with Swift(iOS) and I also make video games with Unity. I’m always learning new things to expand my knowledge.</p>
          </div>
  
          <div className="col-md text-center mt-4">
                <a href="https://github.com/Ariel0123" className="align fs-4"><FaGithub size={35} className="p-1"/> GitHub</a>
                <a href="https://www.linkedin.com/in/ariel-ortiz-b66979186/" className="align fs-4"><FaLinkedin size={35} className="p-1"/> Linkedin</a>
            </div>
                </div>
            </div>

            <div className="container mt-top">
                <h1 className="text-white sub sub-s">iOS Projects</h1>

                <div className="row mt-3">

                { projects.map(item =>  (
                
                <div className="col-md-4 p-1" key={item.id}>
                    <div className="card  card-color " >
                        <img className="card-img-top" src={process.env.PUBLIC_URL +item.img} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-white">{item.title}</h5>
                            <p className="text-white">{item.description}</p>

                            <a href={item.url} className="btn btn-primary">{item.buttonText}</a>
                        </div>
                    </div>
                    </div>
                    

                    ))
                   
                }

                  
                </div>



                    
                    
            </div>


            <div className="container mt-top2">
                <h1 className="text-white sub sub-s">Video games</h1>

                <div className="row mt-3">

                { games.map(item =>  (
                
                <div className="col-md-4 p-1" key={item.id}>
                    <div className="card  card-color " >
                        <img className="card-img-top" src={process.env.PUBLIC_URL +item.img} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-white">{item.title}</h5>
                            <p className="text-white">{item.description}</p>

                            <a href={item.url} className="btn btn-primary">{item.buttonText}</a>
                        </div>
                    </div>
                    </div>
                    

                    ))
                   
                }

                  
                </div>



                    
                    
            </div>




        </div>

    )
}
