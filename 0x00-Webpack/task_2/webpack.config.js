const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = async () => {
    const { default: imageminMozjpeg } = await import("imagemin-mozjpeg");
    const { default: imageminPngquant } = await import("imagemin-pngquant");

    return {
        entry: "./js/dashboard_main.js",
        output: {
            path: path.resolve(__dirname, "public"),
            filename: "bundle.js",
        },
        mode: "production",
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: "images/[name][ext]",
                    },
                },
            ],
        },
        optimization: {
            minimizer: [
                new ImageMinimizerPlugin({
                    minimizer: {
                        implementation: ImageMinimizerPlugin.imageminGenerate,
                        options: {
                            plugins: [
                                ["imagemin-mozjpeg", { quality: 75 }],
                                ["imagemin-pngquant", { quality: [0.7, 0.9] }],
                            ],
                        },
                    },
                }),
            ],
        },
    };
};
