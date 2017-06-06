const express = require('express')
const request = require('request')
const assert = require('assert')
const { URL, URLSearchParams } = require('url')

// Categories
// 9 - General knowledge
// 10 - Entertainment Books
// 11 - Entertainment Film
// 12 - Entertainment Music
// 13 - Entertainment Musicals and Theatre
// 14 - Entertainment television
// 15 - Entertainment Video Games
// 16 - Entertainment Board games
// 17 - Science and Nature
// 18 - Science: Computers
// 19 - Science: Mathematics
// 20 - Mythology
// 21 - Sports
// 22 - geography
// 23 - History
// 24 - Politics
// 25 - Art
// 26 - Celebrities
// 27 - Animals
// 28 - Vehicles
// 29 - Entertainment: Comics
// 30 - Science: Gadgets
// 31 - Entertainment: Japanese Anime and Manga
// 32 - Entertainment: Cartoons and Animations

// Response Codes
// The API appends a "Response Code" to each API Call to help tell developers
// what the API is doing.
//
// Code 0: Success Returned results successfully.
// Code 1: No Results Could not return results. The API doesn't have enough
//         questions for your query. (Ex. Asking for 50 Questions in a Category
//         that only has 20.)
// Code 2: Invalid Parameter Contains an invalid parameter. Arguements passed in
//         aren't valid. (Ex. Amount = Five)
// Code 3: Token Not Found Session Token does not exist.
// Code 4: Token Empty Session Token has returned all possible questions for the
//         specified query. Resetting the Token is necessary


// The Anatomy of a Unit Test
//
// Each unit test has the following structure:
//
// Test setup
// Calling the tested method
// Asserting


// Fixing Formatting
//  replace all "'" with '"'
//  replace all &#039
// or
//  let decodeString = Buffer.from(b64String, 'base64').toString("ascii")

// Anatomy of the opendb url
//  base = https://opentdb.com
//  API content = /api.php
  //  queries - ?
      // amount - Integer( number of questions [1...50])
      // category - Integer(content type [9...23])
      // difficulty - String(content difficulty [easy, medium, hard])
      // type - String(question type [multiple(multiple choice), boolean(true/false)])
//  Sessions = /api_token.php
  // queries - ?
      // token = (session token)
      // command = (api command)
      //


let triviaURL

const paths = {
  token: '/api_token.php',
  content: '/api.php'
}

const params = {
  amount: Number(),
  category: [9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],
  difficulty: ['easy', 'medium', 'hard'],
  type: ['multiple', 'boolean']
}

const baseURL = 'https://opentdb.com'
const myURL = new URL(baseURL)
myURL.pathname = paths.content

const searchParams = new URLSearchParams({
  amount: Number(),
  category: 17,
  difficulty: 'hard',
  type: 'multiple'
})

myURL.search = params
console.log(myURL.href)
triviaURL = myURL.href


// request.get(triviaURL, (err, response, body) => {
//   assert.equal(null, err)
//   console.log(body)
//   let parseData = JSON.parse(body)
//   assert.equal(parseData.response_code, 0)
//   console.log(parseData.results)
// })


const setAPIToken = (baseURL) => {
  let requestTokenURL = new URL(baseURL)
  requestTokenURL.pathname = '/api_token.php'
}


// Steps for retrieving all novel content from opentdb site
//    1) session token
//        1) Request token from opentdb
//        2) set token
//    2) for each category
//        1) for each difficulty
//            1) set amount to 50
//            2) set url querystring parameters
//            3) make API Call
//            4)
//                a) if responseCode === 0
//                    1) parse returned data
//                    2) Save data in DB (TODO: create schema, and integrate DB)
//                    3) Step (3) from above (make API call) (recursive)
//                b) if responseCode === 1
//                c) if responseCode === 2
//                d) if responseCode === 3
//                    1) reset session token
//                e) if responseCode === 4
//                    1) break our of difficulty loop
