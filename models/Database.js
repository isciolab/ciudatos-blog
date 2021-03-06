const keystone = require('keystone');

/**
 * Database Model
 * ==================
 */

const Database = new keystone.List('Database', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Database.add({
	name: { type: String, required: true },
	label: { type: String, required: false },
	description: { type: String, required: false },
});

Database.defaultColumns = 'name';
Database.relationship({ ref: 'Dataset', path: 'database' });
Database.register();
