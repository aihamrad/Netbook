const contentful = require('contentful')

export const Client = contentful.createClient({
  space: '7xlqtfiem5zd',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'MqHBrcp-PKaOXXexbJHIU1cRyPxKB7RZiDYKrfTJyqY'
})