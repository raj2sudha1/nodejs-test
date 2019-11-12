// ------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// ------------------------------------------------------------

const express = require('express');
const bodyParser = require('body-parser');
require('isomorphic-fetch');

const app = express();
app.use(bodyParser.json());

const daprPort = process.env.DAPR_HTTP_PORT || 3500;
const stateUrl = `http://localhost:${daprPort}/v1.0/state`;
const port = 3000;

app.get('/',(_req,res) => {
	console.log('get request at root');
	res.send('hello-world root');
});
app.get('/order', (_req, res) => {
	console.log('get request at order');
	res.send('hello-world');
});

app.listen(port, () => console.log(`Node App listening on port ${port}!`));
