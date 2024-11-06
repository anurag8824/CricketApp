const axios = require("axios");
const token = "91e89bd6c7b1f611304ba0f6faf45fd3"

const TeamData = async (req, res) => {
    try {
        axios.get(`https://rest.entitysport.com/exchange/teams?token=${token}&&paged=1&per_page=50`).then((resp) => {
            // console.log(data);
            //   console.log(resp.data)
            res.json({ msg: resp.data.response })
        })

    } catch (error) {
        console.log(error);
        res.json({ msg: "Internal Server Error !" })
    }

}

const PlayerData = async (req, res) => {
    try {
        axios.get(`https://rest.entitysport.com/exchange/players?token=${token}&&paged=1&per_page=50`).then((
            resp
        ) => {
            // console.log(resp.data)
            res.json({ msg: resp.data.response })
        })

    } catch (error) {

        console.log(error);
        res.json({ msg: "Internal Server Error !" })

    }
}


const TeamSerach = async (req, res) => {
    const teamname = req.body.search;
    console.log(teamname);
    try {
        axios.get(`https://rest.entitysport.com/exchange/teams?search=${teamname}&token=${token}&&paged=1&per_page=50`).then((resp) => {
            // console.log(data);
            //  console.log(resp.data)
            res.json({ msg: resp.data.response })
        })

    } catch (error) {
        //  console.log(error);
        res.json({ msg: "Internal Server Error !" })
    }


}



const PlayerSerach = async (req, res) => {
    const playername = req.body.search;
    console.log(playername);
    try {
        axios.get(`https://rest.entitysport.com/exchange/players?search=${playername}&token=${token}&&paged=1&per_page=50`).then((resp) => {
            // console.log(data);
            //  console.log(resp.data)
            res.json({ msg: resp.data.response })
        })

    } catch (error) {
        //  console.log(error);
        res.json({ msg: "Internal Server Error !" })
    }


}


const PlayerInformation = async (req, res) => {
    try {
        const id = req.body.playerid;
        console.log("playerid:", id)
        if (!id) {
            return res.json({ msg: "Oppps some error in Url ......." })

        }

        axios.get(`https://rest.entitysport.com/exchange/players/${id}/stats?token=${token}`)
            .then((resp) => {
                console.log(res, "data from the Player stats")
                res.json(resp.data)
            })
            .catch((err) => {
                console.log(err, "data from the Player stats")
                res.json({ msg: "error in fetchting Player data" })
            })
    } catch (error) {
        res.json({ msg: "Internal Server Error !" })
    }
}





module.exports = { TeamData, PlayerData, TeamSerach, PlayerSerach, PlayerInformation }