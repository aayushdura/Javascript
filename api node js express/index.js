const express = require('express')
const app = express()
const port = 3030
var bodyParser = require('body-parser')
const registUsers = {
  username: "aayushdura86@gmail.com",
  password: "aayush123",
};
const generateToken = (username) => {
  let token = Date.now() + username;
  return token;
};

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
  //logic
  res.send('whaeeeeeeee')
})
//login
app.post('/', (req, res) => {
  const { username, password } = req.body;
  if (username == registUsers.username && password == registUsers.password) {
    return res.json({
      msg: "Sucessful Login",
      token: generateToken(username),
    });
  }
    res.json({
      msg: "Invalid User Identity",
    });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})