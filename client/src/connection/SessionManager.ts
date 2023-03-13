import {Socket} from 'net';

export interface SessionOptions {
    addr: string,
    port: number
}

export class SessionManager {
    connection: Socket;
    addr: string;
    port: number;

    constructor(options:SessionOptions){
        this.connection = new Socket();
        this.connection.on('data', this.on_data.bind(this));
        this.connection.on('close', this.on_close.bind(this));
        this.addr = options.addr;
        this.port = options.port;
    }

    send_message(){
        console.log("connected");
        this.connection.write('Hello, server! Love, Client.');
    }

    connect(){
        console.log("connecting to server");
        this.connection.connect(
            this.port, 
            this.addr,
            this.send_message.bind(this)
        )
        
    }

    on_data(message: Uint8Array){
        console.log("received data. length ", message.byteLength);
        let resp:Buffer = Buffer.from(message);
        console.log(resp.toString());
        this.connection.destroy(); // kill client after server's response
    }

    on_close(){
        console.log("connection closed");
    }

}