const FoldersService = {
	getAllFolders(db) {
		return db.from('folder').select('*');
	},

	getFolderByID(db, id) {
		return db.from('folder').select('*').where({ id }).first();
	},

	insertNewFolder(db, folder_name) {
		return db.from('folder').insert({ folder_name }, ['*']);
	},

	updateFolder(db, id, folder_name) {
		return db.from('folder').where({ id }).update({ folder_name });
	},

	deleteFolder(db, id) {
		return db.from('folder').where({ id }).del();
	},
};

module.exports = FoldersService;
