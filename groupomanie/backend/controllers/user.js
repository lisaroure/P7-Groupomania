const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AdminMdl = require('../models/Admin');

const Admin = {
    pseudo: "Admin",
    email: "test@admin.fr",
    password: "mdpadmin"
}

exports.signup = (req, res) => {
    console.log('pas de ananas ici', req.body);
    if (req.body.pseudo === Admin.pseudo && req.body.email === Admin.email && req.body.password === Admin.password) {
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const admin = new AdminMdl({
                    pseudo: req.body.pseudo,
                    email: req.body.email,
                    password: hash
                });
                admin.save()
                    .then(() => res.status(201).json({ message: 'Admin created' }))
                    .catch(err => res.status(400).json({ err }));
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({ err })
            });
    } else {
        bcrypt.hash(req.body.password, 10)

            .then(hash => {
                const user = new User({
                    pseudo: req.body.pseudo,
                    email: req.body.email,
                    password: hash
                });
                user.save()
                    .then(() => res.status(201).json({ message: 'User created' }))
                    .catch(err => res.status(500).json({ err }))
            })
    }
}

exports.login = (req, res) => {
    console.log("login", req.body);
    if (req.body.email === Admin.email && req.body.password === Admin.password) {
        AdminMdl.findOne({ email: req.body.email })
            .then(admin => {
                if (!admin) {
                    return res.status(401).json({ message: 'Login ou mot de passe incorrect' });
                }
                bcrypt.compare(req.body.password, admin.password)
                    .then(valid => {
                        if (!valid) {
                            return res.status(401).json({ message: 'Login ou mot de passe incorrect' });
                        } else {
                            res.status(200).json({
                                adminId: admin._id,
                                token: jwt.sign(
                                    { adminId: admin._id },
                                    process.env.RANDOM_TOKEN_SECRET,
                                    { expiresIn: '24h' })
                            })
                        }
                    })
                    .catch(err => res.status(500).json({ err }))
            })
            .catch(err => res.status(500).json({ err }))
    } else {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    return res.status(401).json({ error: 'Identifiant ou mot de passe incorrect' });
                }
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if (!valid) {
                            return res.status(401).json({ error: 'Identifiant ou mot de passe incorrect' });
                        } else {
                            res.status(200).json({
                                userId: user._id,
                                token: jwt.sign(
                                    { userId: user._id },
                                    'RANDOM_TOKEN_SECRET',
                                    { expiresIn: '24h' })
                            });
                        }
                    })
                    .catch(err => res.status(500).json({ err }));
            })
            .catch(err => res.status(500).json({ err }));
    }
};

exports.getAllUsers = (req, res) => {
    User.findAll().select("-password")
        .then((user) => res.status(200).json(user))
        .catch(err => res.status(400).json({ err }))
}

exports.getUser = (req, res) => {
    User.findOne({ _id: req.params.id }).select('pseudo')
        .then((user) => res.status(200).json(user))
        .catch(err => res.status(400).json({ err }))
}

exports.getAdmin = (req, res) => {
    if (req.params.id === req.auth.adminId) {
        AdminMdl.findOne({ _id: req.params.id }).select('pseudo')
            .then((admin) => res.status(200).json(admin))
            .catch(err => res.status(400).json({ err }))
    }
}