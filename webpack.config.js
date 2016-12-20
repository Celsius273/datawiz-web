 module.exports = {
    devServer: {
        inline: true,
        port: 3000
    },
    entry: './src/main.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    }
 };
