// создать script на nodejs:   1) генерация mongod.cfg, а также создание пустого mongod.log
// 2) выполнение команды по запуску mongod.exe с передачей в него только что сгенерированного конфига
// "C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --config "C:\data\mongod.cfg" --install
//
// net start MongoDB - запуск службы


// creating empty mongod.log
const fs = require("fs");
fs.closeSync(fs.openSync("../mongod/mongod.log", 'w'));

// generating mongod.cfg
const yaml = require("js-yaml");
fs.writeFileSync("../mongod/mongod.cfg", yaml.safeDump({
    storage: {
        dbPath: "../mongod/data/db",
        journal: {
            enabled: true
        }
    },
    systemLog: {
        path: "../mongod/mongod.log",
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