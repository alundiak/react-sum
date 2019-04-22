import { join, resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import PrettierPlugin from 'prettier-webpack-plugin';
import { getIfUtils, removeEmpty } from 'webpack-config-utils';

const src = resolve(__dirname, './src');

export default env => {
    console.log(env);
    const { ifProd, ifDev } = getIfUtils(env);
    return {
        // OK for single entry approach
        // entry: './src/index.jsx',

        // OK for multiple entries approach
        entry: {
            main: [
                './src/index.jsx'
                // './src/css/main.less'
            ],
            app: [
                './src/components/App.jsx'
                // './src/components/Sum.jsx',
                // './src/components/SumWithCssAlias.jsx',
                // './src/css/app.less',
                // './src/css/react-sum.less',
                // './src/css/with-alias.css'
            ],
            Sum: ['./src/components/Sum.jsx'], // should I include react-sum.less/css?
            SumWithCssAlias: ['./src/components/SumWithCssAlias.jsx'/* , './src/css/with-alias.css' */]
        },

        // OK for single entry approach
        // output: {
        //     path: resolve(__dirname, 'dist'),
        //     publicPath: ifDev('/', './'),
        //     filename: 'bundle.js',
        //     library: 'ReactSum',
        //     libraryTarget: 'umd'
        // },

        // OK for multiple entries approach
        output: {
            path: resolve(__dirname, 'dist'),
            publicPath: ifDev('/', './'),
            filename: '[name].js',
            // filename: '[name]_[hash].js',
            // filename: '[name].[hash:8].js',
            // filename: '[name].[contenthash].js', // => Cannot use [chunkhash] or [contenthash] for chunk in '[name].[contenthash].js' (use [hash] instead)
            // filename: '[name].[contenthash:8].js',
            // sourceMapFilename: '[name].[hash:8].map',
            // chunkFilename: '[id].[hash:8].js' // ?
            library: ['ReactSum', '[name]'], // ideal case is to have <MyReactCollection.MyComponent />
            libraryTarget: 'umd',
            umdNamedDefine: true,// cause "define("Sum", [], factory);"

        },

        // Multiple Outputs
        // ??? Ist it even possible?

        // Since Webpack v4. Works for both - single and multiple entires approaches.
        // But matters for browser usage example, when error "Cannot read property 'default' of undefined" occurs:
        // - devBuild (then expects "default") or
        // - prodBuild (then works OK)
        optimization: {
            splitChunks: {
                chunks: 'all'
                // using cacheGroups:{} we can split into dedicated files
                // https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
            }
        },

        resolve: {
            alias: {
                css: resolve(src, './css'),
                components: resolve(src, './components'),
                img: resolve(src, './images'),
                // 'react': resolve(__dirname, './node_modules/react'),
                // 'react-dom': resolve(__dirname, './node_modules/react-dom'),
            },
            modules: ['node_modules', 'src'],
            extensions: ['.js', '.css', '.less', '.jsx', '.json']
        },

        // https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f
        // Don't bundle react or react-dom
        // AL: looks like because it causes error:
        // "Cannot read property 'Component' of undefined" on HOT load (local run).
        // Final version of es5-code contains smth like root() which cause using "default" not working.
        // externals: {
        //     react: 'react', // simple version
        //     react: {
        //         commonjs: 'react',
        //         commonjs2: 'react', // if not provided, then => "Missing external configuration for type:commonjs2"
        //         amd: 'React',
        //         root: 'React' // indicates global variable
        //     },
        //     'react-dom': {
        //         commonjs: 'react-dom',
        //         commonjs2: 'react-dom',
        //         amd: 'ReactDOM',
        //         root: 'ReactDOM' // indicates global variable
        //     }
        // },
        // But I read somewhere, that if "optimization" used, then no need to care about externals. All vendors extracted.

        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader' // looks like eslint need "pre-made" behavior.
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                    // not sure, but
                    // use: ['babel-loader', 'eslint-loader']
                },
                // Simple config setup doesn't work
                // {
                //     test: /\.css$/,
                //     loader: 'css-loader'
                // },
                {
                    test: /\.css$/,
                    use: removeEmpty([
                        ifDev('css-hot-loader'),
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ])
                },
                {
                    test: /\.less$/,
                    use: removeEmpty([
                        ifDev('css-hot-loader'),
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                relativeUrls: false
                            }
                        }
                    ])
                },
                {
                    test: /\.(png|svg|jpg|gif|pdf)$/,
                    use: [
                        'file-loader'
                    ]
                }
            ]
        },

        plugins: removeEmpty([
            // This also causes "Cannot read property 'default' of undefined"
            // ifNotProduction(new webpack.HotModuleReplacementPlugin()),
            // This (ifDev) usage doesn't cause that error. Because mode is NOT "production" but is "prod" :) yeah....
            ifDev(new webpack.HotModuleReplacementPlugin()),

            // new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly

            // Approach #1
            // When 2 objects written as below, it will cause duplication issues
            // - file names different, but content will be the same.
            // new MiniCssExtractPlugin({
            //     filename: 'css/main.css',
            //     chunkFilename: 'css/main.css'
            // }),
            // new MiniCssExtractPlugin({
            //     filename: 'css/app.css',
            //     chunkFilename: 'css/app.css'
            // }),

            // Approach #2
            // Giving file name, it will contain all less file contents (including those imported from JSX files)
            // new MiniCssExtractPlugin({
            //     filename: "reactSum.css",
            //     // chunkFilename: "myId.css" // ???
            // }),
            // But it causes an error when multiple entries approach used:
            // "Multiple chunks emit assets to the same filename reactSum.css"

            // Approach #3
            // No matter if it's one file or 2 files, content of result file will have ALL files
            new MiniCssExtractPlugin({
                filename: "[name].css"
                // filename: "[id].css" // => app.css
                // chunkFilename: "[id].css" // => app.css
                // filename: "[name]_[id].css" // => app_app.css
                // filename: "[name]_[hash].css" // => app_5398cd6b88d129401089.css
            }),

            new HtmlWebpackPlugin({
                title: 'ReactJS npm package',
                filename: 'index.html',
                template: './src/index.html',
                minify: {
                    html5: true,
                    removeComments: true,
                    useShortDoctype: true,
                    removeTagWhitespace: true,
                    removeStyleLinkTypeAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeRedundantAttributes: true,
                    processConditionalComments: true,
                    minifyCSS: true,
                    minifyJS: true,
                    keepClosingSlash: true,
                    collapseWhitespace: true
                },
                hash: true
            }),

            new PrettierPlugin({
                printWidth: 80,               // Specify the length of line that the printer will wrap on.
                tabWidth: 2,                  // Specify the number of spaces per indentation-level.
                useTabs: false,               // Indent lines with tabs instead of spaces.
                semi: true,                   // Print semicolons at the ends of statements.
                encoding: 'utf-8',            // Which encoding scheme to use on files
                extensions: [".less"]       // Which file extensions to process
            })
        ]),

        devServer: {
            host: 'localhost',
            port: 3000,
            hot: ifDev(true, false) // Good for development, but when npm publish, code is built with lot of HMR sugar
        },

        devtool: 'source-map'
        // devtool: ifDev('source-map', undefined) // works. bundle.js is different.
        // devtool: false
    }
};
