import { io } from 'socket.io-client';

class SocketSingleton {
    constructor() {
        this.socket = null;
    }

    async initSocket() {
        if (!this.socket) {
            const options = {
                'force new connection': true,
                reconnectionAttempt: 'Infinity',
                timeout: 10000,
                transports: ['websocket'],
            };
            this.socket = io(process.env.REACT_APP_BACKEND_URL, options);
        }
        return this.socket;
    }
}

const socketSingleton = new SocketSingleton();

export const initSocket = async () => {
    return socketSingleton.initSocket();
};
// e.log(process.env.REACT_APP_BACKEND_URL);