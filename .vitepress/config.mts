import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Jerry's Blog",
  description: 'Jerry Blog',
  ignoreDeadLinks: 'localhostLinks',
  base: '/blog/',
  themeConfig: {
    nav: [
      {
        text: '算法',
        link: '/docs/algorithm/',
      },
      {
        text: '前端基础',
        items: [
          { text: 'JavaScript', link: '/docs/basic/js/index' },
          { text: 'CSS', link: '/docs/basic/css/index' },
          { text: 'HTML', link: '/docs/basic/html/index' },
          { text: 'HTTP', link: '/docs/http/index' },
        ],
      },
      {
        text: 'Vue 系列',
        items: [
          { text: 'Vue 2', link: '/docs/tools/vue/vue2/index' },
          { text: 'Vue 3', link: '/docs/tools/vue/vue3/index' },
          { text: 'Vuex', link: '/docs/tools/vue/vuex/index' },
        ],
      },
      {
        text: '源码精读',
        items: [
          { text: 'Snabbdom', link: '/docs/tools/snabbdom/index' },
          { text: 'Axios', link: '/docs/tools/axios/index' },
        ],
      },
      {
        text: '技能拓展',
        link: '/docs/backend/',
      },
      {
        text: 'Webpack',
        link: '/docs/tools/webpack/',
      },
      {
        text: 'About Me',
        link: '/docs/about/',
      },
    ],
    sidebar: {
      '/docs/algorithm/': [
        {
          text: 'Easy',
          items: [
            {
              text: '有效的括号',
              link: '/docs/algorithm/easy/valid-parentheses',
            },
          ],
        },
        {
          text: 'Medium',
          items: [
            {
              text: '求最长子串的长度',
              link: '/docs/algorithm/medium/find-longest-substr-length',
            },
          ],
        },
        {
          text: 'Hard',
          items: [], // 空数组可以保留或省略
        },
        {
          text: 'Other',
          items: [
            {
              text: '列表转成树结构',
              link: '/docs/algorithm/other/list-to-tree',
            },
          ],
        },
      ],
      '/docs/tools/vue/vue2/': [
        {
          text: 'Vue 2',
          items: [
            { text: '响应式原理', link: '/docs/tools/vue/vue2/reactivity' },
            {
              text: 'keep-alive组件原理',
              link: '/docs/tools/vue/vue2/keep-alive',
            },
            {
              text: '异步组件原理',
              link: '/docs/tools/vue/vue2/async-component',
            },
          ],
        },
      ],
      '/docs/tools/vue/vue3/': [
        {
          text: '初始化',
          items: [
            { text: '写在前面', link: '/docs/tools/vue/vue3/00-before' },
            { text: 'Vue 的初始化', link: '/docs/tools/vue/vue3/01-init-app' },
          ],
        },
        {
          text: '组件化',
          items: [
            {
              text: '组件注册与渲染',
              link: '/docs/tools/vue/vue3/02-component-register-and-render',
            },
            {
              text: '生命周期',
              link: '/docs/tools/vue/vue3/02-component-lifecycle',
            },
            {
              text: '异步组件',
              link: '/docs/tools/vue/vue3/02-component-async',
            },
            {
              text: '内置组件',
              link: '/docs/tools/vue/vue3/02-component-internal',
            },
          ],
        },
      ],
      '/docs/tools/vue/vuex/': [
        {
          text: 'Vuex',
          items: [
            { text: 'Vuex 的安装', link: '/docs/tools/vue/vuex/01-install' },
            { text: 'State 工作原理', link: '/docs/tools/vue/vuex/02-state' },
            { text: 'Getter 工作原理', link: '/docs/tools/vue/vuex/03-getter' },
            {
              text: 'Mutation 工作原理',
              link: '/docs/tools/vue/vuex/04-mutation',
            },
          ],
        },
      ],
      '/docs/tools/snabbdom/': [
        {
          text: 'Snabbdom',
          items: [
            { text: '什么是 VNode', link: '/docs/tools/snabbdom/01-vnode' },
            { text: '神奇的 patch', link: '/docs/tools/snabbdom/02-patch' },
            {
              text: '锦上添花的 modules',
              link: '/docs/tools/snabbdom/03-modules',
            },
            {
              text: '优化 diff 的 thunks',
              link: '/docs/tools/snabbdom/04-thunk',
            },
            { text: 'Q&A', link: '/docs/tools/snabbdom/05-others' },
          ],
        },
      ],
      '/docs/tools/axios/': [
        {
          text: 'Axios',
          items: [], // 空数组可保留
        },
      ],
      '/docs/tools/webpack/': [
        {
          text: '配置大全',
          items: [
            {
              text: 'entry 和 context',
              link: '/docs/tools/webpack/entry-context',
            },
            { text: 'output', link: '/docs/tools/webpack/output' },
            { text: 'devServer', link: '/docs/tools/webpack/dev-server' },
            { text: 'performance', link: '/docs/tools/webpack/performance' },
            {
              text: 'watch 和 watchOptions',
              link: '/docs/tools/webpack/watch',
            },
            {
              text: 'resolve 和 resolveLoader',
              link: '/docs/tools/webpack/resolve',
            },
            {
              text: 'externals 和 externalsType',
              link: '/docs/tools/webpack/externals',
            },
            { text: 'module', link: '/docs/tools/webpack/module' },
            {
              text: 'optimization',
              link: '/docs/tools/webpack/optimization',
            },
          ],
        },
        {
          text: '优化技巧',
          items: [
            { text: 'Webpack优化技巧', link: '/docs/tools/webpack/optimize' },
          ],
        },
        {
          text: '进阶学习',
          items: [
            {
              text: '事件系统的核心 - Tappable',
              link: '/docs/tools/webpack/tappable',
            },
            {
              text: 'hash, chunkhash 和 contenthash',
              link: '/docs/tools/webpack/hashes',
            },
            { text: 'Webpack Loader', link: '/docs/tools/webpack/loader' },
            { text: 'Webpack Plugin', link: '/docs/tools/webpack/plugin' },
          ],
        },
      ],
      '/docs/basic/js/': [
        {
          text: 'JavaScript',
          items: [
            { text: '数据类型转换', link: '/docs/basic/js/data-compare' },
            { text: 'reduce方法详解', link: '/docs/basic/js/reduce' },
            { text: 'fetch方法详解', link: '/docs/basic/js/fetch' },
            {
              text: 'requestAnimationFrame',
              link: '/docs/basic/js/request-animation-frame',
            },
            {
              text: '函数节流和防抖',
              link: '/docs/basic/js/debounce-throttle',
            },
            { text: '前端模块化', link: '/docs/basic/js/module' },
            {
              text: 'Web Component & Shadow DOM',
              link: '/docs/basic/js/web-component',
            },
          ],
        },
        {
          text: 'Coding With JS',
          items: [
            { text: '实现Promise', link: '/docs/basic/js/promise' },
            { text: '实现apply/call/bind', link: '/docs/basic/js/bind' },
            { text: '实现new操作符', link: '/docs/basic/js/new' },
            { text: '实现Object.create()', link: '/docs/basic/js/create' },
            { text: '实现深拷贝', link: '/docs/basic/js/deep-clone' },
            { text: '实现大数相加', link: '/docs/basic/js/add-big-number' },
            { text: '实现sleep功能', link: '/docs/basic/js/sleep' },
          ],
        },
      ],
      '/docs/basic/css/': [
        {
          text: 'CSS',
          items: [
            { text: '盒模型与BFC', link: '/docs/basic/css/box' },
            {
              text: '帧动画-Animation-详解',
              link: '/docs/basic/css/animation',
            },
            {
              text: '帧动画-Animation-案例',
              link: '/docs/basic/css/animation-demos',
            },
            { text: '神奇的Grid系统', link: '/docs/basic/css/grid' },
            { text: '⭐️CSS常用样式合集', link: '/docs/basic/css/util' },
          ],
        },
      ],
      '/docs/http/': [
        {
          text: 'HTTP',
          items: [
            { text: 'HTTP的发展历程', link: '/docs/http/history' },
            { text: 'HTTP缓存', link: '/docs/http/cache' },
            { text: 'HTTP Cookie', link: '/docs/http/cookie' },
            { text: 'HTTP Headers', link: '/docs/http/headers' },
            { text: 'HTTP Status Code', link: '/docs/http/status-code' },
            { text: 'HTTPS', link: '/docs/http/https' },
            { text: '跨域与CORS', link: '/docs/http/cors' },
            { text: 'TCP / 三次握手和四次挥手', link: '/docs/http/hand-shake' },
            { text: 'Web安全', link: '/docs/http/security' },
          ],
        },
      ],
      '/docs/backend/': [
        {
          text: 'Docker',
          items: [
            { text: '基本概念', link: '/docs/backend/docker/basic' },
            { text: '常用命令', link: '/docs/backend/docker/commands' },
          ],
        },
        {
          text: 'Nginx',
          items: [
            { text: 'Hello Nginx', link: '/docs/backend/nginx/guide' },
            { text: '常用配置', link: '/docs/backend/nginx/demo' },
          ],
        },
      ],
      '/docs/about/': [
        {
          text: '关于我',
          items: [
            { text: '我是谁', link: '/docs/about/' },
            { text: '关于博客', link: '/docs/about/blog' },
            { text: '个人简历', link: '/docs/about/resume' },
            { text: 'Resume', link: '/docs/about/resume-en' },
          ],
        },
        {
          text: '好文共赏',
          items: [
            { text: '中文', link: '/docs/about/articles-zh' },
            { text: 'English', link: '/docs/about/articles-en' },
          ],
        },
      ],
    },
    // footer: {
    //   message: '本博客是从很老很老的vuepress迁移过来的，上次更新时间：2023-05',
    // },

    socialLinks: [{ icon: 'github', link: 'https:/github.com/JerryYuanJ/' }],
  },
})
