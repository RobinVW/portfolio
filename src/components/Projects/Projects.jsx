import React from 'react';
import SingleProject from './SingleProject/SingleProject.jsx';

//styles
import './Projects.scss';

const tagsBisouterie = ['HTML', 'CSS', 'JavaScript','React','Next.js','Strapi','Mollie','Magic.auth'];
const tagsPortfolio = ['HTML', 'CSS', 'SASS','JavaScript','React','Astro'];


const Projects = () => {
    return(
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                <SingleProject
                    id='1'
                    name={`Bisouterie 'd Amelie`}
                    desc= {`Full stack ecommerce website. For a friend of mine who's selling handmade jewelry. Passwordless auth via email to make the shopping experience as easy as possible. Using the mollie API to make sure the payment system is working without flaws.`}
                    tags= {tagsBisouterie}
                    link='https://bisouterie-frontend.vercel.app/'
                    code='https://github.com/RobinVW/bisouterie-frontend'
                    image='../../../assets/png/bisouterie.PNG'
                />
                <SingleProject
                    id='2'
                    name={`Portfolio`}
                    desc= {`Portfolio website to show my work. Trying some new things out Astro, Sass... Still some work in progress.`}
                    tags= {tagsPortfolio}
                    link='#'
                    code='#'
                    image='../../../assets/png/portfolio.PNG'
                />
            </div>
        </div>
    )
}

export default Projects;