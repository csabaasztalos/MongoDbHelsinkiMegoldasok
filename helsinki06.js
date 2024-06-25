const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://asztaloscsaba70:1234asd1234@t13elso.octc2vw.mongodb.net/";

async function EgyeniAranyermesek() {
    try{
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");

        const eredmeny = await collection.find({
            $and: [{
                csapatMeret: 1
            },
            {
                helyezes: 1
            }
        ]
        }, {projection:{_id: 0, sportAg: 1}}).toArray();
        
        console.log("Egyeni aranyermet szereztek a magyaraok ezekben a sportagakban: ", eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba tortent a muveletek vegrehajtasa kozben", err);
    }
}

EgyeniAranyermesek();