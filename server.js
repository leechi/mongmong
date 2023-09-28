const express = require('express')
const app = express()
const path = require('path')

// cross error 방지
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//


app.use(express.static(path.join(__dirname, 'react-project', 'build')))


// router
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const dogRouter = require('./routes/dog')

app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/dog', dogRouter)
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'react-project', 'build', 'index.html'))
})


// 서버 연결
app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), () => {
    console.log('port waiting..')
})