const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('/games/dice', function(request, response) {

    var dice = Math.ceil(Math.random()*6)
    response.locals.dice = dice
    response.render('dice')

})

module.exports=router;
