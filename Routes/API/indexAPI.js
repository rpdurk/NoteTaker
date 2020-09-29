const router = require('express').Router();
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;


//  HTML Routes
//   * GET `/notes` - Should return the `notes.html` file.
app.get("/../../Source/notes.html", function(request, response) {
    return sendFile(path.join(__dirname, "notes.html"));
});

//  HTML Routes
//   * GET `*` - Should return the `index.html` file
app.get("/Source/notes.html", function(request, response) {
    return response.json(characters);
  });

// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.



module.exports = router;