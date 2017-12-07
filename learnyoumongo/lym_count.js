require('mongodb').MongoClient.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) throw err
  db.collection('users').count({
    age: {
      $gt: +process.argv[2]
    }
  }, 

  function(err, count) {
    if (err) throw err
    console.log("--------->>")
    console.log(count)
     console.log("-------->>")
    db.close()
  })
})