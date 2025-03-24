module.exports = [
 { name: 'strapi::logger', 
  config: {
    level: 'debug'
  }},
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

];

// module.exports = [
//   {
//     name: 'strapi::logger',
//     config: {
//       level: 'debug'
//     }
//   }
// ];
