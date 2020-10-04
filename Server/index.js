const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.status(200).send({response:'success'});
});

app.listen(4000, () => console.log("Server listening on port 4000"));