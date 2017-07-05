import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyClcb4B5oRktWDQWGU8Ev4hgYm5p_NXgL4',
  authDomain: 'mico-62a9a.firebaseapp.com',
  databaseURL: 'https://mico-62a9a.firebaseio.com',
  projectId: 'mico-62a9a',
  storageBucket: 'mico-62a9a.appspot.com',
  messagingSenderId: '307587845773'
}
firebase.initializeApp(config)
const database =firebase.database()

const DBferias = database.ref('ferias/')
const DBcreaciones = database.ref('creaciones/')
var list = []

const getCreaciones = (params, actionType) => {
  return dispatch => DBcreaciones.once('value')
    .then(snapshot => {
      snapshot.forEach(function(childSnapshot){
        const valor = childSnapshot.val()
        list.push(valor)
      })
      if (actionType != null){
        dispatch({
          type: actionType,
          params: params, // can be null
          data: list, // list with all d objects
        })
      }

      return snapshot.val()
    })
    .catch(err => {
      throw err
    })
}

export default {

  getCreaciones: getCreaciones,
}
