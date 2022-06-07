const multer = require('multer')
const path = require ('path')
const { Equipement } = require('../models/db')
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
    insertEquipement(res,Image,Nom,Types,Quantite,DateEntree,DatePeremption,Etats){
        db.Equipement.create({
            
            Image:Image,
            Nom:Nom,
            Types:Types,
            Quantite:Quantite,
            DateEntree:DateEntree,
            DatePeremption:DatePeremption,
            Etats:Etats,
        })
        .then(()=>{
            res.write(JSON.stringify({message:`equipement ${Nom} de types: ${Types} ajouter `}))
            res.end()
        })
        .catch
        (()=>{
            res.write(JSON.stringify({message:"erreur dans l insertion"}))
            res.end()
        })
    },
    deleteEquipement(res,id){
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
        getAllEquipementsbyname(res,Nom){
            db.Equipement.findAll({where:{Nom:Nom}})
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

      
    
}
// //essai express pour multer
// const Equipements = db.equip

// //creation equipement
// const addEquip = async (req,res) => {
//     let info = {
//         Image : req.file.path,
//         Nom : req.body.Nom,
//         Types : req.body.Types,
//         Quantite: req.body.Quantite,
//         DateEntree : req.body.DateEntree,
//         DatePeremption : req.body.DatePeremption,
//         Etats : req.body.Etats,
//     }
//     const equip = await Equipements.create(info)
//     res.status(200).send(equip)
//     console.log(equip)
// }
// //creation getall
// const getAllEquip = async (req,res) => {
//     let equip = Equipements.findAll({})
//     res.status(200).sent(equip)
// }
// //essai get one by id
// const getOneEquip = async (req,res) => {
//     let id = req.params.id
//     let equip = await Equipements.findOne({where:
//     {id:id}})
//     res.status(200).send(equip)
// }
// //essai update
// const updateEquip = async (req,res) => {
//     let id = req.params.id
//     const equip = await Equipements.update(req.body, {where:
//         {id:id}})
//         res.status(200).send(equip)

// }
// //essai delete by id
// const deleteEquip = async (req,res) => {
//     let id = req.params.id
//     await Equipements.destroy({where:{id:id}})
//     res.status(200).send(`equipement ${Equipements}  delete`)
// }
// //recup les equip publier?
// const getPublishEquip = async (req,res) => {
//     const equip = await Equipements.findAll({where:
//         {published: true}})
//         res.status(200).send(equip)
// }
//   //multer essai
//   const storage = multer.diskStorage({
//     destination:(req,file,cb,)=>{
//         cb(null,'../Images')
//     },
//     filename:(req,file,cb) =>{
//         cb(null,Date.nom() + path.extname(file.originalname))
//     }
// })
// const upload = multer({
//     storage:storage,
//     limits: {fileSize:'10000000'},
//     fileFilter:(req,file,cb) => {
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if(mimeType && extname){
//             return cb(null,ture)

            
//         }
//         cb('erreur de format')
//     }
// }).single('Image')


module.exports = {equipementController,
        // addEquip,
        // getAllEquip,
        // getOneEquip,
        // updateEquip,
        // deleteEquip,
        // getPublishEquip,
        // upload
}