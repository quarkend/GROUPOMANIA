module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    isadmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
  },
    { underscored: true }
  );
  return User;
};
// module.exports = (sequelize, Sequelize) => {
//   const Post = sequelize.define('Post', {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true
//     },
//     content: {
//       type: Sequelize.TEXT,
//       allowNull: false
//     },
//     isdeleted: {
//       type: Sequelize.BOOLEAN,
//       defaultValue: false,
//       allowNull: false
//     }
//   },
//     { underscored: true }
//   );
//   return Post;
// };
// module.exports = (sequelize, Sequelize) => {
//   const Like = sequelize.define('Like', {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true
//     },
//   },
//     { underscored: true }
//   );
//   return Like;
// };
// module.exports = (sequelize, Sequelize) => {
//   const Comment = sequelize.define('Comment', {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true
//     },
//     content: {
//       type: Sequelize.TEXT,
//       allowNull: false
//     },
//     isdeleted: {
//       type: Sequelize.BOOLEAN,
//       defaultValue: false,
//       allowNull: false
//     }
//   },
//     { underscored: true }
//   );
//   return Comment;
// };
