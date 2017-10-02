import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDXxdCYzvrXhg2-sDtCKtl8y76U9OLSZb0",
    authDomain: "recipelistpro.firebaseapp.com",
    databaseURL: "https://recipelistpro.firebaseio.com",
    projectId: "recipelistpro",
    storageBucket: "",
    messagingSenderId: "967761016820"
  }

  export const firebaseApp = firebase.initializeApp(config)
  export const recipeRef = firebase.database().ref('recipes')