PortalForStudents
=====================
Usage
-----------------------------------
### Before you start
1. Install mongodb at the default location (`C:/Program Files/`);
2. Stop the dafault `mongod` service.

### NPM Scripts
`npm run init:all` - set up MongoDB:
   * creates `mongodb` folder in project's root;
   * creates `mongod` service and starts it;
   * creates database `PortalForStudents` with two empty collections (`students`, `contracts`);
   * database will be automatically connected when `PortalForStudents` server starts.

`npm run build` - builds server and client applications into `dist` folder.

`npm run prod` - starts `npm run build` script and then starts PortalForStudents server in `production mode` from `dist` folder.

`npm run dev` - starts PortalForStudents server in `development mode`.

Configuration
-----------------------------------
### Server configuration file
Location: `_{project directory}_/server/server.config.js`
```
const serverConfig = {
  port: 3000,
  databaseConnectionURL: "mongodb://localhost:27017/PortalForStudents"
}

module.exports = serverConfig
```
`port` _(number, default: 3000)_ - server port number.

`databaseConnectionURL` _(string, default: "mongodb://localhost:27017/PortalForStudents")_ - MongoDB connection URL.

### Authorization configuration file
Location: `_{project directory}_/server/authorization.config.js`
```
const authorizationConfig = {
  allowedLogins: [],
  sessionSecret: 'secret'
}

module.exports = authorizationConfig
```
`allowedLogins` _(array, default: empty)_ - login list for users allowed to register and login. If empty, all users are allowed to register and login.

`sessionSecret` _(string, default: "secret")_ - secret session key used for authorization system.
