const comments = require("../controllers/comment.controller.js");

const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.post("/", comments.create)

router.get("/", comments.findCommentsBy)

module.exports = router
