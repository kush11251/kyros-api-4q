const express = require('express');
const app = express();
const port = 3000;
const userController = require('./controllers/user.js');
const keyController = require('./controllers/key.js');
app.use(express.json());
app.post('/users', userController.createUser);
app.post('/keys', keyController.generateKey);
app.listen(port, () => console.log(`Server listening on port ${port}`));