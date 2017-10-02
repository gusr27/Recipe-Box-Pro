import React, {Component} from 'react'
import RecipeItem from './RecipeItem'
import {connect} from 'react-redux'
import {Well} from 'react-bootstrap'


class RecipeList extends Component{
	constructor(props) {
		super(props);
		
	}
	


	render(){
		const {recipes} = this.props
		return(
			<div >
				<Well style={{textAlign: 'left'}} >
					{
						

						recipes.map((recipe,idx)=>
	                                        {
	                            return(
	                            
	                                <RecipeItem  name={recipe.name} ingredients={recipe.ingredients} id={recipe.id}/>

	                               
	                            )
	                   }
	                  )
	                }
				</Well>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		recipes: state
	}
}
export default connect(mapStateToProps, null)(RecipeList)