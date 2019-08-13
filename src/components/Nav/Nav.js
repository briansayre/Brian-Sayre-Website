import React from 'react';
//import firebase from 'firebase/app';

import './Nav.css';
import Home from '../Home/Home';


class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'home',
        }
		this.handleHomeClick = this.handleHomeClick.bind(this);
		this.handleProjectsClick = this.handleProjectsClick.bind(this);
		this.handleContactClick = this.handleContactClick.bind(this);
    }

    handleHomeClick() {
        this.setState({page: 'home'});
    }

    handleProjectsClick() {
        this.setState({page: 'projects'});
    }

    handleContactClick() {
        this.setState({page: 'contact'});
    }

    displayComponent() {
        if (this.state.page === 'home') {
            return (
                <Home />
            );
        } else if (this.state.page === 'projects') {
            return (
                <div>
                    projects
                </div>
            );
        } else if (this.state.page === 'contact') {
            return (
                <div>
                    contact
                </div>
            );
        } 
    }

    render() {
        return (
            <div className="shadow">
                <div className="nav">
                    <span className="nav-item" onClick={this.handleHomeClick}>
                        HOME
                    </span>
                    <span className="nav-item" onClick={this.handleProjectsClick}>
                        PROJECTS
                    </span>
                    <span className="nav-item" onClick={this.handleContactClick}>
                        CONTACT
                    </span>
                </div>
                <div className="content">
                    {this.displayComponent()}
                </div>

            </div>
        );
    }
}


export default Nav;