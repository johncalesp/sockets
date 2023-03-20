import sys
from connection.manager import ConnectionManager

def main(host,port):
    cm = ConnectionManager(host,port)
    cm.start()

if __name__ == '__main__':
    host, port = sys.argv[1], int(sys.argv[2])
    main(host,port)