const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydatabase";

MongoClient.connect(url, function(err, db){
  if (err) throw err;
  var dbo = db.db('mydb');
  var myData = { name: "Steven Arroyave", Company: "University of Plymouth"};
  dbo.collection("customers").insertOne(myData, function(err, res){
    if (err) throw err;
    console.log("1 Document Inserted");
    db.close();
  })
});







// Create Entry/Document
// MongoClient.connect(url, function(err, db){
//   if (err) throw err;
//   var dbo = db.db('mydb');
//   var myData = { name: "Steven Arroyave", Company: "University of Plymouth"};
//   dbo.collection("customers").insertOne(myData, function(err, res){
//     if (err) throw err;
//     console.log("1 Document Inserted");
//     db.close();
//   })
// });




// Database Connection
// MongoClient.connect(url, function(err, db){
//   if (err) throw err;
//   console.log("Database Connection");
//   db.close();
// });
