require('dotenv').config()

const dbUser = encodeURIComponent(process.env.DB_USER)
const dbPassword = encodeURIComponent(process.env.DB_PASSWORD)
const dbHost = encodeURIComponent(process.env.DB_HOST)
const dbName = process.env.DB_NAME

const config = {
  dbUrl: `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`,
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRoute: process.env.FILES_ROUTE || 'files'
};

module.exports = config;

