const Team = require('../models/team');

exports.getTeam = (req, res, next) => {
    Team.findAll()
    .then(workers => {
        res.render('customers/team',{
            team: workers,
            pageTitle: 'Index'
        });
    })
    .catch(err => {console.log(err);});
};

exports.getIndex = (req, res, next) => {
    res.render('customers/index',{
        pageTitle: 'Index'
    });   
};

