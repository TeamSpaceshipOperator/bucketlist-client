
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
  console.log('getform data is ', data)
  authApi.createRestaurant(data)
    .then(ui.createRestaurantSuccess)
    .then(onGetAllRestaurants)
    .catch(ui.createRestaurantFailure)
}

const onGetAllRestaurants = function () {
  // event.preventDefault()
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
    .then(onGetAllRestaurants)
    .catch(ui.destroyRestaurantFailure)
}

const onDeleteRestaurant = function (event) {
  console.log('event for delete is ', event)
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('second event for delete is ', data)
  authApi.destroyRestaurant(data)
    .then(ui.deleteRestaurantSuccess)
    .catch(ui.deleteRestaurantFailure)
}

const onUpdateRestaurant = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(this).data('id')
  console.log('update id is', id)
  console.log('update for restaurant is ', data)
  authApi.updateRestaurant(data, id)
    .then(ui.updateRestaurantSuccess)
    .then(onGetAllRestaurants)
    .catch(ui.updateRestaurantFail)
}

const onViewRestaurant = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('the restaurant for view is ', data)
  authApi.getRestaurant(data)
    .then(ui.viewRestaurantSuccess)
    .catch(ui.viewRestaurantFailure)
}

const showUpdateForm = function (event) {
  console.log('event is', event)
  event.preventDefault()
  $('.handlebars-form-hider').show()
  $('.handlebars-display').hide()
}

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
  showUpdateForm
}
