const express = require('express');
const path = require('path');
const fs = require('fs');
const nanoid = require('nanoid');

const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/Develop/public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/Develop/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
  return res.json(JSON.parse(fs.readFileSync('./Develop/db/db.json', 'utf-8')));
});

app.post('/api/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'utf-8'));
  notes.push({
    id: nanoid(),
    title: req.body.title,
    text: req.body.text
  });
  fs.writeFileSync('./Develop/db/db.json', JSON.stringify(notes));
  res.json(true);
});

app.delete('/api/notes/:id', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'utf-8'));
  const newNotes = notes.filter(note => note.id !== req.params.id);
  fs.writeFileSync('./Develop/db/db.json', JSON.stringify(newNotes));
  res.json(true);
});

app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});