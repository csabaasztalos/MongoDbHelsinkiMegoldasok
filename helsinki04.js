const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://asztaloscsaba70:1234asd1234@t13elso.octc2vw.mongodb.net/";

async function DobogosHelyezesek() {
    try{
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");

        const eredmeny = await collection.find({helyezes: {$lte: 3}}).toArray();
        
        console.log("Dobogos helyezeseink: ", eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba tortent a muveletek vegrehajtasa kozben", err);
    }
}

DobogosHelyezesek();