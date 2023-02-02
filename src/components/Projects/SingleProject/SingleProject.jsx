import React from "react";

import './SingleProject.scss';
import { FiGithub,FiExternalLink } from "react-icons/fi";

const SingleProject = ({id,name,image,desc,tags,link,code}) => {
    return(
        <div className="project-container" key={id}>
            <img src={image} alt="" className="project-image" />
            <div className="project-content">
                <h3>Featured project</h3>
                <h2>{name}</h2>
                <p>{desc}</p>
                <div className="techStack">
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
                <div className="project-links">
                <a href={link}>
                    <FiExternalLink className="project-link" />    
                </a>
                <a href={code}>
                    <FiGithub className="project-link" />
                </a>
                </div>
            </div>
        </div>
    );
}

export default SingleProject;