const model = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscored: true
  }
  );
  return Category;
}

module.exports = model;