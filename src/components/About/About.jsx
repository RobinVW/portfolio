import React from "react";
import './About.scss';

const About = () => {
    return(
        <div className="about" id='about'>
            <span className="line"></span>
            <div className="about-container">
                <div className="about-description">
                    <h2>Who am I?</h2>
                    <p>
                        My name is Robin Van Welden. I'm a web developer from Oudenaarde, Belgium.<br/>
                        I've a great passion for the internet and like to develop functional, 
                        but also beautiful applications. 
                    </p>
                </div>
                <div className="about-img">
                    <img 
                        src="../../assets/svg/about/redTheme-boy.svg" 
                        alt="" 
                    />
                </div>
            </div>
        </div>
    )
}

export default About;