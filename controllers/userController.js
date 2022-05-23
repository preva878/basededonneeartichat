const db = require ("../models/db")

const userController = {
    getAllUsers(){
       db.User.findAll()
       .then((result)=>{
        res.write(JSON.stringify(result.map(
            elem=> elem.toJSON()
        )))
        res.end()
    })
    .catch(()=>{
        res.write(JSON.stringify({message:"erreur"}))
        res.end()
    })
    },
}

module.exports = userController