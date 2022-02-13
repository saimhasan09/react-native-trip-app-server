const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('working')
})
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.x8ahu.mongodb.net/carHut?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri)

client.connect(err => {
  const serviceCollection = client.db("carHut").collection("services");
  // const adminCollection = client.db("carHut").collection("admin");
  // const orderCollection = client.db("carHut").collection("orders");
  // const reviewCollection = client.db("carHut").collection("reviews");












  // //update status
  // app.patch('/update/status/:id', (req, res) => {
  //   console.log(req.body.status)
  //   orderCollection.updateOne({ _id: ObjectId(req.params.id) },
  //     {
  //       $set: { status: req.body.status }
  //     })
  //     .then(result => {
  //       res.send(result.modifiedCount > 0)
  //     })

  // })


  // //manage service (delete service)
  // app.delete('/delete/:id', (req, res) => {
  //   const id = ObjectId(req.params.id);
  //   serviceCollection.findOneAndDelete({ _id: id })
  //     .then(documents => res.send(!!documents.value));

  // })

  //client.close();
});


app.listen(port, () => {
  console.log('Listening');
})