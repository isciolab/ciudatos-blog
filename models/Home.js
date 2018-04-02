const keystone = require('keystone');
const Types = keystone.Field.Types;

const Home = new keystone.List('Home', {
  map: { description: 'description' }
});

Home.add(
  'Home',
   { description: { type: String } },
   'Explora',
   {
     'exploreTitle': { type: String },
     'exploreLabel': { type: String },
   },
   'Ciudades',
   {
     citiesTitle: { type: String },
     citiesLineOne: { type: String },
     citiesLineTwo: { type: String }
   },
   'Temas',
   {
     topicsTitle: { type: String },
     topicsLineOne: { type: String },
     topicsLineTwo: { type: String }
   },
   'Publicaciones',
   {
     publicationsTitle: { type: String },
     publicationsLineOne: { type: String },
     publicationsLineTwo: { type: String }
   },
   'Bases de datos',
   {
     dbTitle: { type: String },
     dbLineOne: { type: String },
     dbLineTwo: { type: String }
   }
);

Home.defaultColumns = 'description'
Home.register();
