const express = require('express')
const request = require('request')
const assert = require('assert')

// Categories
// 9 - General knowledge
// 10 - Entertainment Books
// 11 - Entertainment Film
// 12 - Entertainment Music
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

// Anatomy of the opendb url
//  base = https://opentdb.com
//  API content = /api.php
  //  queries - ?
      // amount - (number of questions)
//  Sessions = /api_token.php
  // queries - ?
      // token = (session token)
      // command = (api command)
      //


const triviaURL = 'https://opentdb.com/api.php?amount=10&category=23'
request.get(triviaURL, (err, response, body) => {
  console.log(response)
  let parseData = JSON.parse(body)
  console.log(parseData.results)
})
