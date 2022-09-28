require('dotenv').config({ path: './config/.env' });
require('./config/db');
const express = require('express');
const path = require('path');
//const cors = require('cors');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

const app = express();

// const corsOptions = {
//     origin: '*',
//     credentials: true,
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId', 'Content-Length'],
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false
// }

// app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Permet d'accéder au corps de la requête
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

module.exports = app;

// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const helmet = require('helmet');
// const path = require('path');

// require('dotenv').config();

// const app = express();
// const db = require('./models');

// const authRoutes = require('./routes/auth');
// const postRoutes = require('./routes/post');
// const commentRoutes = require('./routes/comment');
// const userRoutes = require('./routes/user');

// // Sécurité du http
// app.use(helmet());

// // CORS
// // app.use((req, res, next) => {
// //     res.setHeader('Access-Control-Allow-Origin', '*');
// //     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
// //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
// //     next();
// // });
// app.use(cors({origin: "http://localhost:3006", credentials: true}));

// // Utilisation de sequelize
// db.sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection to the database has been established successfully');
//     })
//     .catch(error => {
//         console.log('Unable to connect to the database : ', error);
//     })

// // Pour parser
// app.use(bodyParser.json());

// app.use('/images', express.static(path.join(__dirname, 'images')));

// app.use('/api/auth', authRoutes);
// app.use('/api/post', postRoutes);
// app.use('/api/comment', commentRoutes);
// app.use('/api/user', userRoutes);

// module.exports = app;