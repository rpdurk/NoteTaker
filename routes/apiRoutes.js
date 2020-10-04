const router = require('express').Router();
const fs = require('fs');
const util = require('util');
// const writeFileAsync = require('fs.writeFile');
// const readFileAsync = require('fs.readFile');
// let data = require('../source/db/db.json');

// * The following API routes should be created:
//   * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
router.get('/api/notes', function(req, res) {
    res.send(JSON.parse(fs.readFileSync("./source/db/db.json")));
});

//   * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
// use the length of the array as the id for each notes
router.post('/api/notes', function(req, res) {
  // data from noteLIst should be put into an array
  noteList = JSON.parse(fs.readFileSync("db/db.json"));;
  newNote = req.body;
  // utilize the length of the array to create an id
  newNote.id = notesList.length;
  noteList.push(newNote);
  // rewrite the data into a string
  fs.writeFileSync("./source/db/db.json", JSON.stringify(noteList));
  // write file into the file location stored above
  res.json.parse(noteList);
});

//   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. Give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
router.delete('/api/notes/:id', function(req, res) {
    console.log(req.params.id);
    // console.log(data);
    // filter gives us an array that is smaller than the original array
    // expecting to see data without the id on that route
    const newData = data.filter((each) =>  each.id != req.params.id);
    // looking for id of 1
    // console.log(newData);
    data = newData;
    fs.writeFileSync()
});

module.exports = router;