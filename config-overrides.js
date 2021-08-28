const {
  override,
  addDecoratorsLegacy,
  fixBabelImports,
  addPostcssPlugins
} = require('customize-cra')
module.exports = override(
  addDecoratorsLegacy(),
  // 按需导入antd-mobile
  fixBabelImports('import', {
    libraryName: 'zarm',
    style: true
  }),
  // 配置pxtorem
  addPostcssPlugins([
    require('postcss-pxtorem')({
      rootValue: 37.5, // 这里根据设计稿大小配置,一般是375
      propList: ['*'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    })
  ])
)
