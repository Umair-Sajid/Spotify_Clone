import sequelize from "../../db/config.js";
import { DataTypes} from "sequelize";
const userModel=sequelize.define('User',{
    firstName:{
        type:DataTypes.STRING,
        allowNull:false

    },
    lastName:{
        type:DataTypes.STRING,
     
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },


    likedSongs:{
        // pass array data in future
        type:DataTypes.STRING,

        defaultValue:''

    },
    likedPlaylists:{
        type:DataTypes.STRING,
     
    },
    subscribedArtists:{
        type:DataTypes.STRING,
        defaultValue:''

    }
});
export default  userModel;