import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
import userModel from "../user/index.js";
import songModel from "../song/index.js";
const playListModel=sequelize.define('Playlist',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    thumbnail:{
        type:DataTypes.STRING,
        allowNull:false
    }
});
playListModel.belongsTo(userModel,{foreignKey:"owner",allowNull:false});
playListModel.belongsTo(songModel,{foreignKey:"songs", type:DataTypes.ARRAY(DataTypes.JSON)});
playListModel.belongsTo(songModel,{foreignKey:"collaborators", type:DataTypes.ARRAY(DataTypes.JSON)});
export default playListModel
