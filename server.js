var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    quiet: false,
    noInfo: false,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
}).listen(3000, 'localhost', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:3000/');
});

