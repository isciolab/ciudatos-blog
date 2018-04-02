const keystone = require('keystone');
const Types = keystone.Field.Types;

const About = new keystone.List('About', {
  map: { description: 'aboutTitle' }
});

About.add(
  'Sobre Nosotros',
  {
    aboutTitle: { type: String },
    aboutDescription: { type: String }
  },
  '¿Qué datos tiene la plataforma?',
  {
    whatDataTitle: { type: String },
    whatDataText: { type: Types.Markdown, wysiwyg: true, height: 150 },
  },
  '¿Cómo encuentro estos datos?',
  {
    howToTitle: { type: String },
    howToText: { type: Types.Markdown, wysiwyg: true, height: 150 },
  }
);

About.defaultColumns = 'description'
About.register();
