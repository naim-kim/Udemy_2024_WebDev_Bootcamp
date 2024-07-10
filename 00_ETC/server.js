const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let timetable = [];

app.get('/api/timetable', (req, res) => {
    res.json(timetable);
});

app.post('/api/timetable', (req, res) => {
    timetable = req.body;
    res.json({ message: 'Timetable updated successfully!' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
