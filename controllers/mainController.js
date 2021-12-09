const date = require('../getDate.js');
const Wish = require('../models/wish');

exports.getMainPage = (request, response)=> {
    let today = date.getDate();
    response.render('index', {dateToRender: today});
}

exports.getDate = (req, res) => { //req - request, res - response
    let today = date.getDate();
    res.send(today);
}

exports.getWeekDay = (req, res) => { 
    let today = date.getWeekDay();
    res.send(today);
}

exports.postWish = (req, res) => {
    console.log(req.body.userWish);
    const newWish = new Wish(req.body.userWish);
    newWish.saveWish();

    res.redirect('/');
}