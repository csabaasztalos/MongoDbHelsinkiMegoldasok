const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://asztaloscsaba70:1234asd1234@t13elso.octc2vw.mongodb.net/";


async function KollekcioLetrehozasa() {
    try{
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        await db.createCollection("Helsinki");
        console.log("A kollekcio letrehozva");
        client.close();
    }
    catch (err) {
        console.error("Hiba tortent a muveletek vegrehajtasa kozben", err);
    }
}

KollekcioLetrehozasa();