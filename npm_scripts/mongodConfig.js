// creating empty mongod.log
const fs = require("fs");
fs.closeSync(fs.openSync("./mongodb/mongod.log", 'w'));


// generating mongod.cfg
const
    yaml = require("js-yaml"),
    path = require("path");
const
    beginSlice = 0,
    endSlice = path.basename(__dirname).length;
const dir = __dirname.slice(beginSlice, -endSlice);
const
    pathMongodDataDb = dir.concat("mongodb\\data\\db"),
    pathMongodLog = dir.concat("mongodb\\mongod.log");

fs.writeFileSync("./mongodb/mongod.cfg", yaml.safeDump({
    storage: {
        dbPath: pathMongodDataDb,
        journal: {
            enabled: true
        }
    },
    systemLog: {
        path: pathMongodLog,
        destination: "file",
        logAppend: true
    },
    net: {
        port: 27017,
        bindIp: "127.0.0.1"
    },
    processManagement: {
        windowsService: {
            serviceName: "MongoDBPortalForStudents",
            displayName: "MongoDBPortalForStudents"
        }
    }
}));


// creating mongod service
const pathMongoCfg = dir.concat("mongodb\\mongod.cfg");
console.log("mongod cfg:", pathMongoCfg);

const { execSync }= require('child_process');
const creatingChild = execSync(`powershell -command \"start-process  \'C:\\Program Files\\MongoDB\\Server\\4.0\\bin\\mongod.exe\' \'-f ${pathMongoCfg} --install\' -verb runAs\"`, (error, stdout, stderr) => {
    if (error) {
        console.error('Powershell Creating mongod service stderr', stderr);
        throw error;
    }
    console.log('Creating service stdout', stdout);
});
// удаление службы работает в cmd из любого места: powershell -command "start-process  'C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe' '-f C:\Users\AndreyRi\WebstormProjects\portalForStudents\mongodb\mongod.cfg --remove' -verb runAs"


// starting mongod service
const startingChild = execSync('powershell -command \"start-process \'net\' \'start MongoDBPortalForStudents\' -verb runAs\"', (error, stdout, stderr) => {
    if (error) {
        console.error('Powershell Starting mongod service stderr', stderr);
        throw error;
    }
    console.log('Starting service stdout', stdout);
});