import React, { Component } from 'react'

//import a single comps file with all definitions of the comps defined within it, instead of individual comps.
import {Age, AgeRedux } from './components/demo'
// import Age from './components/Age'
// import AgeRedux from './components/AgeRedux'

class App extends Component {



  render() {
    return (
      <div>

        <div className="container">

          <div className="row">
            <div className="col-12 col-sm-4">
              <h2>Redux:</h2>
            </div>
            <div className="col-12 col-sm-4">
              2/3
            </div>
            <div className="col-12 col-sm-4">
              3/3 columns
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


      </div>
    )
  }
}

export default App
