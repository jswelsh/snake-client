const net = require('net');
const name = require('./name');
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.218',
    port: 50541
  });
 
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => {
   // console.log('Successfully connected to game server');
   console.log(`Name:${name()}`);
  })
  conn.on('data', function(data){
    console.log(data);
  })
  stdin.on('data', (key) => {
    if (key === '\u0061') {
      //a
      conn.write(`Move: left`);
    }
    if (key === '\u0073') {
      //s
      conn.write(`Move: down`);
    }
    if (key === '\u0064') {
      //d
      conn.write(`Move: right`);
    }
    if (key === '\u0077') {
      //w
      conn.write(`Move: up`);
    }
  });
  return conn;  
}

module.exports = {
  connect
};
