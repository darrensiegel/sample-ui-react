var path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path:  '/dev',
        filename: "bundle.js",
        sourcePrefix: ''
    },
    externals: {

    },
    debug: true,
    devtool: 'source-map',
    devServer: {
        contentBase: './dev',
    },
    resolve: {
        extensions: ["", ".js"]
    },
    module: {
        unknownContextCritical: false,
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.(png|gif|jpg|jpeg|svg)$/, loader: 'file-loader' },
            { test: /\.js$/, loaders: [ 'babel-loader'], exclude: /node_modules/ },

        ]

    }
};
