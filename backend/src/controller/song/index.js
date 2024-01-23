import songModel from "../../models/song/index.js";
import userModel from "../../models/user/index.js";

const songController = {
    create: async (req, res) => {
        try {
            const { name, thumbnail, track } = req.body;
            const artistId = req.session.user.id;
            

            if (!name || !thumbnail || !track) {
                return res.status(400).json({
                    error: "Insufficient details to create song",
                });
            }

            const createdSong = await songModel.create({
                name,
                thumbnail,
                track,
                artist: artistId,
            });

            return res.status(201).json({
                success: true,
                message: "Song created successfully",
                song: createdSong,
            });
        } catch (error) {
           
            return res.status(500).json({
                error: "Internal Server Error",error
            });
        }
    },
    read:async(req,res)=>{
        try {
            const artistId = req.session.user.id;
            const songs=await songModel.findAll({
                where:{
                    artist:artistId
                }
             
            });
            return res.status(200).json({
                "data":songs
            })
        } catch (error) {
            return res.json({
                "msg":"Song not exist of this artist",
                error
            })
        }
    },
    // song search by artist
    artist:async(req,res)=>{
        try {
            const {artistId}=req.body;
            const artist=await userModel.findOne({
                where:{
                    id:artistId
                }
            })
           
            if(!artist){
                return res.status(301).json({
                 err:"Artist does not exist"
                })
            }
            const songs =await songModel.findAll({
                where:{
                    artist:artistId
                }
            });
            return res.status(200).json({
                data:songs
            })
        } catch (error) {
            return res.json({
                err:"not found",error
            })
        }
    },
    // song search by songname
    // pattern search in future
    songName:async(req,res)=>{
        const {name}=req.body;
        const song= await songModel.findAll({
            where:{
                name
            }
        });
        console.log(song)
        return res.json({
            data:song
        })
    }
};

export default songController;
