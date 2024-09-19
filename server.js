const express = require('express');
const path = require('path'); 

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname, 'client', 'dist')));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));