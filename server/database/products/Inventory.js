const { DataTypes } = require("sequelize");
const {db} = require("../Seq")


const Inventory = db.define(
  'inventory',
  {
    // Model attributes are defined here
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    material_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    product_category : {
        type : DataTypes.STRING,
        allowNull : false
    },







    unit : {
        type : DataTypes.STRING,
        allowNull : false
    },

    qty : {
        type : DataTypes.STRING,
        allowNull : false
    },
    
  },
  
  {
    timestamps : false

  },
);





module.exports = Inventory