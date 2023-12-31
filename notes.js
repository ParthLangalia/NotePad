const chalk = require('chalk')
const { load } = require('cheerio');
const fs = require('fs')

//const getNotes = () => "These are your notes...";


const addNote = (title,body) => {
    const notes = loadNotes()

    const duplicatenote = notes.find((note) => note.title === title)

    if (!duplicatenote){
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title already exists!'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep)
    }else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your Notes: '));

    /*const databuffer = fs.readFileSync('notes.json');
    const dataJSON = databuffer.toString();
    const dataArray = JSON.parse(dataJSON);*/

    //console.log(dataArray);

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.white.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON); 
}

const loadNotes =  () => {
    try {
        const databuffer = fs.readFileSync('notes.json');
        const dataJSON = databuffer.toString();
        return JSON.parse(dataJSON);
    }catch (e) {
        return [];
    }
    
}
module.exports = {
    //getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote 
}