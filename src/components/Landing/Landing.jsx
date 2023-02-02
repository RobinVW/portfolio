import React from 'react';
import { useStore } from '@nanostores/react';
import {FaLinkedin,FaGithub} from 'react-icons/fa';
import { isNavOpen } from "../../utils/store";


//styles
import '../Landing/Landing.scss';

const Landing = () => {
    return(
            <div className="landing">
                <div className="landing-left">
                    <div className='landing-left-content'>
                        <a href='https://www.linkedin.com/in/robin-van-welden-87aab6192/'
                           target='_blank'
                           rel='noreferrer'
                        >
                            <FaLinkedin className='landing-social' aria-label='LinkedIn'/>
                        </a>
                        <a href='https://github.com/RobinVW'
                           target='_blank'
                           rel='noreferrer'
                        >
                            <FaGithub className='landing-social' aria-label='Github'/>
                        </a>
                    </div> 
                </div>
                <img 
                    src='../../assets/png/robinvanwelden.png'
                    className='landing-image'
                    style={{
                        opacity:`${useStore(isNavOpen) ? '0' : '1'}`
                    }}
                />
                <div className="landing-right">
                    <div className='landing-right-content'>
                        <h6>Web developer</h6>
                        <h1>Robin Van Welden</h1>
                        <h5>Alias Robuust</h5>
                        <p>I'm a passionate web developer with a lot of willingness to learn and develop new skills to improve my skills to develop the most beautiful and useful sites and applications.</p>
                        <div className='lrc-btn-container'>
                            <a href='#contact'>
                                <button className='btn-contact'>Contact</button>
                            </a>
                        </div>
                    </div> 
                </div>
            </div>
    );
}

export default Landing;