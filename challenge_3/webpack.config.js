const path = require('path');


const SRC_DIR = path.join(__dirname, '/client');
const PUBLIC_DIR = path.join(__dirname, '/public')

module.exports = {
    entry: `${SRC_DIR}/index.js`,
    output:  {
        path: PUBLIC_DIR
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};