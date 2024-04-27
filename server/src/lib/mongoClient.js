const MongoClient = require('mongodb').MongoClient;
const { hashPassword } = require('../../../lib/crypto')
const { MONGODB } = require('../config/config')


const url = MONGODB.URL;
const client = new MongoClient(url);
let db;

const connectDB = async () => {
    if (!db) {
        await client.connect();
        console.log('DB Connected');
        db = client.db(MONGODB.DB);
    }
};

const init = async () => {
    await connectDB();
    return db.collection(MONGODB.COLLECTION);
}

const checkEmail = async (email) => {
    try {
        const collection = await init()

        const user = await collection.findOne({ email }, { projection: { email: 1 } })

        if (user) return true
        return false
    } catch (err) {
        throw err;
    }
}

const checkUser = async ({ email, pin, password }) => {
    try {

        const collection = await init()
        let query = { email };
        if (pin) query.pin = hashPassword(pin);
        if (password) query.password = hashPassword(password);

        const user = await collection.findOne(query, password ? { projection: { name: 1, email: 1 } } : {});

        return user

    } catch (err) {
        throw err;
    }
};

const postUser = async (user) => {
    try {
        const collection = await init()
        const existingUser = await collection.findOne({ email: user.email }, { projection: { email: 1 } });

        if (existingUser) {
            return false
        }

        await collection.insertOne(user)
        return true

    } catch (err) {
        throw err;
    }
};

module.exports = { checkUser, postUser, checkEmail };