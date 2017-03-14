var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Page Model
 * ==================
 */

var Page = new keystone.List('Page', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Page.add({
	name: { type: String, required: true ,initial:true},
	primary: { type: Boolean, label: 'Is primary section', initial: true },
	weight: { type: Types.Number },
	customTemplate: { type: Boolean, label: 'Custom Template', initial: true, default: false },
	labelEn: { type: String, required: true ,initial:true},
	contentEn: { type: Types.Html, wysiwyg: true, height: 400 },
	labelEs: { type: String, required: true ,initial:true},
	contentEs: { type: Types.Html, wysiwyg: true, height: 400 }
});

Page.defaultColumns = 'name, primary, weight, customTemplate, labelEn, labelEs';

Page.register();
