import React from 'react';
//import firebase from 'firebase/app';

import './Projects.css';


class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="projects">
                <div className="project">
                    <div className="project-image">

                    </div>
                    <div className="right-side">
                        <h2>Simplmeals</h2>
                        <p className="project-description">
                        Simplmeals allows you to create your own recipes and plan every meal quickly and simply. This is my React project from the summer of 2019.
                        </p>
                        <div className="project-links">
                            <span className="project-link">
                                <a href="https://github.com/briansayre/simplmeals" rel="noopener noreferrer" target="_blank">VIEW CODE</a>
                            </span>
                                
                            <span className="project-link">
                                <a href="https://simplmeals.com" rel="noopener noreferrer" target="_blank">VIEW APP</a>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="project-image">

                    </div>
                    <div className="right-side">
                        <h2>RGB LED Light Box</h2>
                        <p className="project-description">
                        This is a light box I made from scratch. I used an Arduino and a RGB strip along with some 2x4s and some acrylic.
                        </p>
                        <div className="project-links">
                            <span className="project-link">
                                <a href="https://github.com/briansayre/simplmeals" rel="noopener noreferrer" target="_blank">VIEW CODE</a>
                            </span>
                                
                            <span className="project-link">
                                <a href="https://simplmeals.com" rel="noopener noreferrer" target="_blank">VIEW APP</a>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default Projects;