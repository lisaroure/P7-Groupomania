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
    console.log(req.body);
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
                    .then(() => res.status(201).json('User created'))
                    .catch(err => res.status(500).json({ err }))
            })
    }
}

exports.login = (req, res) => {
    if (req.body.email === Admin.email && req.body.password === Admin.password) {
        AdminMdl.findOne({ email: req.body.email })
            .then(admin => {
                if (!admin) {
                    return res.status(401).json('Login ou mot de passe incorrect');
                }
                bcrypt.compare(req.body.password, admin.password)
                    .then(valid => {
                        if (!valid) {
                            return res.status(401).json('Login ou mot de passe incorrect');
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
            .catch(err => res.status(500).json(console.log('Erreur serveur'), { err }))
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
    User.findAll()
        .then(users => res.json({ data: users }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
}

exports.getUser = async (req, res) => {
    let userId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!userId) {
        return res.json(400).json({ message: 'Missing Parameter' })
    }

    try {
        // Récupération de l'utilisateur et vérification
        let user = await User.findOne({ where: { id: userId }, attributes: ['id', 'pseudo', 'email'] })
        if (user === null) {
            return res.status(404).json({ message: 'This user does not exist !' })
        }

        return res.json({ data: user })
    } catch (err) {
        return res.status(500).json({ message: 'Database Error', error: err })
    }
}

exports.getAdmin = async (req, res) => {
    let adminId = parseInt(req.params.id)

    // Vérification si le champ id est présent est cohérent
    if (!adminId) {
        return res.json(400).json({ message: 'Missing Parameter' })
    }

    try {
        // Récupération de l'utilisateur et vérification
        let admin = await AdminMdl.findOne({ where: { id: adminId }, attributes: ['id', 'pseudo', 'email'] })
        if (admin === null) {
            return res.status(404).json({ message: 'This user does not exist !' })
        }

        return res.json({ data: admin })
    } catch (err) {
        return res.status(500).json({ message: 'Database Error', error: err })
    }
}