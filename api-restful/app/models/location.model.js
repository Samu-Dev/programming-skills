module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define("location", {
      name: {
        type: Sequelize.STRING
      },
      area_m2: {
        type: Sequelize.INTEGER
      }
    });
  
    return Location;
  };