// 生成分类
function generateCates (pages) {
    let allSingleArticles = []
    let recommandArticles = []
    let favorites = [
      { index: 1, title: '插件收藏', pages: [] },
      { index: 2, title: '网址收藏', pages: [] },
      { index: 3, title: '实用工具', pages: [] }
    ]
    let cates = {}
    // 遍历所有文章
    pages.forEach(page => {
      let frontmatter = page.frontmatter
      // 所有单页文章
      if (frontmatter.title && frontmatter.datetime && !(frontmatter.allList === false)) {
        allSingleArticles.push(page)
        if (frontmatter.recommand) {
          // 所有推荐文章
          recommandArticles.push(page)
        }
      }
      // 收藏夹
      if (frontmatter.favoriteType) {
        let index = page.frontmatter.favoriteType
        if (index === favorites[index - 1].index) {
          favorites[index - 1].pages.push(page)
        }
      }
      // 分类
      if (frontmatter.category) {
        // 分类
        if (frontmatter.category instanceof Array) {
          // 分类是一个数组
          let categories = frontmatter.category
          categories.forEach(cate => {
            if (!cates[cate]) {
              // 分类不存在
              cates[cate] = []
              cates[cate].push(page)
            } else {
              // 分类已存在
              cates[cate].push(page)
            }
          })
        } else {
          // 分类为单一类别
          let cate = page.frontmatter.category
          if (!cates[cate]) {
            // 分类不存在
            cates[cate] = []
            cates[cate].push(page)
          } else {
            // 分类已存在
            cates[cate].push(page)
          }
        }
      }
    })
    // 排序
    allSingleArticles = allSingleArticles.sort((a, b) => {
      return new Date(b.frontmatter.datetime) - new Date(a.frontmatter.datetime)
    })
    recommandArticles = recommandArticles.sort((a, b) => {
      return new Date(b.frontmatter.datetime) - new Date(a.frontmatter.datetime)
    })
    favorites.forEach((favorite, index) => {
      favorites[index] = {
        index: favorite.index,
        title: favorite.title,
        pages: favorite.pages.sort((a, b) => {
          return new Date(a.frontmatter.datetime) - new Date(b.frontmatter.datetime)
        })
      }
    })
    for (let cate in cates) {
      cates[cate] = cates[cate].sort((a, b) => {
        return new Date(b.frontmatter.datetime) - new Date(a.frontmatter.datetime)
      })
    }
    return {
      allSingleArticles, recommandArticles, favorites, cates
    }
  }
  
  export default {
    generateCates
  }