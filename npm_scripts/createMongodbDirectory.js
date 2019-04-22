const mkdirp = require("mkdirp");
const fs = require("fs");

const dir = "C:/data/db";
if (!fs.existsSync(dir)){
    // creating full directory for mongodb
    mkdirp("C:/data/db", (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("C:/data/db exists.")
        }
    });
}