const { Router } = require('express');

const Todo = require('../models/Todo')

const router = Router();

router.get('/', async (req, res) => {
    const todos = await Todo.find({});
    res.render('todo/index', {
        title: 'NODE JS | ГЛАВНАЯ',
        isHome: true,
        todos
    });
})

router.get('/create', async (req, res) => {
    res.render('todo/create', {
        title: 'NODE JS | СОЗДАТЬ TODO',
        isCreate: true,
    });
})

router.post('/create', async (req, res) => {
    const todo = new Todo({
        title: req.body.title
    });

    await todo.save()
    res.redirect('/');
});

router.get('/basics_js', async (req, res) => {
    res.render('study_js/basics', {
        title: 'NODE JS | ОСНОВЫ ОJ',
        isBasicsJs: true,
    });
})


module.exports = router;