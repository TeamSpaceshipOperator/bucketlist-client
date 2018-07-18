const store = require('./store')
const showRestaurantList = require('./templates/restaurant-listing.handlebars')

const signUpSuccess = function (signUpResponse) {
  $('.SignUpFeedback').html('You have successfully registered.')
  $('#signUpForm')[0].reset()
}

const signUpError = function () {
  $('.SignUpFeedback').html('Email unavailable or password mismatch.')
  $('#signUpForm')[0].reset()
}

const signInSuccess = function (response) {
  console.log('res, ', response)
  store.user = response.user
  $('.signInFeedback').html('')
  // $('#sign-in-form').toggle()
  // $('#change-password-form').toggle()
  // $('#sign-out-button').toggle()
  // $('#sign-up-form').toggle()
  $('.emailDisplay').html('Signed in as: ' + store.user.email)
  $('#signInForm')[0].reset()
  $('.signed-in-view').toggle()
  $('.signed-out-view').toggle()
}

const signInError = function () {
  $('.signInFeedback').html('Username or password is incorrect.')
  $('#signInForm')[0].reset()
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('.ChangePasswordFeedback').html('You have successfully changed your password.')
  $('#password_change')[0].reset()
}

const changePasswordError = function () {
  $('.ChangePasswordFeedback').html('Password is incorrect.')
  $('#password_change')[0].reset()
}

const signOutSuccess = function (signOutResponse) {
  // $('#sign-in-form').toggle()
  // $('#change-password-form').toggle()
  // $('#sign-out-button').toggle()
  // $('#sign-up-form').toggle()
  $('.emailDisplay').html('')
  $('.signInFeedback').html('')
  $('.ChangePasswordFeedback').html('')
  $('.SignUpFeedback').html('')
  $('.signed-in-view').toggle()
  $('.signed-out-view').toggle()
  $('#password_change')[0].reset()
  delete store.user
}

const createRestaurantSuccess = function (Response) {
  console.log('Response is ', Response)
}

const getRestaurantsSuccess = function (getRestaurantsResponse) {
  console.log('getRestaurantsResponse is ', getRestaurantsResponse)
  const showRestaurantsHtml = showRestaurantList({ restaurants: getRestaurantsResponse.restaurants })
  $('.content').html(showRestaurantsHtml)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  signOutSuccess,
  changePasswordError,
  createRestaurantSuccess,
  getRestaurantsSuccess
}
