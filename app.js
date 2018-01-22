const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
	describe: 'Title of note.',
	demand: true,
	alias: 't'
}

const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
}

const argv = yargs
.command('add', 'Add a new note',{
	title: titleOptions,
	body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note.', {
	title: titleOptions
})
.command('remove', 'Remove a note', {
	title: titleOptions
})
.help()
.argv;

var command = argv._[0];


if(command == 'add'){
	var note = notes.addNote(argv.title, argv.body);
	if(note){
		console.log('Note Created.');
		notes.printNotes(note);
	}else{
		console.log('That note title already exsists.');
	}
} else if(command == 'list'){
	var list = notes.getAll();
	console.log(`Printing ${list.length} notes`);
	list.forEach((note)=> notes.printNotes(note));

}else if(command == 'remove'){
	var removed = notes.removeNote(argv.title);
	if(removed){
		console.log(argv.title + ' was removed');
	}else{
		console.log(argv.title + ' does not exsist.');
	}
} else if(command == 'read'){
	var read = notes.getNote(argv.title);
	if (read){
		console.log('Note found.');
		notes.printNotes(read);
	}else{
		console.log('Note not found.');
	}

}else{
	console.log('Command not recognized');
}
