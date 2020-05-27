module.exports = {
  configureWebpack: config => {
    // 设置快捷路径，@表示'src'
    config.resolve.alias
    .set('@', resolve('src'))
    .set('assets', resolve('src/assets'))
    .set('components', resolve('src/components'))
    .set('network', resolve('src/network'))
    .set('views', resolve('src/views'))
  }
}