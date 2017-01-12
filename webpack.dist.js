var path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js",
        sourcePrefix: ''
    },
    externals: {
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".js"]
    },
    module: {
        unknownContextCritical: false,
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.(png|gif|jpg|jpeg|svg)$/, loader: 'file-loader' },
            { test: /\.js$/, loaders: [ 'babel'], exclude: /node_modules/ },
        ],

    }
};
