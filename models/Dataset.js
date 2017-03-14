var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Dataset Model
 * ==========
 */

var Dataset = new keystone.List('Dataset', {
	map: { name: 'key' },
	autokey: { path: 'slug', from: 'key', unique: true },
});

Dataset.add({
	key: { type: String, required: true, initial: true },
	title: { type: String, required: true, initial: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	organization: { type: Types.Relationship, ref: 'Organization', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage, folder: 'Ciudatos/blog'},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 }
	},
	database: { type: Types.Relationship, ref: 'Database', many: false },
	tags: { type: Types.Relationship, ref: 'DatasetTag', many: true },
	categories: { type: Types.Relationship, ref: 'DatasetCategory', many: true },
	fileCSV: { type: Types.S3File, s3path: 'datasets',	
		filename: function(item, filename, originalname){
			return item._id + '-' + originalname;
		}},
	fileCSVdic: { type: Types.S3File, s3path: 'datasets',	
		filename: function(item, filename, originalname){
			return item._id + '-' + originalname;
		}},
	fileXLS: { type: Types.S3File, s3path: 'datasets',	
		filename: function(item, filename, originalname){
			return item._id + '-' + originalname;
		}}
});


Dataset.defaultColumns = 'title,state|20%, publishedDate|20%';
Dataset.register();
