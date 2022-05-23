const db = require ("../models/db")

const adoptantController = {
    getAllAdoptants(res){
       db.Adoptant.findAll()
       .then((result)=>{
        res.write(JSON.stringify(result.map(
            elem => elem.toJSON()
        )))
        res.end()
    })
    .catch(()=>{
        res.write(JSON.stringify({message:"erreur dans getadoptant"}))
        res.end()
    })
},
    
    insertAdoptant(res,Nom,Adresse,CP,Ville,ContactMail,ContactPortable,Artichats,Note){
        db.Adoptant.create({
            Nom:Nom,
            Adresse:Adresse,
            CP:CP,
            Ville:Ville,
            ContactMail:ContactMail,
            ContactPortable:ContactPortable,
            Artichats:Artichats,
            Note:Note,
            
        })
        .then(()=>{
            res.write(JSON.stringify({message:`adoptant ${Nom} ajouter ${Artichats} aux adoptants`}))
            res.end()
        })
        .catch
        (()=>{
            res.write(JSON.stringify({message:"erreur dans l insertion"}))
            res.end()
        })
    },

    getAdoptantByName(res,Nom){
        db.Adoptant.findOne({where:{Nom:Nom}})
        .then((result)=>{
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dans la recherche adoptant par nom"}))
            res.end()
        })
    },
    getAdoptantByArtichat(res,Artichats){
        db.Adoptant.findOne({where:{Artichats:Artichats}})
        .then((result)=> {
            res.write(JSON.stringify(result))
            res.end()
        })
        .catch(()=>{
            res.write(JSON.stringify({message:"erreur dasn la recherche par artichat"}))
            res.end()
        })
       
    },
    deleteAdoptant(res,id){
        db.Adoptant.destroy({
            where:{
                id:id
            },
        })
        .then(()=> {
            res.write(JSON.stringify({message:`Adoptant avec id: ${id} effacer`}))
            res.end()
        })
    },
}
module.exports = adoptantController