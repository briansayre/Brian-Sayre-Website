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
                    <h3>Project Name</h3>
                    <p className="project-description">
                        Description of project. Description of project. Description of project. Description of project. 
                    </p>
                </div>

                <div className="project">
                    <div className="project-image">

                    </div>
                    <h3>Project Name</h3>
                    <p className="project-description">
                        Description of project. Description of project. Description of project. Description of project. 
                    </p>
                </div>
                
                <div className="project">
                    <div className="project-image">

                    </div>
                    <h3>Project Name</h3>
                    <p className="project-description">
                        Description of project. Description of project. Description of project. Description of project. 
                    </p>
                </div>
                
                <div className="project">
                    <div className="project-image">

                    </div>
                    <h3>Project Name</h3>
                    <p className="project-description">
                        Description of project. Description of project. Description of project. Description of project. 
                    </p>
                </div>


            </div>
        );
    }
}


export default Projects;