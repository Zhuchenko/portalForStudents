const mkdirp = require("mkdirp");
const fs = require("fs");

const dir = "./mongodb/data/db";
if (!fs.existsSync(dir)){
    // creating full directory for mongodb
    mkdirp("./mongodb/data/db", (err) => {
        if (err) {
            console.error("Creating mongodb/data/db error!", err);
        } else {
            console.log("mongodb/data/db exists.")
        }
    });
}