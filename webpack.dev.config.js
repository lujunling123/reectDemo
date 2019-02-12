const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    mode:'development',
    /*入口*/
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    devServer: {
        // proxy 代理
        proxy: {
            "/api": "http://localhost:3000"
        },
        // URL的根目录。如果不设定的话，默认指向项目根目录。
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        // 让所有的404定位到index.html
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true
        //hot 热部署 color console中打印彩色日志，progress 将编译进度输出到控制台, (CLI ONLY)
        /*CLI ONLY的需要在命令行中配置
        package.json
        "start": "webpack-dev-server --config webpack.dev.config.js --color --progress"*/
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // })
    ],
    resolve: {
        alias: {
            home: path.join(__dirname, 'src/home'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    }
};