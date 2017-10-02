import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addRecipe} from '../actions/index.js'
import {Button, FormControl, Modal} from 'react-bootstrap'


class AddRecipe extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			name:"",
			showModal: false,
			ingredients:[]

		}
	this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal(){
    this.setState({ showModal: false })
  }

  openModal(){
    this.setState({ showModal: true })
  }
	addRecipe(){
		this.props.addRecipe(this.state.name, this.state.ingredients)
		this.setState({
			name:"",
			ingredients:[],
			showModal: false
		})
	}
	render(){
		return(
			<div>
			<div>
				<Button onClick={this.openModal}>Add New Recipe</Button>
			</div>
			<div>
				<Modal show={this.state.showModal} onHide={this.closeModal}>
	            <Modal.Header closeButton>
	              <Modal.Title>Add A New Recipe</Modal.Title>
	            </Modal.Header>
	            <Modal.Body>
	              <h2>Name:</h2>
				<FormControl
					type="text"
					value={this.state.name}
					onChange={(event)=> this.setState({name:event.target.value})}
					placeholder = "Add A Name For The Recipe"
				/>
				<hr />
				<h2>Ingredients:</h2>
				<FormControl
					type="text"
					placeholder= "Add Ingredients Separated By A Comma"
					onChange={(event) => this.setState({ingredients: event.target.value.split(","|| ", ")})}
				/>
				</Modal.Body>
				<Modal.Footer>
             		 <Button
					bsStyle="success"
					onClick = {() => this.addRecipe()}
				>
					Add Recipe
				</Button>
            	</Modal.Footer>
	            
	          </Modal>
				

				
			</div>
			</div>
		)
	}
}
function mapStateToProps(state){
	return{
		recipes: state
	}
}
export default connect(mapStateToProps, {addRecipe})(AddRecipe)