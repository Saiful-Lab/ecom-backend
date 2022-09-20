const express = require('express')
const compression = require('compression')
const cors = require('cors')
const morgan = require('morgan')

module.exports = (app) => {
    app.use(express.json())
    app.use(compression())
    app.use(express.static('public'))
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())
    if (process.env.NODE_ENV === 'development')
        app.use(morgan('dev'))
}