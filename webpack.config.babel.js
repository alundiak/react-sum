import { join, resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import PrettierPlugin from 'prettier-webpack-plugin';
import { getIfUtils, removeEmpty } from 'webpack-config-utils';

const src = resolve(__dirname, './src');

export default env => {
    const { ifNotProduction } = getIfUtils(env);
    return {
        // entry: './src/index.jsx',
        entry: {
            index: './src/index.jsx',
            vendor: ['react', 'react-dom', 'prop-types'],
            app: './src/components/App.jsx'
        },
        output: {
            path: resolve(__dirname, 'dist'),
            publicPath: join(__dirname, '/dist'),
            // filename: 'bundle.js',
            filename: '[name].js',
            // filename: '[name]_[hash].js',
            // filename: '[name].[hash:8].js',
            // sourceMapFilename: '[name].[hash:8].map',
            // chunkFilename: '[id].[hash:8].js'
            // library: 'index', // ???
            // libraryTarget: 'commonjs2' // causes errors with module is undefined

            // path: resolve('lib'),
            // filename: 'ReactAdd.js',
            // libraryTarget: 'commonjs2'
        },

        resolve: {
            alias: {
                css: resolve(src, './css'),
                components: resolve(src, './components'),
                img: resolve(src, './images'),
            },
            modules: ['node_modules', 'bower_components', 'src'],
            extensions: ['.js', '.css', '.less', '.jsx', '.json']
        },

        // externals: {
        //     // https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f
        //     // Don't bundle react or react-dom
        //     // AL: but it cause error: "Cannot read property 'Component' of undefined" on HOT load (local run).
        //     react: {
        //         commonjs: "react",
        //         commonjs2: "react",
        //         amd: "React",
        //         root: "React"
        //     },
        //     "react-dom": {
        //         commonjs: "react-dom",
        //         commonjs2: "react-dom",
        //         amd: "ReactDOM",
        //         root: "ReactDOM"
        //     }
        // },

        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.less$/,
                    use: removeEmpty([
                        ifNotProduction('css-hot-loader'),
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
            ifNotProduction(new webpack.HotModuleReplacementPlugin()),
            new MiniCssExtractPlugin({
                filename: 'css/main.css',
                chunkFilename: 'css/main.css'
            }),
            // new MiniCssExtractPlugin({
            //     filename: 'css/app.css',
            //     chunkFilename: 'css/app.css'
            // }),
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
            hot: true
        },

        devtool: 'source-map'
    }
};
