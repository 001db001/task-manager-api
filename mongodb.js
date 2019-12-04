/* #region  Import */

const {
    MongoClient,
    ObjectID
} = require('mongodb');

/* #endregion */

/* #region  Setting up database */
const connectionURL = 'mongodb://127.0.0.1:27017';
const databseName = 'task-manager';
/* #endregion */


/* #region  Connection */

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databseName);


    // insertOneUser(db);

    // insertManyTasks(db);

    // findOneUser(db);

    // findOneTask(db);
    // findTasks(db);

    // updateUser(db);

    // updateManyTasks(db)

    // updateTask(db);

    // deleteManyUsers(db);

    // deleteOneTask(db);

})
/* #endregion */

/* #region  Querys */

function insertOneUser(db) {

    db.collection('users').insertOne({
        name: 'Dino',
        age: 27
    }, (error, result) => {
        if (error) {
            console.log('Unable to insert user');
        }

        console.log(result.ops);
    });
}

function insertManyTasks(db) {

    db.collection('tasks').insertMany([{
            description: 'Nesto 1',
            completed: true
        },
        {
            description: 'Nesto 2',
            completed: false
        },
        {
            description: 'Nesto 3',
            completed: false
        },

    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks');
        }
        console.log(result.ops);

    })
}

function findOneUser(db) {
    db.collection('users').findOne({
        _id: new ObjectID("5de53c6875f4c31ce41b7efe")
    }, (error, user) => {
        if (error) {
            return console.log('Unable to insert tasks');
        }
        console.log(user);
    })
}

function findOneTask(db) {
    db.collection('tasks').findOne({
        _id: new ObjectID("5de53fc09f81482c7cb3a997")
    }, (error, user) => {
        if (error) {
            return console.log('Unable to insert tasks');
        }
        console.log(user);
    })
}

function findTasks(db) {
    db.collection('tasks').find({
        completed: false
    }).toArray((error, tasks) => {
        console.log(tasks);
    });

    db.collection('tasks').find({
        completed: false
    }).count((error, count) => {
        console.log(count);
    })
}

function updateUser(db) {

    db.collection('users').updateOne({
        _id: new ObjectID("5de5645f51599b218c371800")
    }, {
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result);

    }).catch((error) => {
        console.log('Something went wrong', error);
    })
}

function updateTask(db) {

    db.collection('tasks').updateOne({
        _id: new ObjectID("5de5363e7dd6523740a7b049")
    }, {
        $set: {
            completed: false
        }
    }).then((result) => {
        console.log(result);

    }).catch((error) => {
        console.log('Something went wrong', error);
    })
}

function updateManyTasks(db) {
    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount);

    }).catch((error) => {
        console.log('Something went wrong', error);
    })
}

function deleteManyUsers(db) {
    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result);

    }).catch((error) => {
        console.log('Something went wrong', error);
    })
}

function deleteOneTask(db) {
    db.collection('tasks').deleteOne({
        _id: new ObjectID("5de53fc09f81482c7cb3a997")
    }).then((result) => {
        console.log(result);

    }).catch((error) => {
        console.log('Something went wrong', error);
    })
}
/* #endregion */