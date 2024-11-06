const path = require("path");

module.exports = {
    entry: "./js/dashboard_main.js", // specifies entry point
    output: { // sets output directory
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    mode: "production" // set to optimize build
};
