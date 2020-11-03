let path = require("path")
const router = require("express").Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "/exercise.html"))
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "/stats.html"))
})

module.exports = router