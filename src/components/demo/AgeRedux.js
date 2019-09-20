import React, { Component } from 'react'
import { connect } from 'react-redux';

export class AgeRedux extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "John"
        }
    }

    nameHandler = () => {
        console.log("nameHandler called!");
        this.props.ageDown();
        this.setState((prevState) => {
            return {
                name: prevState.name + "I"
            }
        })
    }

    render() {
        return (
            <div>
                Age of {this.state.name}: {this.props.age}
                <button onClick={this.props.ageUp}>Age Up</button>
                <button onClick={() => this.nameHandler()}>Age Down</button>
                <br />
                <div>
                    History:
                    <ul>
                        {this.props.history.map((stateHistory) => {
                            return (
                            <li key={stateHistory.key} className="ageHistory">
                                <button data-key={stateHistory.key} onClick={(e)=>this.props.delHistory(stateHistory.key, e)}>
                                    {stateHistory.age}
                                </button>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        age: state.reducer.age,
        history: state.reducer.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ageUp: () => dispatch({ type: "AGE_UP", value: 1 }),
        ageDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
        delHistory: (key,e) => dispatch({ type: "DEL_AGE", value: key, el:e })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgeRedux)
