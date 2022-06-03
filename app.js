
const db = require ("./models/db")
const http = require("http")
const url = require("url")


const AnimalInController = require ("./controllers/animalInController")
const AnimalOutController = require("./controllers/animalOutController")

const AdoptantController = require ("./controllers/adoptantController")
const EquipementController= require ("./controllers/equipementController")
const FamilleAccueilController = require ("./controllers/familleAccueilController")
const SponsorController = require ("./controllers/sponsorController")
const VeterinaireController = require ("./controllers/veterinaireController")
const router = require('express').Router()



 const getData = (req) => {
     return new Promise((resolve, reject) => {
         let body = ""
         req.on("data", (data) => {
             body = body + data
         })
         req.on("end", () => {
             resolve(JSON.parse(body))
         })
     })
 }
 db.sequelize.sync(/*{force:true}*/)
.then(()=>{
http.createServer((req, res) => {
    const currentUrl = url.parse(req.url, true)
    const path = currentUrl.pathname
    const query = currentUrl.query

    console.log(path)
    console.log(query)

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, Origin, Authorization")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")

    res.writeHead(200,{
        'Access-Control-Max-Age': 2592000, // 30 days
        "Content-Type": "application/json"
    })

if (req.method ==="OPTIONS"){
res.end()
}
    
   


//***************************************************** */
/*                  AnimalIN                            */
//***************************************************** */ 


if(path==="/animalin" && req.method==="GET"){
    AnimalInController.getallAnimalIns(res)
}
if(path==="/animalinpost" && req.method==="POST"){
    getData(req)
    .then((data) => {
        AnimalInController.insertAnimalIn(res,data.Nom,data.Sexe,data.Age,
            data.Poids,data.DateEntree,data.Etat,data.Traitement,
            data.FamilleAccueil,data.Note)
    })
}
if(path ==="/animalindelete" && req.method==="DELETE"){
    AnimalInController.deleteAnimal(res,query.id)
}
if(path==="/animalinsexe" && req.method==="GET"){
    AnimalInController.getAnimalInbyOne(res,query.Sexe)
}
if(path==="/animalinnom" && req.method==="GET"){
    AnimalInController.getAnimalInbyName(res,query.Nom)
}
if(path==="/animalinfa" && req.method==="GET"){
    AnimalInController.getAnimalInbyFa(res,query.FamilleAccueil)
}
if(path==="/animalinupdate" && req.method==="PUT"){
    getData(req)
    .then((data)=>{
        AnimalInController.updateAnimal(res,data.id)
    })    
}


//***************************************************** */
/*                  Animalout                            */
//***************************************************** */

if(path==="/animalout" && req.method==="GET"){
    AnimalOutController.getAllAnimalOut(res)
}
if(path ==="/animaloutpost" && req.method==="POST"){
    getData(req)
    .then((data)=>{
        AnimalOutController.insertAnimalOut(res,data.Nom,data.NomDefinitif,data.SexeDefini,data.Particularite,
            data.Age,data.Poids,data.Etat,data.Vaccin,data.DateVaccin,data.Puce,data.Sterilisation,
            data.DateSterilisation,data.Adoptant,data.DateDepart)
    })
}

if(path==="/animaloutsexe" && req.method==="GET"){
    AnimalOutController.getAnimalOutbyOne(res,query.SexeDefini)
}
if(path==="/animaloutnom" && req.method==="GET"){
    AnimalOutController.getAnimalOutbyName(res,query.Nom)
}
if (path==="/animaloutadopt" && req.method==="GET"){
    AnimalOutController.getAnimalOutbyAdopt(res,query.Adoptant)
}
if (path==="/animaloutdelete" && req.method==="DELETE"){
    AnimalOutController.deleteAnimalOut(res,query.id)
}

//***************************************************** */
/*                  Adoptant                            */
//***************************************************** */

if(path==="/adoptget" && req.method==="GET"){
    AdoptantController.getAllAdoptants(res)
}
if(path ==="/adoptantinsert" && req.method==="POST"){
    getData(req)
    .then((data)=>{
        AdoptantController.insertAdoptant(res,data.Nom,data.Adresse,data.CP,data.Ville,
            data.ContactMail,data.ContactPortable,data.Artichats,data.Note)
    })
}
if(path ==="/adoptantbyname" && req.method === "GET"){
    AdoptantController.getAdoptantByName(res,query.Nom)
}
if(path ==="/adoptantbyartichat" && req.method ==="GET"){
    AdoptantController.getAdoptantByArtichat(res,query.Artichats)
}



//***************************************************** */
/*                  Famille d'accueil                   */
//***************************************************** */
if (path === "/familleaccueilall" && req.method === "GET"){
    FamilleAccueilController.getAllFamilleAccueil(res)
}
if (path ==="/familleaccueilinsert" && req.method ==="POST"){
    getData(req)
    .then((data)=>{
        FamilleAccueilController.insertFamilleAccueil(res,data.Nom
            ,data.Adresse,data.Cp,data.Ville,
            data.EquipementsFourni,data.Artichats,data.Notes)
    })
}
if( path === "/familleaccueilbynom" && req.method === "GET"){
    FamilleAccueilController.getfamilleAccueilbyNom(res,query.Nom)
}
if( path === "/familleaccueilbyartichats" && req.method === "GET"){
    FamilleAccueilController.getFamilleAccueilbyArtichat(res,query.Artichats)
}


//***************************************************** */
/*                  Equipements                         */
//***************************************************** */





if (path === "/equipements" && req.method==="GET"){
    EquipementController.getAllEquipements(res)
}
if (path === "/equipementsinsert" && req.method ==="POST"){
    getData(req)
    .then((data)=>{
        EquipementController.insertEquipement(res,data.Nom,data.Types,
            data.Quantite,data.DateEntree,data.DatePeremption,data.Etats)
            
    })
}
if (path ==="/equipementdelete" && req.method === "DELETE"){
    EquipementController.deleteEquipement(res,query.id)
}
if (path === "/equipementbyetats" && req.method === "GET"){
    EquipementController.getEquipementbyEtats(res,query.Etats)
}
if (path ==="/equipementbynom" && req.method === "GET"){
    EquipementController.getEquipementByNom(res,query.Nom)
}
if(path === "/equipemenall" && req.method === "GET"){
    EquipementController.getAllEquipementsbyname(res,query.Nom)
}

//***************************************************** */
/*                  Sponsors                            */
//***************************************************** */
if (path === "/sponsor" && req.method==="GET"){
    SponsorController.getAllSponsors(res)
}
if (path === "/sponsorinsert" && req.method === "POST"){
    getData(req)
    .then((data)=>{
        SponsorController.insertSponsors(res,data.Nom,data.Materiel
            ,data.DateEntre,data.Quantite,data.Types,
            data.Adresse,data.Cp,data.Ville)
    })
}
if (path === "/sponsordelete" && req.method === "DELETE"){
    SponsorController.deleteSponsor(res,query.id)
}
if(path === "/sponsorbyname" && req.method === "GET"){
    SponsorController.getSponsorByNom(res,query.Nom)
}
if(path === "/sponsorbycp" && req.method === "GET"){
    SponsorController.getSponsorByCp(res,query.Cp)
}
if(path === "/sponsorsbycp" && req.method === "GET"){
    SponsorController.getSponsorsByCp(res,query.Cp)
}


//***************************************************** */
/*                  Veterinaire                         */
//***************************************************** */

if(path=== "/veterinaires" && req.method ==="GET"){
    VeterinaireController.getAllveterinaire(res)
}
if(path === "/veterinaireinsert" && req.method ==="POST"){
    getData(req)
    .then((data)=>{
        VeterinaireController.insertVeterinaire(res,data.Nom,data.Adresse,
            data.Ville,data.CP,data.DateIntervention,
            data.Prix,data.TypeIntervention,data.Artichats,data.Notes)

        })
    }
if(path === "/veterinairedelete" && req.method === "DELETE"){
    VeterinaireController.deleteVeterinaire(res,query.id)
}
if (path === "/veterinairebyville" && req.method ==="GET"){
    VeterinaireController.getVeterinairebyVille(res,query.Ville)
}
if(path === "/veterinairebyartichats" && req.method === "GET"){
    VeterinaireController.getVeterinairebyArtichats(res,query.Artichats)
}
if(path ==="/veterinairebycp" && req.method === "GET"){
    VeterinaireController.getVeterinairebyCP(res,query.CP)
}
if(path ==="/veterinairebyintervention" && req.method === "GET"){
    VeterinaireController.getVeterinairebyintervention(res,query.TypeIntervention)
}





        



        
})
.listen(8085)
})