const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * DatasetCategory Model
 * ==================
 */

var DatasetCategory = new keystone.List('DatasetCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

DatasetCategory.add({
	name: { type: String, required: true },
	weight: { type: Types.Number, initial: true },
});

DatasetCategory.defaultColumns = 'name, weight';
DatasetCategory.relationship({ ref: 'Post', path: 'categories' });
DatasetCategory.register();
