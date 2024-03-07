const express = require('express');
const { config } = require('dotenv');

config();

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/api/contact', (req, res) => {
    res.status(200).json({ msg: 'this is contact data' });
});

app.post('/api/login', (req, res) => {
    res.status(200).json({ msg: 'this is login api' });
});

app.put('/api/update/:id', (req, res) => {
    res.status(200).json({ msg: `data updated of user ${req.params?.id}` });
});

app.delete('/api/delete/:id', (req, res) => {
    res.status(200).json({ msg: `data deleted of user ${req.params?.id}` });
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})