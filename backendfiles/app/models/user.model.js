module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    isadmin: {
      type: Sequelize.BOOLEAN,
      // defaultValue: false,
      // set: function(value) {
      //   if (value === 'true') value = true;
      //   if (value === 'false') value = false;
      //   this.setDataValue('isadmin', value);
      //}
    }
  },
  {timestamps: false});

  return User;
};

