const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  presets: [
    {
      name: "@storybook/preset-typescript",
      options: {
        include: [path.resolve(__dirname, "../src")]
      }
    }
  ],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null
      }
    },
    "@storybook/addon-viewport/register",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register"
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("react-docgen-typescript-loader")
        }
      ]
    });

    config.resolve.alias["@ui"] = path.resolve(__dirname, "..", "src", "ui");
    config.resolve.alias["@lib"] = path.resolve(__dirname, "..", "src", "lib");
    config.resolve.alias["@features"] = path.resolve(
      __dirname,
      "..",
      "src",
      "features"
    );
    return config;
  }
};
