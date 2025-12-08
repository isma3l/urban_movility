module.exports = function (api) {
  api.cache(true);

  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
    plugins: [
      ['react-native-worklets/plugin', {}, 'unique-id-react-native-worklets'],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
          },
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.js',
            '.ts',
            '.jsx',
            '.tsx',
            '.ios.tsx',
            '.android.tsx',
            '.json',
          ],
        },
      ],
      // 👇 Reanimated SIEMPRE último
      'react-native-reanimated/plugin',
    ],
  };
};
