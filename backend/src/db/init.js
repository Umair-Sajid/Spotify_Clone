import userModel from "../models/user/index.js";
import songModel from "../models/song/index.js";
import playListModel from "../models/playlist/index.js";
const dbSync=async()=>{
    try {
        await userModel.sync({
            alter:true,
            force:false
        });
        await songModel.sync({
            alter:true,
            force:false
        });
        await playListModel.sync({
            alter:true,
            force:false
        });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.log("All models were not synchronized .",error);
    }
}
export default dbSync;