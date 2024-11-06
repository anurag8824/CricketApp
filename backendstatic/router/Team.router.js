const Router = require("express")
const router = Router();
const TeamData = require("../controller/Team.controller.js")



router.get("/allteam",TeamData.TeamData)
router.get("/allplayer", TeamData.PlayerData )




module.exports = router