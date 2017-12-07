var mongo = require('mongodb').MongoClient

var firstName = process.argv[2]
var lastName = process.argv[3]
var doc = {
firstName: firstName
lastName: lastName
}

console.log("Your query->> "+firstName+" "+lastName);
var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('makeMehapi')
  collection.insert(doc, function(err, data) {
    if (err) throw err
    console.log("docs------------->>>>");
    console.log(JSON.stringify(doc))
    console.log("docs------------->>>>");
    db.close()
    
  })
})