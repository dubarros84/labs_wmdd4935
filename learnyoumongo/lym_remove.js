
var url = 'mongodb://localhost:27017/learnyoumongo'
console.log(process.argv[2]);
console.log(process.argv[3]);
require('mongodb').MongoClient.connect(url, function(err, db) {
  if (err) throw err
  db.collection(process.argv[]).remove({
    name: process.argv[2]
  }, function(err) {
    if (err) throw err
    db.close()
  })
})