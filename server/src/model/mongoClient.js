const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

let db;

const connectDB = async () => {
    if (!db) {
        await client.connect();
        console.log('DB Connected');
        db = client.db('Auth');
    }
};

const checkEmail = async (email) => {
    try {
        await connectDB();
        const collection = db.collection('userauths');

        const user = await collection.findOne({ email }, { projection: { email: 1 } })

        if (user) return true
        return false
    } catch (err) {
        throw err;
    }
}

const loginUser = async ({ email, pin, password }) => {
    try {
        await connectDB();

        const collection = db.collection('userauths');
        let query = { email };
        if (pin) query.pin = pin;
        if (password) query.password = password;

        const user = await collection.findOne(query, password ? { projection: { name: 1 } } : {});

        if ((user && !pin && !password) || (user && pin && !password)) return { statusCode: 200 };
        if ((!user && !pin && !password) || (!user && pin && !password) || (!user && pin && password)) return { statusCode: 401 };

        return { statusCode: 200, message: user.name };

    } catch (err) {
        throw err;
    }
};

const signupUser = async (user) => {
    try {
        await connectDB();

        const collection = db.collection('userauths');
        const existingUser = await collection.findOne({ email: user.email });

        if (existingUser) {
            return { statusCode: 409, message: 'User already exists' };
        }

        await collection.insertOne(user)
        return { statusCode: 201, message: 'Created' }

    } catch (err) {
        console.log('Error Occurred: ', err);
        throw err;
    }
};

module.exports = { loginUser, signupUser, checkEmail };