const express = require('express')
const app=express()
const port=process.env.PORT || 3000
const cors = require('cors')

//middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("HELLO WORLD")
})

// UypOCVeX0As7Gx21
//mongodb config
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Project:UypOCVeX0As7Gx21@cluster0.b1sqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //crt database
    const bookCollection = client.db("BookInventory").collection("books");
    //insert a book
    app.post("/upload-book",async (req,res)=>{
        const data = req.body;
        const result = await bookCollection.insertOne(data);
        res.send(result);
    })

    //get books from db
    // app.get("/allbooks",async (req,res)=>{
    //     const books = bookCollection.find();
    //     const result = await books.toArray();
    //     res.send(result);

    // })

    //upload
    app.patch("/book/:id",async(req,res)=>{
        const id=req.params.id;
        // console.log(id);
        const updatebookdata=req.body;
        const filter= {_id: new ObjectId(id)};
        const option = { upsert : true};

        const updatedoc={
            $set:{
                ...updatebookdata
            }
        }
        //update
        const result=await bookCollection.updateOne(filter,updatedoc,option);
        res.send(result);
    })


    //delete book
    app.delete("/book/:id",async(req,res)=>{
      const id=req.params.id;
      const filter= {_id: new ObjectId(id)};
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    })

    //find by category
    app.get("/allbooks", async (req, res) => {
      try {
        let query = {};
        if (req.query.category) {
          query = { category: req.query.category };
        }
        const result = await bookCollection.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).send("Internal Server Error");
      }
    });


    app.get("/book/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await bookCollection.findOne(filter);
      res.send(result);
    })





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})