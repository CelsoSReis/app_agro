module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //add plugin
    plugins: ['react-native-reanimated/plugin'],
  };
};
