const path = require("path");

function resolve(dir) {
  return path.join(__dirname, '../', dir);
}

module.exports = storybookBaseConfig => {
  const { config } = storybookBaseConfig
  // console.log(config)
  config.module.rules.push(
    {
      test: /\.stories\.jsx?$/,
      use: ['@storybook/source-loader'],
      enforce: 'pre'
    },
    {
      test: /\.pug$/,
      loader: 'pug-plain-loader'
    },
    {
      test: /\.(scss|sass)$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {
      resourceQuery: /blockType=docs/,
      use: ['storybook-readme/vue/docs-loader', 'html-loader', 'markdown-loader'],
    },
  );
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve('src'),
    '@c': resolve('src/components'),
    // '@': path.dirname(path.resolve(__dirname)),
  };
  return config
};
