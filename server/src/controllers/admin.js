const Team = require('../models/team');

exports.getAddWorker = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('admin/add-worker', {
        pageTitle: 'Add Worker'
    });
};

exports.postAddWorker = (req, res, next) => {
    console.log('Creando la tabla...')
    const firstName = req.body.firsName;
    const surname = req.body.surname;
    const secondSurname = req.body.secondSurname;
    const birthdayDate = req.body.birthdayDate;
    const imageUrl = req.body.imageUrl;
    const quote = req.body.quote;
    console.log('Estos son los datos... ', [firstName, surname, secondSurname, birthdayDate, imageUrl, quote])
    Team.create({
        firstName: firstName,
        surname: surname,
        secondSurname: secondSurname,
        birthdayDate: birthdayDate,
        imageUrl: imageUrl,
        quote: quote
    })
        .then(result => {
            console.log(result);
            res.redirect('/admin/team')
        })
        .catch(err => console.log(err)); 
};

exports.getTeam = (req, res, next) => {
    Team.findAll()
    .then(workers => {
        res.render('admin/team',{
            team: workers,
            pageTitle: 'Index'
        });
    })
    .catch(err => {console.log(err);});   
};