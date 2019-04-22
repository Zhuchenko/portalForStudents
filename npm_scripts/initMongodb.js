const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/PortalForStudents", { useNewUrlParser: true }).then(() => {
    mongoose.connection.createCollection("students");
    mongoose.connection.createCollection("contracts").then(() => {
        mongoose.disconnect().then(() => {
            console.log("Connection closed.");
        });
    });
    console.log("Two collections are created!");
});