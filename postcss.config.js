module.exports = {
    plugins: {
        'autoprefixer': {
            browsers: ['Android >= 4.0','IOS >= 8']
        }
    },
    'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*'],
        selectorBlackList: ['.norem'] // 过滤黑名单
    }
}