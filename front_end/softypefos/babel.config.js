// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
// const { VuetifyProgressiveModule } = require('vuetify-loader');

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('vuetify/lib', 'vuetify/es5/components');
  //   config.plugin('vuetify-loader')
  //     .use(VuetifyLoaderPlugin);
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .loader('vue-loader')
  //     .tap(options => {
  //       options.compilerOptions.modules = [VuetifyProgressiveModule];
  //       return options;
  //     });
  //   config.module
  //     .rule('images')
  //     .oneOf('progressiveImages')
  //     .test(/\.(png|jpe?g|gif)$/)
  //     .resourceQuery(/vuetify-preload/)
  //     .use('vuetify-loader/progressive-loader')
  //     .loader('url-loader')
  //     .options({ limit: 8000 })
  //     .end()
  //     .end()
  //     .oneOf('progressiveImagesOther')
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .options({ limit: 8000 })
  //     .end()
  //     .end();
  // },
}
