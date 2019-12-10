import React, { Component } from 'react'
import './styles/App.scss'

//import a single comps file with all definitions of the comps defined within it, instead of individual comps.
import { Age, AgeRedux, Home, About, NavigationBar } from './components/demo'
// import Age from './components/Age'
// import AgeRedux from './components/AgeRedux'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class App extends Component {



  render() {
    return (
      <div>

        <Router>
          <div className="container">


            <NavigationBar />

            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />

            
          </div>

        </Router>
      </div>
    )
  }
}

export default App
