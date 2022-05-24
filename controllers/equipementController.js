const res = require("express/lib/response")
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
    },
    deleteEquipement(){
        db.Equipement.destroy({
            where:{
                id:id
            },
        })
        .then(()=> {
            res.write(JSON.stringify({message:`equipement : ${id} supprimer`}))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans le delete"}))
            res.end()
        })
    },
    getEquipementbyEtats(res,Etats){
        db.Equipement.findOne({where:{Etats:Etats}})
        .then((result)=>{
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:`erreur dans la recherche par Etats`}))
            res.end()
        })
    },
    getEquipementByNom(res,Nom){
        db.Equipement.findOne({where:{Nom:Nom}})
        .then((result)=>{
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=> {
            res.write(JSON.stringify({message:`erreur dans la recher par nom : ${Nom}`}))
            res.end()
        })

        },
    
}

module.exports = equipementController