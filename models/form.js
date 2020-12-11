const { format } = require('path');
let crypto = require('crypto')
const tokenService = require('@services/token.service.js')

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
    token: {
      type: DataTypes.STRING,
      field: 'token'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    tableName: 'form',
    timestamps: true
  })

  Form.beforeCreate(async (user, options) => {
    let token = tokenService.issue()
    form.token = token
  });

  Form.prototype.validToken = function(token) {
    return form.token == token
  }

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
