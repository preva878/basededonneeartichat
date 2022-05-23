const db = require ("../models/db")

const veterinaireController = {
    getAllveterinaire(){
        db.Veterinaire.findAll()
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

module.exports = veterinaireController