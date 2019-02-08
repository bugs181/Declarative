/* eslint-disable prefer-template */
/* eslint-disable no-console */
'use strict'

// Setup code
const DC = require('./index.js')

const template = {
  div: {
    user: {
      condition: (ctx) => {
        if (ctx.loggedIn)
          return 'loggedIn'

        if (ctx.admin)
          return 'admin'
      },

      content: {
        loggedIn: (ctx) => 'Welcome ' + ctx.username,
        admin: (ctx) => 'Admin ' + ctx.username,
        customProps: (ctx, app, props) => { props.id = 'someDiv'; props.test = true }
      },

      tags: ['<h1>', '</h1>'],
    },
  },
}

const appContext = {
  user: {
    username: 'Levi',
    loggedIn: true,
    admin: false,
  },
}


// The goodies
let dc = new DC(template, appContext)
let output = dc.render()

console.log(output)
