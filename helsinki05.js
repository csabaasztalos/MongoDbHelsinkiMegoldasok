const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://asztaloscsaba70:1234asd1234@t13elso.octc2vw.mongodb.net/";

async function LegnagyobbCsapatMeret() {
    try{
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");

        const rendezesiMinta = {csapatMeret: -1}
        const eredmeny = await collection.find({}).sort(rendezesiMinta).limit(1).toArray();
        
        console.log("Legnagyobb csapatMeretu versenyszam adatai: ", eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba tortent a muveletek vegrehajtasa kozben", err);
    }
}

LegnagyobbCsapatMeret();