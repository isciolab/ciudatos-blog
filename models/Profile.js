const keystone = require('keystone');
const Types = keystone.Field.Types;

const Profile = new keystone.List('Profile', {
  autokey: { from: 'name', path: 'key', unique: true },
  map: { name: 'name' }
});

Profile.add({
  name: { type: String, required: true },
  description: { type: Types.Html, wysiwyg: true, height: 300 },
  order: { type: Number, unique: true }
});

Profile.defaultColumns = 'name, order';
Profile.register();
