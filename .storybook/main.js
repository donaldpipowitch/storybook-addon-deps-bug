module.exports = {
  presets: [
    'storybook-addon-deps/preset-explorer',
    '@storybook/addon-docs/preset'
  ],
  addons: ['storybook-addon-deps'],
  stories: ['../stories/**/*.tsx']
};
