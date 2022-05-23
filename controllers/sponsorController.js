const db = require ("../models/db")

const sponsorController = {
    getAllSponsors(){
     db.Sponsor.findAll()
    },
}

module.exports = sponsorController