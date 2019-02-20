import VueHighlightJS from 'vue-highlightjs'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import util from './util'
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
  }) => {
    // ...做一些其他的应用级别的优化
    Vue.use(VueHighlightJS)
    Vue.use(Element)
    console.log(siteData)
// 添加分类
let categories = util.generateCates(siteData.pages)
console.log(categories)
siteData.themeConfig.categories = categories.cates
siteData.themeConfig.favorites = categories.favorites
siteData.themeConfig.allSingleArticles = categories.allSingleArticles
siteData.themeConfig.recommandArticles = categories.recommandArticles
  }