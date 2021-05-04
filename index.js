//First, imports
const express       = require('express');
const bodyParser    = require('body-parser');

//Import a custom module
const dataSource = require('./modules/dataSource');

//Now, some good coding practices
const PORT          = 3000;
const GET           = 'GET';
const POST          = 'POST';
const ENDPOINT_ROOT = "";

//Create the server
const app = express();

//Add configurations (There's a loooooot here)
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    next();
});
app.use(express.json());
app.use(bodyParser());

// ****************** Routes

//POST example
app.post(ENDPOINT_ROOT, (req, res) => {
    const requestBody = req.body;

    res.send(200);
    console.log(`The request name is ${requestBody.name}`);
});

//GET example
app.get(ENDPOINT_ROOT, (req, res) => {
    res.json(dataSource.getData());
});

//Extended GET example
app.get(`${ENDPOINT_ROOT}/:index`, (req, res) => {
    const data = getObj();

    if (req.params.index > data.length - 1) {
        res.status(404).end("Bad index provided");
    }

    const reqObj = data[req.params.index];
    res.json(reqObj);
});

//Start the server
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});

/**
 * Gets data from a super-fancy data source.
 * 
 * @returns {Object} 
 */
function getObj() {
    return dataSource.getData();
}