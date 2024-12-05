const { DataTypes } = require("sequelize");
const db = require("../Seq")


const ProductCategory = db.define(
  'productcategory',
  {
    // Model attributes are defined here
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    category_photo: {
      type: DataTypes.TEXT,
      allowNull: false
  }
  },
  
  {
    timestamps : false

  },
);





module.exports = ProductCategory