import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import projects from '../utils/projects.json';

const Projects = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const handleImgClick = (event) => {
        if (event.target.style.scale === '2') {
            return event.target.style.scale = 1;
        }
        event.target.style.scale = 2;
    }

    return (
        <div className='container my-1' id="projects">
            <h1 className='text-white text-center'>My Projects</h1>

            <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect} style={{ marginTop: '1.5rem', background: '#161B22', borderRadius: '1.5rem' }}>
                {projects.map((project, i) => {
                    return <Carousel.Item key={i} style={{ padding: '2rem' }}>
                        <div className="card mb-3" style={{ background: '#0D1117' }}>
                            <img src={`img/${project.fname.toLowerCase()}.png`} loading='lazy' onClick={handleImgClick} className="project-img card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-warning" style={{ color: '' }}>{project.lname ? `${project.fname} : ${project.lname}` : project.fname}</h5>
                                <p className="card-text text-white" style={{ minHeight: '7rem', maxHeight: '7rem', overflow: 'auto' }}>{project.description}</p>
                                <p className="card-text">
                                    <button style={{ background: '#0D1117', position: 'relative', zIndex: '2' }} className='btn btn-success'>
                                        <a className="text-white text-decoration-none" href={`${project.url}`} target='_blank'>Checkout</a>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>
                })}
            </Carousel>

        </div>
    )
}

export default Projects;
