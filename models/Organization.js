const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Organization Model
 * ==================
 */

var Organization = new keystone.List('Organization', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Organization.add({
	name: { type: String, required: true, initial: true },
	description: { type: String, initial: true },
	logo: { type: Types.CloudinaryImage, folder: 'ciudatos/organization' },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

Organization.relationship({ ref: 'Dataset', path: 'organization' });

Organization.defaultColumns = 'name, logo';
Organization.register();
