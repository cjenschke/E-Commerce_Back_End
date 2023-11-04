const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);
// // Add associations
// ProductTag.associate = (models) => {
//   ProductTag.belongsTo(models.Product, {
//     foreignKey: 'product_id',
//     as: 'product',
//   });
//   ProductTag.belongsTo(models.Tag, {
//     foreignKey: 'tag_id',
//     as: 'tag',
//   });
// };

module.exports = ProductTag;
