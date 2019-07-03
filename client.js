const net = require('net');


const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.218',
    port: 50541
  });
 
  // interpret incoming data as text
  
  conn.setEncoding('utf8'); 
  
  conn.on('data', function (stuff) {
    console.log('stuff:', stuff)
  })
  console.log('Connecting ...');
  return conn;  

}
module.exports = {
  connect
};