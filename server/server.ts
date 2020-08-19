const express = require('express');
const morgan = require('morgan');
const app = express();
import path = require('path');
const router = require('./routes');
const bodyParser = require('body-parser');
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use('/api', router);

app.get('*', (req: any, res: any) => {
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
	console.log(`Listening ${port}`);
});
