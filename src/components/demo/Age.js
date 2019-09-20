import React, { Component } from 'react'

export class Age extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             age: 18
        }
    }
    // ageUp = (event,inc) => {
    ageUp = (e, inc) => {
        console.log(inc);
        console.log(e.target);
        this.setState({
            ...this.state,
            age:this.state.age+(inc?inc:1)
        })
    }
    
    render() {
        return (
            <div>
                <h1>Age: {this.state.age}</h1>
                <button onClick={(e)=>this.ageUp(e,5)}>Up</button>
                <button onClick={(e)=>this.ageUp(e, -5)}>Down</button>
            </div>
        )
    }
}

export default Age
