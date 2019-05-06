const mongoose = require("mongoose");
(async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/PortalForStudents", {useNewUrlParser: true});
        await mongoose.connection.createCollection("students");
        await mongoose.connection.createCollection("contracts");
        await mongoose.disconnect();
        console.log("Two collections are created!");
        console.log("Connection closed.");
    } catch (e) {
        console.log("When mongodb inits:");
        console.error(e);
    }
})();