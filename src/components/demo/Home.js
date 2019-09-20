import React, { Component } from 'react'
import {AgeRedux, Age} from './'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Component</h1>

                {/* Dummy components {Age, AgeRedux} added here  */}
                <hr />
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <h2>React Bootstrap:1/3</h2>
                    </div>
                    <div className="col-12 col-sm-4">
                        <span>2/3 bootstrap col</span>
                    </div>
                    <div className="col-12 col-sm-4">
                        <span>3/3 bootstrap col</span>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12">
                        <AgeRedux />
                        <hr />
                        <h2>className State:</h2>
                        <Age />
                    </div>
                </div>

            </div>
        )
    }
}

export default Home
