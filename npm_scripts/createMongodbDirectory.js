const mkdirp = require("mkdirp");
const fs = require("fs");

const dir = "../mongod/data/db";
if (!fs.existsSync(dir)){
    // creating full directory for mongodb
    mkdirp("../mongod/data/db", (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("/data/db exists.")
        }
    });
}