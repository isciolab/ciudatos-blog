var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Document Model
 * ==========
 */

const storage = new keystone.Storage({
	/*adapter: require('keystone-storage-adapter-s3'),
	s3: {
		key: process.env.S3_KEY,
		secret: process.env.S3_SECRET,
		bucket: process.env.S3_BUCKET,
		region: process.env.S3_REGION,
		path: '/ciudatos/documents',
	},
	schema: {
		bucket: true,
		etag: true,
		path: true,
		url: true,
	},*/

  adapter: keystone.Storage.Adapters.FS,
  fs: {
  	path: keystone.expandPath('/home/jhainey/Documentos/ciudatos/documents/'),
  	publicPath: '/home/jhainey/Documentos/ciudatos/documents/',
  },
});

const Document = new keystone.List('Document', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Document.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	externalAuthor: { type: String },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage, folder: 'ciudatos/documents' },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
	file: { type: Types.File, storage: storage,
		filename: function (item, filename, originalname) {
			return item._id + '-' + originalname;
		},
	},
});

Document.schema.statics.getPublishedDocuments = async function () {
	return await this.find({ state: 'published' }).exec();
};

Document.defaultColumns = 'title,state|20%, author|20%, publishedDate|20%';
Document.register();
