require("dotenv").config({ path: "./config/.env" });
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const AdminMdl = require("../models/Admin");

//Créer un compte
exports.signup = (req, res) => {
  console.log(req.body);
  if (
    req.body.pseudo === AdminMdl.pseudo &&
    req.body.email === AdminMdl.email &&
    req.body.password === AdminMdl.password
  ) {
    bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        const admin = new AdminMdl({
          pseudo: req.body.pseudo,
          email: req.body.email,
          password: hash,
        });
        admin
          .save()
          .then(() => res.status(201).json({ message: "Admin created" }))
          .catch((err) => res.status(400).json({ err }));
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ err });
      });
  } else {
    bcrypt
      .hash(req.body.password, 10)

      .then((hash) => {
        const user = new User({
          pseudo: req.body.pseudo,
          email: req.body.email,
          password: hash,
        });
        user
          .save()
          .then(() => res.status(201).json("User created"))
          .catch((err) => res.status(500).json({ err }));
      });
  }
};

//Connexion
exports.login = (req, res) => {
  if (
    req.body.email === AdminMdl.email &&
    req.body.password === AdminMdl.password
  ) {
    AdminMdl.findOne({ email: req.body.email })
      .then((admin) => {
        if (!admin) {
          return res.status(401).json("Login ou mot de passe incorrect");
        }
        bcrypt
          .compare(req.body.password, admin.password)
          .then((valid) => {
            if (!valid) {
              return res.status(401).json("Login ou mot de passe incorrect");
            } else {
              res.status(200).json({
                adminId: admin._id,
                token: jwt.sign(
                  { adminId: admin._id },
                  process.env.RANDOM_TOKEN_SECRET,
                  { expiresIn: "24h" }
                ),
              });
            }
          })
          .catch((err) => res.status(500).json({ err }));
      })
      .catch((err) =>
        res.status(500).json(console.log("Erreur serveur"), { err })
      );
  } else {
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          return res
            .status(401)
            .json({ error: "Identifiant ou mot de passe incorrect" });
        }
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              return res
                .status(401)
                .json({ error: "Identifiant ou mot de passe incorrect" });
            } else {
              res.status(200).json({
                userId: user._id,
                token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
                  expiresIn: "24h",
                }),
              });
            }
          })
          .catch((err) => res.status(500).json({ err }));
      })
      .catch((err) => res.status(500).json({ err }));
  }
};

//Afficher tous les users
exports.getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.json({ data: users }))
    .catch((err) =>
      res.status(500).json({ message: "Database Error", error: err })
    );
};

//Afficher un seul user
exports.getUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ error }));
};

// Modifier un user (partie admin)
exports.modifyUser = async (req, res) => {
  let userId = parseInt(req.params.id);

  // Vérification si le champ id est présent et cohérent
  if (!userId) {
    return res.status(400).json({ message: "Missing parameter" });
  }

  try {
    // Recherche de l'utilisateur et vérification
    let user = await User.findOne({ where: { _id: userId }, raw: true });
    if (user === null) {
      return res.status(404).json({ message: "This user does not exist !" });
    }

    // Mise à jour de l'utilisateur
    await User.updateOne(req.body, { where: { _id: userId } });
    return res.json({ message: "User Updated" });
  } catch (err) {
    return res.status(500).json({ message: "Database Error", error: err });
  }
};

// exports.getAdmin = (req, res) => {
//     if (req.params.id === req.auth.adminId) {
//         AdminMdl.findOne({ _id: req.params.id }).select('pseudo')
//             .then((admin) => res.status(200).json(admin))
//             .catch(error => res.status(400).json({ error }));
//     }
// }
