const keystone = require('keystone');
const { Types } = keystone.Field;

const storage = new keystone.Storage({
	/*adapter: require('keystone-storage-adapter-s3'),
	s3: {
		key: process.env.S3_KEY,
		secret: process.env.S3_SECRET,
		bucket: process.env.S3_BUCKET,
		region: process.env.S3_REGION,
		path: '/cities/',
	},

	
	schema: {
		bucket: true,
		etag: true,
		path: true,
		url: true,
	},*/

  adapter: keystone.Storage.Adapters.FS,
  fs: {
  	path: keystone.expandPath('/home/jhainey/Documentos/ciudatos/datos_sujetivos/'),
  	publicPath: '/home/jhainey/Documentos/ciudatos/datos_sujetivos/',
  },


});



const City = new keystone.List('City', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

City.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	image: {
		type: Types.CloudinaryImage,
		folder: 'ciudatos/cities',
	},
	thumbnail: {
		type: Types.CloudinaryImage,
		folder: 'ciudatos/cities',
	},
	file: { type: Types.File, storage: storage,
		filename: function (item, filename, originalname) {
			return originalname;
		},
	},
});

City.schema.statics.getPublishedCities = async function () {
	return await this.find({ state: 'published' }).exec();
};

City.defaultColumns = 'title,state|20%, author|20%, publishedDate|20%';
City.register();
