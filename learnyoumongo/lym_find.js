var mongo = require('mongodb').MongoClient
var names = process.argv[]

var url = 'mongodb://localhost:27017/learnyoumongo'

	console.log("name :"+names);


mongo.connect(url, function(err, db) {
  if (err) throw err
  db.collection('makeMehapi').find({"name":names}).toArray(function(err, docs) {
	    if (err) throw err
	    console.log("docs------------->>>>");
	    console.log(docs);
	    console.log("docs------------->>>>");
	    db.close()
	  })
  
  
})