var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('users')
  collection.update({
    name: 'humans'
  }, 
  {
    $set: {
      age: 100,
      veg:"no"
    }
  }, 

  function(err,datas) {
    if (err) throw err
    console.log("data------->>>");
    console.log(datas);
    console.log("data------->>>");

    db.close()
  })
})