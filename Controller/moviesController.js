const express = require("express")

const movies = express.Router()

const {getAllMovies} = require("../query/moviesData")

movies.get("/", (request, response)=>{
    response.status(200).json({message: movie})
})

module.exports = movies