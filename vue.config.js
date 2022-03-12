const { resolve, join } = require('path');
const { mergeSassVariables } = require('@vuetify/cli-plugin-utils');

/** @param args {string[]} */
const path = (...args) => resolve(join(__dirname, ...args));

module.exports = {
    publicPath: '/',
    lintOnSave: false,
    transpileDependencies: ['vuetify'],
    configureWebpack: {
        resolve: {
            alias: {
                '@themeConfig': path('themeConfig.js'),
                '@core': path('src/@core'),
                '@axios': path('src/plugins/axios.js'),
                '@user-variables': path('src/styles/variables.scss'),
                apexcharts: path('node_modules/apexcharts-clevision'),
            },
        },
    },
    chainWebpack: (config) => {
        const modules = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        modules.forEach((match) => {
            config.module
                .rule('sass')
                .oneOf(match)
                .use('sass-loader')
                .tap((opt) => mergeSassVariables(opt, "'@/styles/variables.scss'"));
            config.module
                .rule('scss')
                .oneOf(match)
                .use('sass-loader')
                .tap((opt) => mergeSassVariables(opt, "'@/styles/variables.scss';"));
        });
        config.module
            .rule(/\.(png|jpe?g|gif|jp2|webp)$/)
            .test(/\.(png|jpe?g|gif|jp2|webp)$/)
            .use('file-loader')
            .loader('file-loader')
            .tap((options) => options);
        config.module
            .rule('ts')
            .test(/\.ts$/)
            .use('ts-loader')
            .loader('ts-loader')
            .end();
    },
};
