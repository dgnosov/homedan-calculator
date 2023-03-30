const webpack = require("webpack")

const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const buildForES5 = process.env.ES5 === 'true'

// const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`
const filename = ext => isDev ? `bundle.${ext}` : (buildForES5 ? `indexES5.${ext}` : `index.${ext}`)

const jsLoaders = () => {
    const loaders = [
        {
            loader: 'babel-loader',
            options: {
                // presets: ['@babel/env'],
                presets: [['@babel/preset-env', {
                    targets: {
                        node: "current"
                    },
                    modules: false
                }]],
                plugins: ['@babel/plugin-transform-react-jsx','@babel/plugin-proposal-object-rest-spread']

            }
            // options: {
            //     presets: [['@babel/preset-env', {
            //         targets: {
            //             node: "current"
            //         },
            //         modules: false
            //     }]],
            //     plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-react-jsx','@babel/plugin-proposal-object-rest-spread']
            // }
        }
    ]

    if (isDev) {
        // loaders.push('eslint-loader')
    }
    return loaders;
}

const plugins = ()=>{
    // const res = [new CleanWebpackPlugin()]
    const res = [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new MiniCssExtractPlugin(),
    ]
    if (isDev) {
        res.push(
            new HTMLWebpackPlugin({
                template: 'index.html',
                minify: {
                    removeComments: isProd,
                    collapseWhitespace: isProd
                },
            }),

        )
    }
    return res
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    // entry: ['@babel/polyfill', isDev? './example.js' : './index.js'],
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        library: isDev ? undefined : (buildForES5 ? undefined :'initConsultant'),
        libraryTarget: isDev ? undefined : (buildForES5 ? undefined :'commonjs2'),
        // filename: 'myLib.js',
        globalObject: isDev ? undefined : (buildForES5 ? undefined :'this'),
    },
    externals: buildForES5
        ? {
            'react': 'React'
        }
        : {},
    resolve: {
        extensions: ['.ts', '.tsx','.js','.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            // '@core': path.resolve(__dirname, 'src/core'),
        }
    },
    devServer: {
        port: 3002,
        hot: isDev,
        host:'127.0.0.1'
        // host:'192.168.31.61'
    },
    devtool: isDev ? 'source-map' : false,
    plugins: plugins(),
    module: {
        rules: [
            // {
            //     test: /\.(scss|sass|css)$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            // },

            {
                test: /\.(scss|sass|css)$/i,
                use: [
                    // {
                        MiniCssExtractPlugin.loader,
                        // options: {
                            // hmr: isDev, // HMR is automatically supported in webpack 5. No need to configure it.
                            // reloadAll: true // Вообще ничего не написано в документации, видимо перезагрузка работает из "Коробки"
                        // }
                    // },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders()

            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/env','@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-transform-react-jsx',
                            '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-proposal-class-properties'
                        ]

                    }
                }
            },
            { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },

            { test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, use: [{ loader: 'url-loader', options: { limit: 100000 } }] }
        ],
    }
}
