//First, imports
const express       = require('express');
const bodyParser    = require('body-parser');

const { response, query } = require('express');

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
    const body = req.body;

    res.send(200);
    console.log(`The request name is ${body.name}`);
});

//GET example
app.get(ENDPOINT_ROOT, (req, res) => {
    res.json(dataSource);
});

//Extended GET example


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