const Sequelize = require('sequelize');

class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userID: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: 'Post',
        tableName: 'post',
      }
    );
  }

  static associate(db) {
    db.Post.belongsTo(db.User, { foreignKey: 'userID', sourceKey: 'userID' });
  }
}

module.exports = Post;
