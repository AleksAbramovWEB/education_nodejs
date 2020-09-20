const { Router } = require('express');

const router = Router();


router.get('/basics_js', async (req, res) => {
    res.render('study_js/basics', {
        title: 'ОСНОВЫ JavaScript',
        isBasicsJs: true,
    });
})

router.get('/prototype', async (req, res) => {
    res.render('study_js/prototype', {
        title: 'JavaScript Prototype',
    });
})

router.get('/call_bind_apply_this', async (req, res) => {
    res.render('study_js/call_bind_apply_this', {
        title: 'JavaScript call bind apply this',
    });
})

router.get('/closures', async (req, res) => {
    res.render('study_js/closures', {
        title: 'JavaScript замыкания',
    });
})

router.get('/promise', async (req, res) => {
    res.render('study_js/promise', {
        title: 'JavaScript Promise',
    });
})

router.get('/object_create', async (req, res) => {
    res.render('study_js/object_create', {
        title: 'JavaScript Объекты с Object.create. Что такое getters, setters',
    });
})

router.get('/class_es6', async (req, res) => {
    res.render('study_js/class_es6', {
        title: 'JavaScript Все о ES6 Классах',
    });
})

router.get('/async_await', async (req, res) => {
    res.render('study_js/async_await', {
        title: 'JavaScript Async, Await. Работа с сервером c fetch',
    });
})

router.get('/proxy', async (req, res) => {
    res.render('study_js/proxy', {
        title: 'JavaScript Proxy',
    });
})

router.get('/generators', async (req, res) => {
    res.render('study_js/generators', {
        title: 'Генераторы. Symbol iterator, for of',
    });
})

router.get('/metod_array', async (req, res) => {
    res.render('study_js/metod_array', {
        title: 'Методы массивов (forEach, map, filter, reduce, find, findIndex). Js Массивы.',
    });
})

module.exports = router;