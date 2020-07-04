module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "env": {
      "development": {
        "plugins":
          ["@babel/transform-react-jsx-source",
            ["module-resolver",{
              "root": ["./"],
              "alias": {
                "tailwind": "./tailwind",
                "components": "./components",
                "constants": "./constants",
                "hooks": "./hooks",
                "navigation": "./navigation",
                "screens": "./screens",
                "assets": "./assets",
              }
            }
            ]
          ]
      }
    }
  };
};
