const Datastore = require("nedb");

module.exports = new Datastore({ filename: "stories.db", autoload: true });
