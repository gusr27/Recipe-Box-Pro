import {ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE} from '../constants.js'

export const addRecipe = (name, ingredients)=>{
	const action ={
		type: ADD_RECIPE,
		name,
		ingredients
	}

	return action
}

export const deleteRecipe = (id) =>{
	const action = {
		type: DELETE_RECIPE,
		id
	}

	return action
}

export const editRecipe = (id, name, ingredients) =>{
	const action = {
		type: EDIT_RECIPE,
		id,
		name,
		ingredients
	}
	
	return action
}