module.exports = function(sequelize, DataTypes){
  var Form = sequelize.define('Form', {
    clientId: {
      type: DataTypes.INTEGER,
      field: 'client_id',
      references: {
        model: 'client', key: 'id'
      },
      allowNull: false
    },
    description: DataTypes.STRING,
    domainName: {
      type: DataTypes.STRING,
      field: 'domain_name'
    },
    replyMail: {
      type: DataTypes.STRING,
      field: 'reply_mail'
    },
  }, {
    tableName: 'form',
    timestamps: true
  })

  Form.associate = function (models) {
    Form.hasMany(models.Content, {
      foreignKey: 'form_id',
      as: {
        singular: 'content',
        plural: 'contents'
      },
      onDelete: 'CASCADE',
    })
  }

  return Form
}
