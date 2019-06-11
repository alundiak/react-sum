// https://storybook.js.org/docs/configurations/custom-webpack-config/
// https://github.com/storybookjs/storybook/issues/3916
// https://github.com/webpack-contrib/mini-css-extract-plugin/issues/73#issuecomment-380510188

const path= require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// import { getIfUtils, removeEmpty } from 'webpack-config-utils';

module.exports = async ({ env, config, mode }) => {
    // const { ifProd, ifDev } = getIfUtils(mode);

    // console.log(mode);
    // console.log(config.resolve.modules);
    // console.log(config.module.rules);
    // console.log(config.plugins);

    //
    // Fixes issue:
    //
    // ERROR in ./stories/sum.stories.js
    // Module not found: Error: Can't resolve 'components/DangMath' in '/Users/alund/prj/@lundiak/react-sum/stories'
    config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, "../src"),
    ];

    //
    // Fixes issue:
    //
    // ERROR in ./src/css/react-sum.less 1:0
    // Module parse failed: Unexpected token (1:0)
    // You may need an appropriate loader to handle this file type.
    config.module.rules = [
        ...(config.module.rules || []),
        // css-loader is from default.
        {
            test: /\.less$/,
            use: [
                // ifDev('css-hot-loader'), // TODO
                'css-hot-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'less-loader',
                    options: {
                        relativeUrls: false
                    }
                }
            ]
        },
    ];

    //
    // Fixes issue:
    //
    // ERROR in ./src/css/react-sum.less
    // Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
    // TypeError: this[MODULE_TYPE] is not a function
    config.plugins = [
        ...(config.plugins || []),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ];

    return config;
};