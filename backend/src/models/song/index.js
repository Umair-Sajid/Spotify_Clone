import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
import userModel from "../user/index.js";
const songModel=sequelize.define('Song',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    thumbnail:{
        type:DataTypes.STRING,
        allowNull:false
    },
    track:{
        type:DataTypes.STRING,
        allowNull:false
    },
    
});
songModel.belongsTo(userModel,{foreignKey:"artist",allowNull:false});
export default songModel;