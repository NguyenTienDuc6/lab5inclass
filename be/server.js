const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 

const Messages = require("./dbMessages");
const Pusher = require("pusher");


//App Config
const app = express();
const port = process.env.PORT || 9000;
const connection_url = 'mongodb+srv://test:sPoHBSD0nXYLx5nM@test.z6kobm1.mongodb.net/lab'

const pusher = new Pusher({
    appId: "1521625",
    key: "5f980d9929c2dc361666",
    secret: "bf1e1604215e07cf7623",
    cluster: "ap1",
    useTLS: true
  });

//Middleware
app.use(express.json());
app.use(cors());

//DB Config
mongoose.connect(connection_url)

//API Endpoint
const db = mongoose.connection
db.once("open", ()=>{
    console.log("DB Connected")
    const msgCollection = db.collection("messagingmessages")
    const changeStream = msgCollection.watch()
    changeStream.on('change', change =>{
        console.log(change)

        if(change.operationType === "insert"){
            const messsageDetails = change.fullDocument
            pusher.trigger("messages", "inserted",{
                name: messsageDetails.name,
                message: messsageDetails.message,
                timestamp: messsageDetails.timestamp,
                received: messsageDetails.received
            })
        }else{
            console.log("Error trigerring Pusher")
        }
    })
})


app.get("/", (req,res) => {
    res.status(200).send("Hello UIT guys")
})

app.post('/messsages/new', (req,res) => {
    const dbMessages = req.body;
    Messages.create(dbMessages, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
} )

app.get('/messsages/sync', (req,res) => {
    Messages.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
} )


//Listener
app.listen(port, ()=>
 console.log(`Listening on localhost: ${port}`))