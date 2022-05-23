const db = require ("../models/db")

const equipementController = {
    getAllEquipements(res){
        db.Equipement.findAll()
        .then((result)=>{
            res.write(JSON.stringify(result.map(
                elem => elem.toJSON()
            )))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans getequipement"}))
            res.end()
        })
    },
    insertEquipement(res,Nom,Types,Quantite,DateEntree,DatePeremption,Etats){
        db.Equipement.create({
            Nom:Nom,
            Types:Types,
            Quantite:Quantite,
            DateEntree:DateEntree,
            DatePeremption:DatePeremption,
            Etats:Etats,
        })
        .then(()=>{
            res.write(JSON.stringify({message:`equipement ${Nom} ajouter `}))
            res.end()
        })
        .catch
        (()=>{
            res.write(JSON.stringify({message:"erreur dans l insertion"}))
            res.end()
        })
    }
}

module.exports = equipementController