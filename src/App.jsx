import React, { Component } from 'react'
import AddRecipe from './components/AddRecipe'
import RecipeList from './components/RecipeList'
import {Modal, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import logo from './logo.svg'


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state={
      error: "",
      showEdit: false
    }
  }

  render() {

    return (
      <div>
        <div>
            <h1 style={{textAlign:"center"}}>Recipe Pro</h1>
            <RecipeList style={{ display:"flex", justifyContent:"center", alignItems:"center"}}/>
            <hr/>
            
            {this.state.error.message}
            
        
            <AddRecipe />
            <footer className="navbar-fixed-bottom" style={{bottom: '0', textAlign:"center"}}>
                <hr/>
                <p>By Gus Richardson | Source Code: <a href="https://github.com/gusr27/Recipe-Box-Pro" target="_blank"><FontAwesome className="super-crazy-colors"name="github" size="2x" /></a></p>
            </footer>
         </div>

      </div>
    )
  }
}

export default App
