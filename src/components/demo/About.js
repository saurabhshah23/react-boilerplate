import React, { Component } from 'react'
import './about.scss';

export class About extends Component {
    render() {
        return (
            <div className="about-page">
                <div className="red-text">
                    <h2 className="about-head">About Component</h2>
                </div>
                <div>
                    <p>About page with everything about the awesome developers!</p>
                    <p className="blue-text">Awesome devs React with js.</p>
                </div>
            </div>
        )
    }
}

export default About
