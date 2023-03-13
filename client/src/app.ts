import {SessionOptions, SessionManager} from './connection/SessionManager';

function main(){
    let options:SessionOptions = {
        addr:"localhost",
        port:6020
    }
    let manager:SessionManager = new SessionManager(options);
    manager.connect();
}

main()