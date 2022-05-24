
const db = require ("./models/db")
const http = require("http")
const url = require("url")


const AnimalInController = require ("./controllers/animalInController")
const AnimalOutController = require("./controllers/animalOutController")

const AdoptantController = require ("./controllers/adoptantController")
const EquipementController= require ("./controllers/equipementController")
const FamilleAccueilController = require ("./controllers/familleAccueilController")





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
db.sequelize.sync()
.then(()=>{
http.createServer((req, res) => {
    const currentUrl = url.parse(req.url, true)
    const path = currentUrl.pathname
    const query = currentUrl.query

    console.log(path)
    console.log(query)
    res.writeHead(200,{
            
        'Access-Control-Allow-Origin': '*',

        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',

        'Access-Control-Max-Age': 2592000, // 30 days

        "Content-Type": "application/json"

})

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



//***************************************************** */
/*                  Sponsors                            */
//***************************************************** */



//***************************************************** */
/*                  Veterinaire                         */
//***************************************************** */






        



        
})
.listen(8085)
})