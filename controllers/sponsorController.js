const res = require("express/lib/response")
const db = require ("../models/db")

const sponsorController = {
    getAllSponsors(){
     db.Sponsor.findAll()
     .then((result)=>{
         res.write(JSON.stringify(result.map(
             elem => elem.toJSON()
         )))
         res.end()
     })
     .catch(()=>{
         res.write(JSON.stringify({message:"erreur dans la recherche all"}))
         res.end()
     })
        
     },
   
    insertSponsors(){
        db.Sponsor.create({
            Nom:Nom,
            Materiel:Materiel,
            DateEntree:DateEntree,
            Quantite:Quantite,
            Types:Types,
            Adresse:Adresse,
            Cp:Cp,
            Ville:Ville,
        })
        .then(()=>{
            removeEventListener.write(JSON.stringify({message:`nouveau sponsor : ${Nom} inserer`}))
            res.end()
        })
        .catch
        (()=>{
            res.write(JSON.stringify({message:"erreur d'encodage"}))
            res.end()
        })
    },
    deleteSponsor(res,id){
        db.AnimalOut.destroy({
            where:{
                id:id
            },
        })
        .then(()=>{
            res.write(JSON.stringify({message:`sponsor ${Nom} effacer`}))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans la suppression du sponsor"}))
            res.end()
        })
    },
    getSponsorByNom(res,Nom){
        db.Sponsor.findOne({where:{Nom:Nom}})
        .then((result)=> {
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans la recherche par nom"}))
            res.end()
        })
    },
    getSponsorByCp(res,Cp){
        db.Sponsor.findOne({where:{Cp:Cp}})
        .then((result)=> {
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:`erreur dans la recherche par CP`}))
            res.end()
        })
    },
}

module.exports = sponsorController