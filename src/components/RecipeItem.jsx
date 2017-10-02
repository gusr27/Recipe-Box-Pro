import React, {Component} from 'react'
import {Button, Collapse, Well, Modal, FormControl} from 'react-bootstrap'
import {connect} from 'react-redux'
import {deleteRecipe, editRecipe} from '../actions/index.js'


class RecipeItem extends Component{
	constructor(props) {
		super(props)
		this.state={
			name: '',
			ingredients: [],
			showModal: false,
			showModal2:false
		}

		
	this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.openModal2= this.openModal2.bind(this)
    this.closeModal2= this.closeModal2.bind(this)
  }

  closeModal(){
    this.setState({ showModal: false })
  }

  openModal(){
    this.setState({ showModal: true })
  }

  openModal2(){
  	this.setState({
  		showModal2: true 
  	})
  }

  closeModal2(){
  	this.setState({
  		showModal2: false
  	})
  }
	componentDidMount() {
		this.setState({
			name: this.props.name,
			ingredients: this.props.ingredients
		})
	}
	


	deleteRecipe(){
		this.setState({
			showModal2: false
		})
		this.props.deleteRecipe(this.props.id)
	}

	editRecipe(){
		this.setState({
			showModal: false
		})
		this.props.editRecipe(this.props.id, this.state.name, this.state.ingredients)
		
	}

	render(){
		

		

		return(
			<div key={this.props.idx} >
										
	                                	<Button style={{width:'30%', margin: '5px'}} bsStyle="success" onClick={()=>this.setState({open: !this.state.open})}>{this.props.name.toUpperCase()}</Button>
	                                	<Collapse key={this.props.idx} in={this.state.open}>
								          <div>
								            <Well style={{backgroundColor:"white"}}>
								              <h3>Ingredients:</h3>
								              <ul style={{margin: "0 auto",textAlign: "left"}}>
								              {this.props.ingredients.map((ingredient)=>{
			                                		return(
			                                			<li>{ingredient}</li>
			                                		)
			                                	})}
								              </ul>
								              
								              <hr />
								              <Button style={{margin: '3px'}} bsStyle="success" onClick={() => this.openModal()}>Edit</Button>
								              <Modal show={this.state.showModal} onHide={this.closeModal}>
								              	<Modal.Header closeButton>
											              <Modal.Title>Edit {this.props.name}</Modal.Title>
											            </Modal.Header>
											            <Modal.Body>
											              <h4>Name:</h4>
														<FormControl
															type="text"
															value={this.state.name}
															
															onChange={(event)=> this.setState({name:event.target.value})}
															
														/>
														<hr />
														<h4>Ingredients:</h4>
														<FormControl
															type="text"
															
															value = {this.state.ingredients}
															onChange={(event) => this.setState({ingredients: event.target.value.split(","|| ", ")})}
														/>
														</Modal.Body>
														<Modal.Footer>
										             		<Button
														bsStyle="success"
														onClick = {() => this.editRecipe()}
													>
														Edit Recipe
													</Button>
										            	</Modal.Footer>
								              </Modal>
								              		
								            		<Button bsStyle="danger" onClick={()=> this.openModal2()}>Delete</Button>
								            		<Modal show={this.state.showModal2} onHide={this.closeModal2}>
								            			<Modal.Title style={{textAlign:"center"}}> Deleting {this.props.name}</Modal.Title>
								            			<Modal.Body>
								            				<h3>Are you SURE you want to delete {this.props.name.toUpperCase()}?</h3>
								            			</Modal.Body>
								            			<Modal.Footer>
								            				<Button bsStyle="danger" onClick={()=> this.deleteRecipe()}>Yes, Delete {this.props.name.toUpperCase()}</Button>
								            				<Button bsStyle="btn"onClick={()=> this.closeModal2()}>Close</Button>
								            			</Modal.Footer>

								            		</Modal>
								         
								            </Well>
								           	
								          </div>
								        </Collapse>
								    
								             	

	                                	
	         </div>
		)
	}
}



export default connect(null, {deleteRecipe, editRecipe})(RecipeItem)

