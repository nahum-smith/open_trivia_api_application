const express = require('express')
const request = require('request')
// Categories
// 9 - General knowledge
// 10 - Entertainment Books
// 11 - Entertainment Film
// 12 - Entertainment Music
const triviaURL = 'https://opentdb.com/api.php?amount=10&category=23'
request.get(triviaURL, (err, response, body) => {
  let parseData = JSON.parse(body)
  console.log(parseData.results)
})
