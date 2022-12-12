const express = require('express');
const router = express.Router();
const Post = require('./Post');

router.get('/', async (req, res) => {
    // console.log("res---", res.body)
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        // console.log("eruuu-", err)
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    const post = new Post({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        company: req.body.company,
        address1: req.body.address1,
        address2: req.body.address2,
        state: req.body.state,
        country: req.body.country,
        zip: req.body.zip,
        phone: req.body.phone
});
    console.log(post);
    try {
        const savedPost = await post.save();
        // console.log('save',body);
        res.json(savedPost);
    }
    catch (err) {
        console.log('er-post--', err)

        res.json({ message: err });
    }
});

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post);
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postId })
        window.onload();
        res.json(removePost);
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.put('/:postId', async (req, res) => {
    console.log("put----")
    try {
        const updatedPost = await Post.findByIdAndUpdate({ _id: req.params.postId },
            {
                $set: { title: req.body.title }
            });
        res.json(updatedPost);
    }
    catch (err) {
        // console.log('er---', err)
        res.json({ message: err });
    }
});

module.exports = router;