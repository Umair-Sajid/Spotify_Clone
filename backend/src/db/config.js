import { Sequelize } from "sequelize";
const sequelize = new Sequelize("spotifydata", "postgres", "umair", {
  host: "localhost",
  dialect: "postgres",
});

export const dbConfig = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database is connected successfully");
  } catch (error) {
    console.log("Database is not connected", error);
  }
};
export default sequelize;
