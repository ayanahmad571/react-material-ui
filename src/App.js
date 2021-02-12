import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import MainChunk from './components/MainChunk'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainChunk />
      </div>
    )
  }
}

export default App