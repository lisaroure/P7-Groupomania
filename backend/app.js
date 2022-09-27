const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
require('./config/db');

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

app.use(cors({ origin: "http://localhost:5000", credentials: true }));

app.use(express.json());
app.use(cookieParser());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/post', postRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;