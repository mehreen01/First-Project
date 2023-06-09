const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', function(req, res) {
    const response = {
        name: "Mehreen Zahid",
        email: "mhrnzhd@example.com",
        interests: "DevOps"
    }
    res.send(response)
})

app.post('/update-profile', function(req, res) {
    const payload = req.body
    console.log(payload)
    if (Object.keys(payload).length === 0) {
        res.send({error: "empty payload. Couldn't update user profile data"})
    } else {
        // updating user profile
        res.send({info: "user profile data updated successfully"})
    }
})

app.listen(3000, function () {
    console.log("app listening on port 3000")
})
