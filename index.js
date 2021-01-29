const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nimble9:017942@boilerplate.odmzp.mongodb.net/boilerplate?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
    .then(() => console.log('MongoDB Connect!'))
    .catch(err => console.error(err));


app.get('/', (req, res) => res.send('Hello world'));
app.listen(port, () => console.log(`Server Start on port ${port}!`));
