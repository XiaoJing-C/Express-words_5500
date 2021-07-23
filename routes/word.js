var db = require("../server/db")
var express = require('express');
var router = express.Router();

router.get('/:aid', function(req, res) {
    word = req.params
    console.log(word.aid)
    var sql = 'select * from Nword where word='+'\"'+word.aid+'\"' ;
    db.query(sql, (err, rows) => {
        if(err) console.log(err)
        res.render('word', {res: rows});
    })
});

module.exports = router;
