module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // puxando ID da tabela users
          key: 'id',
        },
        onUpdate: 'CASCADE', // atualizar e deletar em cascata
        onDelete: 'CASCADE',
      },
      published: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updated: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('blog_posts');
  }
};