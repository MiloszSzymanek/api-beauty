const mongoose = require('mongoose')


//console.log('Mongoose is', mongoose)

module.exports = async  () => {


    try {
         mongoose.connect(process.env.DB_URI)
    
        

         console.log('connected to db');


    } catch (error) {
        console.log('connected to db error', error.message );

        process.exit(1)
        
    }

}    
