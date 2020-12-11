/* 
{ 
  name: "Stijepo Simović"
  description: "Zaštita na radu"
  domain_name: "red-element.hr"
}
*/

module.exports = function(sequelize, DataTypes){
  var Content = sequelize.define('Content', {
    formId: {
      type: DataTypes.INTEGER,
      field: 'form_id',
      references: {
        model: 'form', key: 'id'
      },
      allowNull: false
    },
    note: DataTypes.STRING,
    content: DataTypes.JSON,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    tableName: 'content',
    timestamps: true
  })
  
  return Content
}