const db = require ("../models/db")

const veterinaireController = {
    getAllveterinaire(res){
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
    insertVeterinaire(res,Nom,Adresse,Ville,CP,DateIntervention,Prix,TypeIntervention,Artichats,Notes){
        db.Veterinaire.create({
            Nom:Nom,
            Adresse:Adresse,
            Ville:Ville,
            CP:CP,
            DateIntervention:DateIntervention,
            Prix:Prix,
            TypeIntervention:TypeIntervention,
            Artichats:Artichats,
            Notes:Notes
        })
        .then(()=>{
            res.write(JSON.stringify({message:`veterinaire ${Nom} ajouter al base de donnèe`}))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans l insert veterinaire"}))
            res.end()
        })
    },
    deleteVeterinaire(res,id){
        db.Veterinaire.destroy({
            where:{
                id:id
            },
        })
        .then(()=>{
            res.write(JSON.stringify({message:`veterinaire :${id}`}))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans le delete"}))
            res.end()
        })
    },
    getVeterinairebyVille(res,Ville){
        db.Veterinaire.findAll({where:{Ville:Ville}})
        .then((result)=>{
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans la recherche par ville"}))
            res.end()
        })
    },
    getVeterinairebyArtichats(res,Artichats){
        db.Veterinaire.findOne({where:{Artichats:Artichats}})
        .then((result)=>{
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:`erreur dans la recherche par Artichats : ${Artichats}`}))
            res.end()
        })
    },
    getVeterinairebyCP(res,CP){
        db.Veterinaire.findOne({where:{CP:CP}})
        .then((result)=>{
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:`erreur dans la recherche par code postal ${CP}`}))
            res.end()
        })
    },
    getVeterinairebyintervention(res,TypeIntervention){
        db.Veterinaire.findAll({where:{TypeIntervention:TypeIntervention}})
        .then((result)=>{
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:`erreur dans la recherche par intervention ${TypeIntervention}`}))
            res.end()
        })
    },
}

module.exports = veterinaireController