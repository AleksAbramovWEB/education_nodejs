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

module.exports = router;