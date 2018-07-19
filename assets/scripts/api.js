'use strict'

const config = require('./config.js')
const store = require('./store')
// const yelp = require('yelp-fusion')

const createRestaurant = function (data) {
  // data.user_id = store.user.id
  return $.ajax({
    // ajax options go here
    method: 'POST',
    url: config.apiUrl + '/restaurants',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getRestaurants = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/restaurants',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const searchRestaurant = function (data) {
  console.log('data is  ', data)
  return $.ajax({
    method: 'GET',
    url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${data.location.location}&&term=${data.term.term}`,
    data: data,
    headers: {
      Authorization: 'Bearer w5V24zygjERXy-MmDuM6-vfTfxqF818wsWfp4y0h8r5llu3FWQ6sIjNTLRfpJ5U7C_nHF1R3T4e-xEU8fp8AWZMMeW_UJiOHfaLlhsLRaDZhzbKrT_30X6uGsWFPW3Yx'
    }
  })
}

const getRestaurant = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/restaurants/' + data.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRestaurant = function (data) {
  // console.log('api says data is ', data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/restaurants/' + data.id,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroyRestaurant = function (data) {
  console.log('delete res data is ', data)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/restaurants/' + data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Auth requests below
const signUp = function (data) {
  console.log('data is ', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signIn,
  signUp,
  signOut,
  changePassword,
  createRestaurant,
  getRestaurant,
  getRestaurants,
  updateRestaurant,
  destroyRestaurant,
  searchRestaurant
}
