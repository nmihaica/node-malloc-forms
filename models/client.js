/* 
{ 
  name: "Stijepo Simović"
  description: "Zaštita na radu"
  domain_name: "red-element.hr"
}
*/

module.exports = function(sequelize, DataTypes){
  var Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    tableName: 'client',
    timestamps: true
  })

  Client.associate = function (models) {
    Client.hasMany(models.Form, {
      foreignKey: 'client_id',
      as: {
        singular: 'form',
        plural: 'forms'
      },
      onDelete: 'CASCADE',
    })
  }

  return Client
}