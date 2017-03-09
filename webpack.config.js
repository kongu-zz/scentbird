let webpack = require("webpack");
let CleanWebpackPlugin = require("clean-webpack-plugin");
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let path = require("path");

let debug = (process.env.NODE_ENV !== "production");
let debugHot = (process.env.NODE_ENV === "dev_hot");
console.log("process.env.NODE_ENV =", process.env.NODE_ENV);
console.log("debug =", debug);
console.log("debugHot =", debugHot);

const distPath = "dist";

let defineEnv = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
});

let cleanBuildFolder = new CleanWebpackPlugin([path.join(distPath, "*")], {
    verbose: true,
    "exclude": [""]
});

let copyStatic = new CopyWebpackPlugin([
    {from: "static", to: ""},
]);

let referencesPlugin = new webpack.ProvidePlugin({
    $: "jquery",
    "window.$": "jquery",
    "window.jQuery": "jquery"
});

let babelOptions = {
    "presets": [
        "react",
        "es2015",
        "es2016",
        "es2017",
        "stage-0",
    ],
    "plugins": [
        "react-html-attrs",
        "transform-class-properties",
        "transform-decorators-legacy",
        "transform-runtime",
        "array-includes",
    ]
};
if (debugHot) {
    babelOptions.presets.push("react-hmre");
}
let extractCss = new ExtractTextPlugin(
    {
        filename: "styles.css",
        disable: false,
        allChunks: true
    });


module.exports = {
    entry: {
        app: [
            "./js/index.html",
            "./js/index.jsx",
            "./css/main.less",
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts", ".less", ".css", ".json"],
        modules: ["node_modules"],
    },
    output: {
        path: path.join(__dirname, distPath),
        filename: "[name].js"
    },

    cache: true,

    module: {
        rules: [
            {
                test: /js\\.*\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader", query: babelOptions},
            },
            {
                test: /css\\.*\.(less)$/,
                loader: ExtractTextPlugin.extract(
                    {
                        fallbackLoader: "style-loader!css-loader",
                        loader: "css-loader!less-loader",
                        disable: false,
                        allChunks: true
                    })
                // use: [
                //     {loader: "style-loader"},
                //     {loader: "css-loader"},
                //     {loader: "less-loader"},
                // ]
            },
            {
                test: /.*\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                ]
            },
            {test: /js\\index.html/, use: {loader: "file-loader", query: {"name": "[name].[ext]"}}},
            {test: /locale\\.*\.json$/, loader: "json-loader"},
            // {
            //     test: /\.(woff|woff2|eot|ttf)$/,
            //     exclude: /node_modules/,
            //     loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
            // },
            {
                test: /.*\.(woff|woff2|ttf|eot)?(\?v=[0-9].[0-9].[0-9])?$/,
                use: {loader: "url-loader?importLoaders=1&limit=100000", query: {"mimetype": "application/font-woff"}}
            },
            {
                test: /.*\.(eot|ttf|svg|jpg|jpeg|png|gif|ico)(\?v=[0-9].[0-9].[0-9])?$/,
                use: {
                    loader: "file-loader", query: debugHot
                        ? {"publicPath": "/", "name": "[name].[ext]"}
                        : {"name": "/files/[name].[ext]"}
                },
            },
            // { test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=font/[name].[ext]' },
            // { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=font/[name].[ext]' },
            // { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=font/[name].[ext]' },
            // { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=font/[name].[ext]' },
            // { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=font/[name].[ext]' }
        ]
    },
    watchOptions: {
        ignored: /WebHost/,
    },
    devtool: debug ? "source-map" : false,
    devServer: {
        contentBase: path.join(__dirname, distPath),
        port: 8080,
        watchOptions: {
            ignored: /WebHost/,
        },
        //compress: true,
        historyApiFallback: true,
        inline: true
    },
    plugins: debug ? [
            defineEnv,
            cleanBuildFolder,
            referencesPlugin,
            extractCss,
            copyStatic,
        ] : [
            defineEnv,
            cleanBuildFolder,
            referencesPlugin,
            extractCss,
            copyStatic,

            new webpack.LoaderOptionsPlugin({
                minimize: true
            }),
            new webpack.optimize.UglifyJsPlugin({
                compressor: {
                    warnings: false
                },
                comments: false,
                // this is just for errors source map!!!!
                sourcemap: false,
            })
        ],
    // profile:true,
    // stats: {
    //     // hash: true,
    //     version: true,
    //     timings: true,
    //     assets: true,
    //     chunks: true,
    //     modules: true,
    //     reasons: true,
    //     children: true,
    //     source: false,
    //     errors: true,
    //     errorDetails: true,
    //     // warnings: true,
    //     publicPath: true
    // },
};
