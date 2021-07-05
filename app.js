const express = require('express')
const exphbs = require('express-handlebars')

const generatetalk = require('./trashtalk')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const targets = req.body
  const trashtalk = generatetalk(targets.title)

  console.log(targets)
  res.render('index', { talk: trashtalk, target: targets.title })

})

app.listen(port, () => {
  console.log(`Express is listening from port ${port}`)
})