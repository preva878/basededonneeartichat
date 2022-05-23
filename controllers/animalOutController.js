const db = require ('../models/db')

const animalOutController = {
    
    getAllAnimalOut(res){
        db.AnimalOut.findAll()
        .then((result)=>{
            res.write(JSON.stringify(result.map(
                elem => elem.toJSON()
            )))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans getanimalout"}))
            res.end()
        })
    },

    insertAnimalOut(res,Nom,NomDefinitif,SexeDefini,Particularite,Age,Poids,Etat,Vaccin,DateVaccin,Puce,Sterilisation,DateSterilisation,Adoptant,DateDepart){
        db.AnimalOut.create({
            Nom:Nom,
            NomDefinitif:NomDefinitif,
            SexeDefini:SexeDefini,
            Particularite:Particularite,
            Age:Age,
            Poids:Poids,
            Etat:Etat,
            Vaccin:Vaccin,
            DateVaccin:DateVaccin,
            Puce:Puce,
            Sterilisation:Sterilisation,
            DateSterilisation:DateSterilisation,
            Adoptant:Adoptant,
            DateDepart:DateDepart,

        })
        .then(()=>{
            res.write(JSON.stringify({message:`artichats ${Nom} ajouter en out`}))
            res.end()
        })
        .catch
        (()=>{
            res.write(JSON.stringify({message:"erreur"}))
            res.end()
        })
    },
    deleteAnimalOut(res,id){
        db.AnimalOut.destroy({
            where:{
                id:id
            },
        })
            .then(() => {
                res.write(JSON.stringify({message:`animal ${id} effacer`}))
                res.end()
            })
            .catch(()=>{
                res.write(JSON.stringify({message:`erreur`}))
                res.end()
            })
    },
    getAnimalOutbyOne(res,SexeDefini){
        db.AnimalOut.findOne({where:{SexeDefini:SexeDefini}})
        .then((result) => {
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans la recherche par sexe"}))
            res.end()
        })
        
    },
    getAnimalOutbyName(res,Nom){
        db.AnimalOut.findOne({where:{Nom:Nom}})
        .then((result) => {
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans la recherche par nom"}))
            res.end()
        })
        
    },
    getAnimalOutbyAdopt(res,Adoptant){
        db.AnimalOut.findOne({where:{Adoptant:Adoptant}})
        .then((result) => {
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans la recherche par adoptant"}))
            res.end()
        })
        
    },


}
module.exports = animalOutController