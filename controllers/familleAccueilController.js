
const db = require ("../models/db")

const familleAccueilController = {
    getAllFamilleAccueil(res){
        db.FamilleAccueil.findAll()
        .then((result)=>{
            res.write(JSON.stringify(result.map(
                elem => elem.toJSON()
            )))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur"}))
            res.end()
        })
    },

    insertFamilleAccueil(res,Nom,Adresse,Cp,Ville,EquipementsFourni,Artichats,Notes){
        db.FamilleAccueil.create({
            Nom:Nom,
            Adresse:Adresse,
            Cp:Cp,
            Ville:Ville,
            EquipementsFourni:EquipementsFourni,
            Artichats:Artichats,
            Notes:Notes
        })
        .then(()=>{
            res.write(JSON.stringify({message:`famille d'accueil ${Nom} ajouter a l'equipe`}))
            res.end()
        })
        .catch
        (()=>{
            res.write(JSON.stringify({message:"erreur dans l insertion de famille accueil"}))
            res.end()
        })
    },
    deleteFamilleAccueil(){
        db.FamilleAccueil.destroy({
            where:{
                id:id
            },
        })
        .then(()=>{
            res.write(JSON.stringify({message:`famille d'accueil supprimer`}))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur"}))
            res.end()
        })
    },
    getfamilleAccueilbyNom(res,Nom){
        db.FamilleAccueil.findOne({where:{Nom:Nom}})
        .then((result)=> {
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:`erreur dans la recherche par nom:${Nom}`}))
            res.end()
        })
    },
    getFamilleAccueilbyArtichat(res,Artichats){
        db.FamilleAccueil.findOne({where:{Artichats:Artichats}})
        .then((result) => {
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:`erreur dans la recherche pour ${Artichats}`}))
            res.end()
        })
    },
    getFamilleAccueilbyCP(res,Cp){
        db.FamilleAccueil.findOne({where:{Cp:Cp}})
        .then((result)=>{
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:`erreur dans la recherche par cp : ${Cp}`}))
            res.end()
        })
    },

}

module.exports = familleAccueilController