const db = require ("../models/db")

const sponsorController = {
    getAllSponsors(){
        return db.Sponsor.findAll()
    },
}

module.exports = sponsorController