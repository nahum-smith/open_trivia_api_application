const express = require('express')
const request = require('request')
const assert = require('assert')

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




const triviaURL = 'https://opentdb.com/api.php?amount=10&category=23'
request.get(triviaURL, (err, response, body) => {
  assert.equal(null, err)
  console.log(body)
  let parseData = JSON.parse(body)
  assert.equal(parseData.response_code, 0)
  console.log(parseData.results)
})



// Steps for retrieving all novel content from opentdb site
//    1) set session token
//    2)
