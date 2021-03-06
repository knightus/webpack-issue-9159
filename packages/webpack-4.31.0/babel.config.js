module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '60',
        },
      },
    ],
    [
      '@babel/preset-react',
    ],
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-export-default-from',
    'transform-modern-regexp',
  ],
};
