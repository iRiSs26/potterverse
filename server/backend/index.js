const connectToMongo=require('./db.js');
connectToMongo();
const express = require('express');
var cors=require('cors');

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json())
// app.use('/api/auth',require('./routes/auth'))
 app.use('/api/developer',require('./routes/developer'))

app.listen(port, () => {
 console.log(`inotebbok backend app listening at http://localhost:${port}`);
});