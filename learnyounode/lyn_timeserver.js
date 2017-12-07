var net = require('net');

var server = net.createServer(function (socket) { 
socket.end(newDate()+'\n');
});
server.listen(Number(process.argv[2]));

function zeroUpdate(i) {
  return (i < 10 ? '0' : '') + i;
}
function newDate(){
  var date = new Date();
  return date.getFullYear() + '-' +
    zeroUpdate(date.getMonth() + 1) + '-' +
    zeroUpdate(date.getDate()) + ' ' +
    zeroUpdate(date.getHours()) + ':' +
    zeroUpdate(date.getMinutes());
}


    
