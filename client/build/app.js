"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SessionManager_1 = require("./connection/SessionManager");
function main() {
    let options = {
        addr: "localhost",
        port: 6020
    };
    let manager = new SessionManager_1.SessionManager(options);
    manager.connect();
}
main();
