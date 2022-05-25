
const db = require ("../models/db")

const sponsorController = {
    getAllSponsors(res){
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
   
    insertSponsors(res,Nom,Materiel,DateEntre,Quantite,Types,Adresse,Cp,Ville){
        const data = {
            Nom,
            Materiel,
            DateEntre,
            Quantite,
            Types,
            Adresse,
            Cp,
            Ville
        };
        console.log(data);
        
        db.Sponsor.create(data)
        .then(()=>{
            res.write(JSON.stringify({message:`nouveau sponsor : ${Nom} inserer`}))
            res.end()
        })
        .catch
        ((err)=>{
            console.log(err);
            res.write(JSON.stringify({message:"erreur d'encodage du sponsor"}))
            res.end()
        })
    },
    deleteSponsor(res,id){
        db.Sponsor.destroy({
            where:{
                id:id
            },
        })
        .then(() => {
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
    getSponsorsByCp(res,Cp){
        db.Sponsor.findAll({where:{Cp:Cp}})
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