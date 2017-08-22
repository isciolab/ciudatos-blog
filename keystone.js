// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone'),
	i18n= require('i18n');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'Ciudatos Blog',
	'brand': 'Ciudatos Blog',
	'signin logo': ['/images/logo.png'],
	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',

	'emails': 'templates/emails',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Configure i18n

i18n.configure({
	locales:['en', 'es', 'it'],
	objectNotation: true,
	cookie: 'lang',
	directory: __dirname + '/locales'
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

// optional, will prefix each image public_id with [{prefix}]/{list.path}/{field.path}/
keystone.set('cloudinary folders', true);

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.
keystone.set('email locals', {
	logo_src: '/images/logo-email.gif',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7',
		},
	},
});

// Load your project's email test routes
keystone.set('email tests', require('./routes/emails'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	posts: ['posts', 'post-categories'],
	documents: 'documents',
	datasets: ['datasets','dataset-tags','dataset-categories','databases'],
	// galleries: 'galleries',
	// enquiries: 'enquiries',
	// info: 'pages',
	organizations: 'organizations',
	users: 'users'
});


keystone.set('s3 config', {
	key: process.env.S3_KEY,
    secret: process.env.S3_SECRET,
    bucket: process.env.S3_BUCKET,
    region: process.env.S3_REGION,
    path: '/documents',
    headers: {
      'x-amz-acl': 'public-read', // add default headers; see below for details
    }
	// bucket: 'my-bucket',
	// key: 'my-key',
	// secret: 'my-secret',
	// 'default headers':  {
 //    'x-amz-meta-X-Default-Header': 'Custom Default Value'
  // }
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
