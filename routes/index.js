const router = require('express').Router();
const APIRoutes = require('./API');
const path = require('path');

router.use('./API', APIRoutes);

//using __dirname will help find a directory from the current folder
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', "index.html"));
})
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', "notes.html"));
});


module.exports = router;