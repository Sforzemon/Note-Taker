# Note-Taker - https://agile-shelf-89687.herokuapp.com/

This application allows you to create notes that will persist because they are hosted on Heroku.

Each note can be given a title, and the body can be filled out.  All of which is saved to a database.

This application reads that database and poulates the notes regardless of where you are accessing from.
I was able to test from 3 different browsers on my computer and one on my phone.  The same notes and functionality persisted among all four locations.

A new note can be created by clicking the pen Icon on the right, if you happen to have another Note selected.

Clicking on the title of a note on the left will allow you to make edits to that note.

while a note is in focus (has been clicked on) you may press the trashcan of that respective note and it will be deleted.  Each note has its own unique ID that the delete function is looking for, which ensures the random notes will not be deleted along with the one you have chosen.