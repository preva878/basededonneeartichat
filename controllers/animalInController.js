const db = require ("../models/db")


const AnimalInController = {
   

    getallAnimalIns(res){
        db.AnimalIn.findAll()
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

    insertAnimalIn(res,Nom,Sexe,Age,Poids,DateEntree,Etat,Traitement,FamilleAccueil,Note){
        db.AnimalIn.create({
            Nom:Nom,
            Sexe:Sexe,
            Age:Age,
            Poids:Poids,
            DateEntree:DateEntree,
            Etat:Etat,
            Traitement:Traitement,
            FamilleAccueil:FamilleAccueil,
            Note:Note,
        })
        .then(() => {
            res.write(JSON.stringify({message:`animal ${Nom} ajouter`}))
            res.end()
        })
        .catch
        (()=>{
            res.write(JSON.stringify({message:"erreur dans l insertion"}))
            res.end()
        })
        
    },
    getAnimalInbyOne(res,Sexe){
        db.AnimalIn.findAll({where:{Sexe:Sexe}})
        .then((result) => {
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans la recherche par sexe"}))
            res.end()
        })
        
    },
    getAnimalInbyName(res,Nom){
        db.AnimalIn.findOne({where:{Nom:Nom}})
        .then((result) => {
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans la recherche par nom"}))
            res.end()
        })
        
    },
    getAnimalInbyFa(res,FamilleAccueil){
        db.AnimalIn.findAll({where:{FamilleAccueil:FamilleAccueil}})
        .then((result) => {
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans la recherche par nom"}))
            res.end()
        })
        
    },
    deleteAnimal(res,id){
        db.AnimalIn.destroy({
            where:{
                id:id
            },
        })  
        .then(() => {
            res.write(JSON.stringify({message:`animal ${id} effacer`}))
            res.end()
        })
        
    },
   


}



module.exports = AnimalInController