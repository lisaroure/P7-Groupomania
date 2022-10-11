//Node fs : permet la création et modification des fichiers
const fs = require('fs');
const Post = require('../models/Post');
const User = require('../models/User');

// Créer une post
exports.createPost = (req, res, next) => {
    const post = new Post({
        posterId: req.auth.userId,
        post: req.body.post,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likers: [],
    });
    post.save()
        .then(() => { res.status(201).json({ message: 'post save' }) })
        .catch(error => { res.status(400).json({ error, message: 'Erreur creation post' }) })
};
// Modifier un post
exports.modifyPost = (req, res) => {
    if (req.file) {
        Post.findOne({ _id: req.params.id })
            .then(post => {
                if (req.auth.adminId || post.posterId === req.auth.userId) {
                    // Supprime l'ancienne image
                    const filename = post.imageUrl.split('/images/')[1];
                    fs.unlink(`images/${filename}`, () => {
                        const postObject = {
                            post: req.body.post,
                            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
                        }
                        Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
                            .then(() => res.status(200).json({ message: 'Post modifiée!' }))
                            .catch(error => res.status(400).json({ error }));
                    })
                } else {
                    res.status(401).json({ message: 'Not authorized' });
                }

            })
            .catch(error => res.status(500).json({ error }));
    } else {
        const postObject = { ...req.body };
        Post.findOne({ _id: req.params.id })
            .then(post => {
                if (req.auth.adminId || post.posterId === req.auth.userId) {
                    Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
                        .then(() => res.status(200).json({ message: 'Post modifiée!' }))
                        .catch(error => res.status(401).json({ error }));
                } else {
                    res.status(401).json({ message: 'Not authorized' });
                }
            })
            .catch((error) => {
                res.status(400).json({ error });
            });
    }
};

//Suppression d'un post
exports.deletePost = (req, res) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {
            if (req.auth.adminId || post.posterId === req.auth.userId) {
                // Supprime l'image
                const filename = post.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Post.deleteOne({ _id: req.params.id })
                        .then(() => { res.status(200).json({ message: 'Post supprimée !' }) })
                        .catch(error => res.status(401).json({ error }));
                });
            } else {
                res.status(401).json({ message: 'Non autoriser' });
            }
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

// Posts existants
exports.getAllPosts = (req, res, next) => {
    Post.find()
        .then((posts) => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error: error }))
}

//Afficher un seul post
exports.getPost = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then((post) => res.status(200).json(post))
        .catch(error => res.status(400).json({ error }));
};

// Like utilisateur
exports.likePost = (req, res) => {
    try {
        Post.findByIdAndUpdate(
            req.params.id,
            {
                $addToSet: { likers: req.body.id }
            },
            { new: true },
            (err, docs) => {
                if (err) res.status(400).send(err);
                else return res.send(docs);
            }
        )
        User.findByIdAndUpdate(
            req.body.id,
            {
                $addToSet: { likes: req.params.id }
            },
            { new: true },
            (err) => {
                if (err) return res.status(400).send(err);
            }
        )
    } catch (err) {
        return res.status(402).send(err);
    }
};
// Dislike utilisateur
exports.unlikePost = (req, res) => {
    try {
        Post.findByIdAndUpdate(
            req.params.id,
            {
                $pull: { likers: req.body.id }
            },
            { new: true },
            (err, docs) => {
                if (err) res.status(400).send(err);
                else return res.send(docs);
            }
        )
        User.findByIdAndUpdate(
            req.body.id,
            {
                $pull: { likes: req.params.id }
            },
            { new: true },
            (err) => {
                if (err) return res.status(400).send(err);
            }
        )
    } catch (err) {
        return res.status(400).send(err);
    }
};