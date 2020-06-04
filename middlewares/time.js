const moment = require('moment')

const time = (req,res,next)=>{
    console.log(moment().format('LLL'))
    next()
}

module.exports = time