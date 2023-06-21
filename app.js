const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//customising yargs version
yargs.version('1.1.0');

//add,remove,read,list
//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, //to parse variables that are required,
            type: 'string' //to parse type of variable
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        //console.log('Title: '+ argv.title);
        //console.log('Body:\n ' + argv.body);
        notes.addNote(argv.title, argv.body);
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'remove the note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string' 
        }
    },
    handler(argv) { 
        //console.log('Removing the note');
        notes.removeNote(argv.title);
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'list the names of the notes',
    handler() {
        notes.listNote();
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'read the note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string' 
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})


yargs.parse()
