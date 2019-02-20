let path=require('path')

module.exports = {
  title: '番茄炒蛋',
  description: '随便谢谢',
	dest:path.resolve('.','docs','dist'), //生成路径
  "base": "/",
  permalink: "/:year/:month/:day/:slug",
  //最后更新时间
  lastUpdated: 'Last Updated', // string | boolean,
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/active-header-links'
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
    }
  },



  themeConfig: {

    sidebarDepth: 3, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    displayAllHeaders: true, // 默认值：false 显示所有页面的标题链接
    nav: [
      { text: '前端算法', link: '/hello/a' }, // 内部链接 以docs为根目录
      { text: '博客', link: '/liaohui/' }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
          {
            text: '算法仓库',
            link: 'https://github.com/OBKoro1/Brush_algorithm'
          }
        ]
      }
    ],

    // sidebar:'auto'
    //为以下路由添加侧边栏
    sidebar: {
      '/hello/': ['a', 'b'],
      '/liaohui/': [
        {
          title: 'CSS知识库',
          collapsable: true,
          children: [
            '/hello/a'
          ]
        },
        {
          title: 'JS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'node知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'vue知识库',
          collapsable: false,
          children: [
          ]
        }
      ]



    }
  }
}
