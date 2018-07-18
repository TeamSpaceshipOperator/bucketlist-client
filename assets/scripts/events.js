
const authApi = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

const onCreateRestaurant = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('getform data is ', data)
  authApi.createRestaurant(data)
    .then(ui.createRestaurantSuccess)
    .catch(ui.createRestaurantFailure)
}

const onGetAllRestaurants = function (event) {
  event.preventDefault()
  authApi.getRestaurants()
    .then(ui.getRestaurantsSuccess)
    .catch(ui.getRestaurantsFailure)
}

const onDestroyRestaurant = function (event) {
  event.preventDefault()
  const data = $(this).data('id')
  console.log('this is', this.data)
  console.log('data is, ', data)
  authApi.destroyRestaurant(data)
    .then(ui.destroyRestaurantSuccess)
    .catch(ui.destroyRestaurantFailure)
}

// const addHandlers = () => {
//   $('.content').on('click', '.delete-button', onDestroyRestaurant)
// }
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateRestaurant,
  onGetAllRestaurants,
  onDestroyRestaurant
  // addHandlers
}
