/**
 * Created by MikeTran on 11/12/16.
 */
var hl7 = require('simple-hl7');

var server = hl7.Server;

var tcpServer = server.createTcpServer();

tcpServer.on('msg', function(msg){

  console.log(msg.toString());

});

tcpServer.start(8888);
console.log('HL7 server is listening on port ' + 8888);
