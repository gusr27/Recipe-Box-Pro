import {ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE} from '../constants.js'
import {bake_cookie, read_cookie} from 'sfcookies'

const recipe = (action) => {
	let {name, ingredients} = action

	return {
		name,
		id: Math.random(),
		ingredients
	}

}

const removeById = (state = [], id) => {
    const recipes = state.filter(recipe => recipe.id !== id)
    return recipes
}

const editRecipe = (state = [], id, name, ingredients) => {
	const idx = state.findIndex(recipe => recipe.id == id)

	state[idx].name = name
	state[idx].ingredients = ingredients

	const recipes = state

	return recipes
}

const recipes = (state = [], action) =>{
	let recipes = null
	state = read_cookie('recipes')
	
	switch(action.type){
		case ADD_RECIPE:
			recipes = [...state, recipe(action)]
			bake_cookie('recipes', recipes)
			console.log(recipes)
			return recipes
		case DELETE_RECIPE:
			recipes = removeById(state,action.id)
			bake_cookie('recipes', recipes)
			return recipes
		case EDIT_RECIPE:
			recipes = editRecipe(state,action.id,action.name,action.ingredients)
			bake_cookie('recipes', recipes)
			return recipes
		default:
			return state
	}

}

export default recipes