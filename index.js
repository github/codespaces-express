const express = require('express')
const app = express()

const path= require('path')
const cookieParser = require('cookie-parser')
const { url } = require('inspector')
const port = '3000'
const weburl = 'https://silver-space-waffle-g4qqr545qg7gfp4jj-3000.app.github.dev/'


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Server app listening on port ${weburl}`)
})
