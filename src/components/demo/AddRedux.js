import React, { Component } from 'react'
import {connect} from 'react-redux'

export class AddRedux extends Component {
    render() {
        return (
            <div className="add-app">
                <div>Add Redux example:</div>
                <p>A: {this.props.a}</p>
                <p>age: {this.props.age}</p>
                <button data-age={this.props.age} onClick={(e)=>this.props.addA(e)}>Add A</button>
            </div>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        a: state.ra.a,
        age: state.reducer.age
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addA: (ev)=>dispatch({type:'ADD',payload:ev})
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(AddRedux)
