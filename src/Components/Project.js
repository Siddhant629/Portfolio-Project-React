import React from 'react'
import projects from './data/projects.json'

const Project = () => {
    return (
        <>
            <div className='container projects my-3'id='projects'>

                <h1>PROJECTS</h1>
                <div className='row d-flex justify-content-center align-content-center'>
                    {projects.map((data) => (
                        <>
                            <div key={data.id} className='my-3 col-sm-6 col-md-4 col-lg-3 co'>
                                <div class="card bg-dark text-light" style={{width: "18rem", border: "3px solid yellow",boxShadow:'5px 5px  10px 3px rgba(101,175,10,0.5)'}}
                                data-aos="flip-left" data-aos-duration="1000">
                                    <div className='img d-flex justify-content-center align-content-center'>    
                                    <img src={data.imageSrc} class="card-img-top" alt="..."style={{width:'250px', height:'250px'}}/>

                                    </div>
                                   
                                        <div class="card-body">
                                            <h5 class="card-title">{data.title}</h5>
                                            <p class="card-text">{data.description}</p>
                                            <a href={data.demo} class="btn btn-primary mx-3">Demo</a>
                                            <a href={data.source} class="btn btn-warning">Code</a>
                                        </div>
                                </div>
                                </div>




                           

                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Project