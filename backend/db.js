const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
const mongoURI = "mongodb+srv://Gayathri:oP91KGW5dGNR4dxv@cluster0.t4wisjm.mongodb.net/DriveReady?retryWrites=true&w=majority" // Customer change url to your db you created in atlas
const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected!');
       let foodCollection = mongoose.connection.db.collection("food_items");
       let data=await foodCollection.find({}).toArray() 
      let foodCategory = mongoose.connection.db.collection("foodCollections");
      let CatData=await foodCategory.find({}).toArray() 
      global.foodData = data;
      global.foodCategory = CatData;
    } catch (error) {
      console.log('err: ', error);
    }
  };
  module.exports = mongoDB;