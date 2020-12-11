// Aliases not fetchable here
/* const tokenService = require('@services/token.service.js') */

const tokenService = require('../../services/token.service')
module.exports = [
  { 
    client_id: 1,
    description: 'Form for a webpage',
    domain_name: 'example.com',
    reply_mail: 'john.doe@example.com',
    token: tokenService.issue()
  },
  { 
    client_id: 1,
    description: 'Second Form for a webpage',
    domain_name: 'example.com',
    reply_mail: 'john.doe@example.com',
    token: tokenService.issue()
  },
  { 
    client_id: 1,
    description: 'Third Form for a webpage',
    domain_name: 'example.com',
    reply_mail: 'john.doe@example.com',
    token: tokenService.issue()
  },
]