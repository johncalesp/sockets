import socket

HOST = "localhost"  # Standard loopback interface address (localhost)
PORT = 6020  # Port to listen on (non-privileged ports are > 1023)

class ConnectionManager:
    def __init__(self):
        self.host = HOST 
        self.port = PORT 

    def start(self):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.bind((self.host, self.port))
            s.listen()
            conn, addr = s.accept()
            with conn:
                print(f"connected by {addr}")
                while True:
                    data = conn.recv(1024)
                    if not data:
                        break
                    conn.sendall(data)