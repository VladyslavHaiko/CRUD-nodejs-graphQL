const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());


app.use(graphqlHTTP({
    schema: schema,
    graphiql: true
}));

mongoose.connect('mongodb://localhost:27017/Grapgl', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (args) => {
    console.log(args)
});



app.listen(3000, (err) => {
    err ? console.log(err) : console.log(3000);
})
