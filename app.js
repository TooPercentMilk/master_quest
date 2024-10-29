const express = require('express');
const app = express();
const path = require('path');
const { readFile } = require('fs').promises;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    try {
        const html = await readFile(path.join(__dirname, 'public', 'index.html'), 'utf8');
        res.send(html);
    } catch (err) {
        res.status(500).send('There was an error with your request.');
    }
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));