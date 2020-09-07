const NotesService = {
	getAllNotes(db) {
		return db.from('note').select('*');
	},

	getNoteByID(db, id) {
		return db.from('note').select('*').where({ id }).first();
	},

	insertNewNote(db, newNote) {
		return db.from('note').insert(newNote, ['*']);
	},

	updateNote(db, id, noteUpdate) {
		return db.from('note').where({ id }).update(noteUpdate);
	},

	deleteNote(db, id) {
		return db.from('note').where({ id }).del();
	},
};

module.exports = NotesService;
