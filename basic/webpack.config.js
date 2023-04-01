const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/main/js/main.tsx',
    devtool: 'eval-source-map',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        // filename: '.'
    },
    module: {
        rules: [
            // `js` and `jsx` files are parsed using `babel`
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            // `ts` and `tsx` files are parsed using `ts-loader`
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },plugins:[
        new MiniCssExtractPlugin({filename:"main.css"}),
    ],resolve: {
        extensions: [".*", ".js", ".jsx", ".ts", ".tsx"],
    },
};