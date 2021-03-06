
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
    .then(onGetAllRestaurants)
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
  authApi.createRestaurant(data)
    .then(ui.createRestaurantSuccess)
    .catch(ui.createRestaurantFailure)
}

const onGetAllRestaurants = function () {
  // event.preventDefault()
  authApi.getRestaurants()
    .then(ui.getRestaurantsSuccess)
    .catch(ui.getRestaurantsFailure)
}

const onGetMyRestaurants = function (event) {
  event.preventDefault()
  authApi.getRestaurants()
    .then(ui.getRestaurantsSuccess)
    .catch(ui.getRestaurantsFailure)
}

const onDestroyRestaurant = function (event) {
  event.preventDefault()
  const data = $(this).data('id')
  authApi.destroyRestaurant(data)
    .then(ui.destroyRestaurantSuccess)
    .then(onGetAllRestaurants)
    .catch(ui.destroyRestaurantFailure)
}

const onUpdateRestaurant = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(this).data('id')
  authApi.updateRestaurant(data, id)
    .then(ui.updateRestaurantSuccess)
    .then(onGetAllRestaurants)
    .catch(ui.updateRestaurantFail)
}

const onViewRestaurant = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.getRestaurant(data)
    .then(ui.viewRestaurantSuccess)
    .catch(ui.viewRestaurantFailure)
}

const onSearchRestaurant = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.searchRestaurant(data)
    .then(ui.searchSuccess)
    .catch(ui.searchFail)
}

const showUpdateForm = function (event) {
  event.preventDefault()
  const data = $(this).data('id')
  $('.handlebars-form-hider-' + data).show()
  $('.handlebars-display-' + data).hide()
}

// handlebars-form-hider-{{restaurant._id}}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateRestaurant,
  onGetAllRestaurants,
  onDestroyRestaurant,
  onUpdateRestaurant,
  onViewRestaurant,
  onSearchRestaurant,
  showUpdateForm,
  onGetMyRestaurants
  // onAddRestaurant
}
