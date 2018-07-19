const store = require('./store')
const showRestaurantList = require('./templates/restaurant-listing.handlebars')
const showSearchList = require('./templates/search-listing.handlebars')

const signUpSuccess = function (signUpResponse) {
  // $('.SignUpFeedback').html('You have successfully registered.')
  $('#success').modal()
  $('#signUpForm')[0].reset()
}

const signUpError = function () {
  // $('.signUpFeedback').html('Email unavailable or password mismatch.')
  $('#sign-up-fail').modal()
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

const signInError = function (error) {
  // $('.signInFeedback').html('Username or password is incorrect.')
  $('#sign-in-fail').modal()
  $('#signInForm')[0].reset()
  console.error(error)
}

const changePasswordSuccess = function (changePasswordResponse) {
  // $('.changePasswordFeedback').html('You have successfully changed your password.')
  $('#success').modal()
  $('#password_change')[0].reset()
}

const changePasswordError = function () {
  // $('.changePasswordFeedback').html('Current password is incorrect.')
  $('#password-fail').modal()
  $('#password_change')[0].reset()
}

const signOutSuccess = function (signOutResponse) {
  // $('#sign-in-form').toggle()
  // $('#change-password-form').toggle()
  // $('#sign-out-button').toggle()
  // $('#sign-up-form').toggle()
  $('.createRestaurantFeedback').html('')
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
  $('.createRestaurantFeedback').html('')
}

const createRestaurantFailure = function (response) {
  console.error(response)
  $('.createRestaurantFeedback').html('Please fill both fields.')
}

const getRestaurantsSuccess = function (getRestaurantsResponse) {
  console.log('getRestaurantsResponse is ', getRestaurantsResponse)
  const showRestaurantsHtml = showRestaurantList({ restaurants: getRestaurantsResponse.restaurants })
  $('.content').html(showRestaurantsHtml)
}

const destroyRestaurantSuccess = function (response) {
  console.log('destroy restaurant response is ', response)
}

// const deleteRestaurantFailure = function () {
//   console.log('restaurant was not deleted')
// }

const updateRestaurantSuccess = function (updateRestaurantResponse) {
  console.log('update success is ', updateRestaurantResponse)
}

const updateRestaurantFail = function (error) {
  console.error(error)
}

const viewRestaurantSuccess = function (viewRestaurantResponse) {
  console.log('view res succeeded here', viewRestaurantResponse)
  $('.view_row').html(viewRestaurantResponse.restaurant.name)
}

const searchSuccess = function (searchResponse) {
  console.log('search response is ', searchResponse)
  console.log('businessess is ', searchResponse.search.jsonBody.businesses)
  const showSearchHtml = showSearchList({ restaurants: searchResponse.search.jsonBody.businesses })
  $('.content').html(showSearchHtml)
  $('#rest_search')[0].reset()
}

const searchFail = function (searchFailResponse) {
  console.log('the search failed here ', searchFailResponse)
}

const viewRestaurantFailure = function (error) {
  console.error(error)
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
  getRestaurantsSuccess,
  destroyRestaurantSuccess,
  // deleteRestaurantFailure,
  updateRestaurantSuccess,
  updateRestaurantFail,
  viewRestaurantSuccess,
  viewRestaurantFailure,
<<<<<<< HEAD
  searchSuccess,
  searchFail,
=======
>>>>>>> Avoiding merge conflict
  createRestaurantFailure
}
