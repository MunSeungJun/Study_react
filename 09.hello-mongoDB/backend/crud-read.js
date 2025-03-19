import { MongoClient } from "mongodb";

const uri = "mongodb+srv://demouser:demo1234@cluster0.jzdiw.mongodb.net/";
const client = new MongoClient(uri);

export async function readUsers() {
  try {
    await client.connect();
    const db = client.db("sample_mflix");
    const coll = db.collection("movies");
    const cursor = coll.find();
    const users = await cursor.toArray();
    return users;
  } catch (e) {
    console.log(e);
  }
}
