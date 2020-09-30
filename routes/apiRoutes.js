const router = require('express').Router();
let data = require('../source/db/db.json');

router.get('/api/notes', function(req, res) {
    res.send(data);
});

// post = consider using the length of the array as the id for each notes
router.delete('/api/notes/:id', function(req, res) {
    console.log(req.params.id);
    console.log(data);
    // filter gives us an array that is smaller than the original array
    // expecting to see data without the id on that route
    var newData = data.filter((each) =>  each.id != req.params.id);
    // looking for id of 1
    console.log(newData);
    data = newData;
});

module.exports = router;