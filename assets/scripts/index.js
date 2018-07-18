'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // events.addHandlers()
  $('#signUpForm').on('submit', events.onSignUp)
  $('#signInForm').on('submit', events.onSignIn)
  $('#password_change').on('submit', events.onChangePassword)
  $('#sign-out').click(events.onSignOut)
  $('#create_restaurant').on('submit', events.onCreateRestaurant)
  $('#view_all_restaurants').on('submit', events.onGetAllRestaurants)
  $('.content').on('click', '.delete-button', events.onDestroyRestaurant)
})
