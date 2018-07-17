'use strict'

const config = require('../config.js')
const store = require('../store')

const createRestaurant = function (data) {
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
    data: {recipe: data},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroyRestaurant = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/restaurants/' + data.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

//
// const createMulti = function (formData) {
//   return $.ajax({
//     // ajax options go here
//     method: 'POST',
//     url: 'http://localhost:4741/uploads',
//     data: formData,
//     processData: false,
//     contentType: false
//   })
// }

module.exports = {
  createRestaurant,
  getRestaurant,
  getRestaurants,
  updateRestaurant,
  destroyRestaurant
}
