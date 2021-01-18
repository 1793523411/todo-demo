var express = require("express");
var router = express.Router();

let data = []

let id = 0

router.get('/todolist', (req, res) => {
    res.json({
        data
    })
})

router.post('/addlist', (req, res) => {
    id += 1
    let tmp = {
        id: id + 1,
        name: req.body.name,
        start: false,
        complete: false
    }
    let tmp1 = data.filter((item) => item.start === true)
    let tmp2 = data.filter((item) => item.start === false)
    tmp1.push(tmp)
    data = tmp1.concat(tmp2)

    res.json({
        data
    })
})

router.post('/dellist', (req, res) => {
    let tmp = data.filter((item) => item.id == req.body.id)
    tmp[0].complete = true
    tmp[0].start = false
    data = data.filter((item) => item.id !== req.body.id)
    data.push(...tmp)
    res.json({
        data
    })
})


router.post('/starlist', (req, res) => {
    tmp = data.filter((item) => item.id == req.body.id)
    data = data.filter((item) => item.id != req.body.id)
    tmp[0].start = true
    data.unshift(...tmp)
    res.json({
        data
    })
})

router.post('/searchlist', (req, res) => {
    let tmp
    if (req.body.key == "") {
        res.json({
            data: data
        })
    } else {
        tmp = data.filter((item) => item.name.search(req.body.key) >= 0)
        res.json({
            data: tmp
        })
    }

})

module.exports = router;