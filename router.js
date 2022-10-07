const { application } = require('express');
let express = require('express')
let router = express.Router();

let youtubers =[
    {
        name: 'Saiman Says',
        Subscribers: '1.2M',
        nationality: 'Inidan',
        img : 'https://www.smfigure.com/public/uploads/news-938.webp'
    },
    {
        name: 'Logan Paul',
        Subscribers: '1.2M',
        nationality: 'United States',
        img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2020_53/3438974/201231-logan-paul-se-141p.jpg'
    },
    {
        name: 'Pewdipie',
        Subscribers: '1.2M',
        nationality: 'Sweden',
        img:'https://variety.com/wp-content/uploads/2019/12/pewdiepie.png'
    },
    {
        name: 'Niga Higa',
        Subscribers: '1.2M',
        nationality: 'Japan',
        img: 'https://m.media-amazon.com/images/M/MV5BMDEyMTk5MmEtM2VhYi00ZTYxLTlhZWItZjI0Zjc2NGNhMTk0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU1NzQ0NzY@._V1_.jpg'
    },
    {
        name: 'KSI',
        Subscribers: '1.2M',
        nationality: 'United Kingdom',
        img: 'https://yt3.ggpht.com/ytc/AMLnZu8xJCT1TTAmnLJzvHi7Im3i8r6jTNxicu43LrUQpg=s900-c-k-c0x00ffffff-no-rj'
    },
    {
        name: 'Mr Beast',
        Subscribers: '1.2M',
        nationality: 'United Kingdom',
        img: 'https://images.moneycontrol.com/static-mcnews/2022/08/MrBeast-770x435.jpg?impolicy=website&width=770&height=431'
    }
]
const credential = {
    email : 'muhsin@gmail.com',
    password: '123456'
}

// Base routing
router.get('/',(req,res)=>{
    if(req.session.user){
        res.render('home',{user: req.session.user,youtubers})
    }
    else{
        res.redirect('/login')
    }
})


// Login Get
router.get('/login',(req,res)=>{
    if(req.session.user){
        res.redirect('/')
    }
    else{
        res.render('base')
    }
})


// Login User
router.post('/login',(req,res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password)
    {
        req.session.user = req.body.email;
        res.redirect('/home');
    }
    else{
        errmsg = 'Invalid Username or Password'
        res.render('base',{ero:errmsg});
    }
})



// route for home page
router.get('/home',(req,res)=>{
    if(req.session.user){
        res.render('home',{user: req.session.user,youtubers})
    }else{
        res.render('/base')
    }
})

// Logout
router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err) console.log("Error loging out : ",err)
        else res.redirect('/')
    })
})

module.exports = router;