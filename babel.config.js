module.exports = {
  presets: [['@babel/preset-typescript']],
  plugins: [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.tsx', '.ts'],
      alias: {},
    },
  ],
}
