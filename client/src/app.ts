import { SessionOptions, SessionManager } from './connection/SessionManager';

function main() {
    let options: SessionOptions = {
        addr: "localhost",
        port: 6020
    }
    let manager: SessionManager = new SessionManager(options);

    manager.connect();
    manager.send_message();

}

main()
setTimeout(() => {
    console.log("waiting time")
    main()
}, 2000)