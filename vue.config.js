// module.exports = {
//   chainWebpack: (config) => {
//     config.module.rule('pug')
//       .test(/\.pug$/)
//       .use('pug-html-loader')
//       .loader('pug-html-loader')
//       .end();
//   },
// };
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        jquery: 'jquery/dist/jquery.min.js',
        '@css': resolve('src/assets/sass'),
        '@img': resolve('src/assets/imgs'),
        '@js': resolve('src/utilities'),
        '@c': resolve('src/components'),
        '@v': resolve('src/views'),
        '@vuex': resolve('src/vuex'),
        '@': resolve('src'),
        '@stories': resolve('stories'),
      },
    },
  },
};
