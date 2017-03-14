var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * DatasetTag Model
 * ==================
 */

var DatasetTag = new keystone.List('DatasetTag', {
	autokey: { from: 'name', path: 'key', unique: true },
});

DatasetTag.add({
	name: { type: String, required: true }
});

DatasetTag.defaultColumns = 'name';
DatasetTag.relationship({ ref: 'Dataset', path: 'tags' });
DatasetTag.register();
