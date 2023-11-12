const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = 6969

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('responsessss')
})

app.get('/receiveJSON', (req, res) => {
    res.cookie('ana', 'maria')
    res.json({ message: 'george'});
})

app.post('/sendJSON', (req, res) => {
    console.log(req.body);
    res.cookie('ana', 'maria')
    res.json({ msg: 'gg' });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
