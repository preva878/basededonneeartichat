const multer = require('multer')
const path = require ('path')
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
  //multer essai
  const storage = multer.diskStorage({
    destination:(req,file,cb,)=>{
        cb(null,'../Images')
    },
    filename:(req,file,cb) =>{
        cb(null,Date.nom() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage:storage,
    limits: {fileSize:'10000000'},
    fileFilter:(req,file,cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeTpe && extname){
            return cb(null,ture)

            
        }
        cb('erreur de format')
    }
}).single('Images')


module.exports = equipementController