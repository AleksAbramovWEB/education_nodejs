
const express = require('express') // для работы с сервером
const mongoose = require('mongoose') // подключаем базы
const exphbs = require('express-handlebars') //шаблонизатор
const todoRoutes = require('./routes/todos')
const studyRoutes = require('./routes/study')

const PORT = process.env.PORT || 3000

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
})

app.engine('hbs', hbs.engine) //рендеринг странц
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))

app.use(todoRoutes)
app.use(studyRoutes)

async function start(){ // FRzbLo18L5XL1LxM
    try {
        await mongoose.connect('mongodb+srv://education:FRzbLo18L5XL1LxM@cluster0.ucaqg.mongodb.net/todos', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log('Server has been started...')
        })

    }catch (e) {
        console.log(e)
    }
}



start()