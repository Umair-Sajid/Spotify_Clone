import playListModel from "../../models/playlist/index.js";
import userModel from "../../models/user/index.js";

const playlistController={
    create:async(req,res)=>{
       try {
        const{name,thumbnail,songs}=req.body;
        if(!name||!thumbnail||!songs){
            return res.json({
                err:"Insufficient data"
            })
        }
        const ownerId=req.session.user.id;
        const playlistCreate=await playListModel.create({
            name,thumbnail,owner:ownerId,songs,collaboratores:[]
        });
         return res.json({
            data:"Playlist created",playlistCreate
         })
       } catch (error) {
        return res.json({
            msg:"Playlist not created",error
        })
       }
},
// get playlist by playlist id using params 
playlistId:async(req,res)=>{
    try {
        const{playlistId}=req.params;
        const playlist=await playListModel.findOne({
            id:playlistId
        });
        if(!playlist){
            return res.status(301).json({
                err:"Invalid ID"
            })
        }
        return res.json({
            msg:"successfully fetch playlist data",playlist
        })
    } catch (error) {
        return res.json({
            msg:"INternal server error",error
        })
    }
},
// get playlist by artist id

artistId:async(req,res)=>{
    try {
        const{artistId}=req.params;

        const artist=await userModel.findOne({
            where:{
                id:artistId
            }
        })
        if(!artist){
            return res.status(301).json({
                err:"Invalid Artist Id"
            })
        }
        const playlist=await playListModel.findAll({
            where:{
                owner:artistId
            }
        });
        
        if(!playlist){
            return res.status(301).json({
                err:"artist dont created playlist"
            })
        }
        return res.json({
            msg:"successfully fetch playlist data of artist",playlist
        })
    } catch (error) {
        return res.json({
            msg:"INternal server error",error
        })
    }
}
}
export default playlistController;