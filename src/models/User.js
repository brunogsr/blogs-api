const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  }, 
  {
    underscored: true,
    tableName: 'users',
    timestamps: false,
  });
  
  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'user_id', as: 'user'});
    };
  return User;
  }

module.exports = userModel;
