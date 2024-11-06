const axios = require("axios");
const token ="91e89bd6c7b1f611304ba0f6faf45fd3"

const TeamData = async (req,res)=>{
 try {
 axios.get(`https://rest.entitysport.com/exchange/teams?token=${token}&&paged=1&per_page=50`).then((resp)=>{
  // console.log(data);
  console.log(resp.data)
  res.json({msg: resp.data.response})
 })
   
 } catch (error) {
  console.log(error);
  res.json({msg:"Internal Server Error !"})
 }

}

const PlayerData = async (req,res)=>{
    try {
        axios.get(`https://rest.entitysport.com/exchange/players?token=${token}&&paged=1&per_page=50`).then((
            resp
        ) =>{
            console.log(resp.data)
            res.json({msg: resp.data.response})
        })

    } catch (error) {

        console.log(error);
        res.json({msg:"Internal Server Error !"})
        
    }
}


module.exports = {TeamData , PlayerData}