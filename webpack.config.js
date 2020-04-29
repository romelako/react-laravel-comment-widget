const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    entry: {
        "comment-widget": ['./resources/js/comment_widget/index.jsx']
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'public/assets/js')
    }
};
