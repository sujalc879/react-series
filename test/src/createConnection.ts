function createConnection(room:string, serverUrl:string) {
   return {
    connect() {
        console.log(`Connection to the ${room} Room at ${serverUrl}...`);
        
    },
    disconnect() {
        console.log(`Disconnecting to the ${room} Room at ${serverUrl}...`);
    }
}
}

export default createConnection
