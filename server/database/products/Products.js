const { DataTypes } = require("sequelize");
const db = require("../Seq")


const Products = db.define(
  'products',
  {
    // Model attributes are defined here
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category : {
        type : DataTypes.STRING,
        allowNull : false
    },
    sku: {
      type: DataTypes.STRING,
      unique : true
    },


    mrp : {
        type : DataTypes.STRING,
        allowNull : false
    },
    

    selling_price : {
        type : DataTypes.STRING,
        allowNull : false
    },
    products_photos : {
        type : DataTypes.STRING,
        allowNull : false
    },
    shapes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    size : {
        type : DataTypes.STRING,
        allowNull : false
    },
    thickness : {
        type : DataTypes.STRING,
        allowNull : false
    }
  },
  {
    timestamps : false
  },
);


module.exports  = Products