module.exports = {
  dest: 'dist',
  title: 'Jerry 个人博客',
  description: 'Jerry\'s blog',
  // temp: '.temp',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: `/manifest.json` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['script', {}, `
      var _mtac = {"senseQuery":1};
      (function() {
        var mta = document.createElement("script");
        mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
        mta.setAttribute("name", "MTAH5");
        mta.setAttribute("sid", "500708667");
        mta.setAttribute("cid", "500708668");
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(mta, s);
      })();
    `]
  ],
  serviceWorker: false,
  themeConfig: {
    repo: 'JerryYuanJ/',
    docsDir: 'docs',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '算法',
        link: '/algorithm/'
      },
      {
        text: '前端基础',
        items: [
          { text: 'JavaScript', link: '/basic/js/index' },
          { text: 'CSS', link: '/basic/css/index' },
          { text: 'HTML', link: '/basic/html/index' }
        ]
      },
      {
        text: '前端框架',
        items: [
          { text: 'Vue', link: '/tools/vue/index' },
          { text: 'Snabbdom', link: '/tools/snabbdom/index' },
          { text: 'Others', link: '/tools/others/index' },
        ]
      },
      {
        text: '技能拓展',
        link: '/backend/'
      },
      {
        text: 'Webpack',
        link: '/tools/webpack/'
      },
      {
        text: 'HTTP',
        link: '/http/'
      },
      {
        text: 'About Me',
        link: '/about/'
      }
    ],
    sidebar: {
      '/algorithm/': [
        {
          title: 'Easy',
          collapsable: false,
          children: [
            ['easy/valid-parentheses', '有效的括号']
          ]
        },
        {
          title: 'Medium',
          collapsable: false,
          children: [
            ['medium/find-longest-substr-length', '求最长子串的长度'],
          ]
        },
        {
          title: 'Hard',
          collapsable: false,
          children: []
        },
        {
          title: 'Other',
          collapsable: false,
          children: [
            ['other/list-to-tree', '列表转成树结构']
          ]
        }
      ],
      '/tools/vue/': [
        {
          title: 'Vue',
          collapsable: false,
          children: [
            ['vue/reactivity', '响应式原理'],
            ['vue/keep-alive', 'keep-alive组件原理'],
            ['vue/async-component', '异步组件原理']
          ],
        },
        {
          title: 'Vuex',
          collapsable: false,
          children: [
            ['vuex/01-install', 'Vuex 的安装'],
            ['vuex/02-state', 'State 工作原理'],
            ['vuex/03-getter', 'Getter 工作原理'],
            ['vuex/04-mutation', 'Mutation 工作原理'],
          ],
        },
        {
          title: 'VueRouter',
          collapsable: false,
          children: [],
        },
      ],
      '/tools/snabbdom/': [
        {
          title: 'Snabbdom',
          collapsable: false,
          children: [
            ['01-vnode', '什么是 VNode'],
            ['02-patch', '神奇的 patch'],
            ['03-modules', '锦上添花的 modules'],
            ['04-thunk', '优化 diff 的 thunks'],
            ['05-others', 'Q&A'],
          ],
        }
      ],
      '/tools/webpack/': [
        {
          title: '配置大全',
          collapsable: false,
          children: [
            ['entry-context', 'entry 和 context'],
            ['output', 'output'],
            ['dev-server', 'devServer'],
            ['performance', 'performance'],
            ['watch', 'watch 和 watchOptions'],
            ['resolve', 'resolve 和 resolveLoader'],
            ['externals', 'externals 和 externalsType'],
            ['module', 'module'],
            ['optimization', 'optimization'],
          ],
        },
        {
          title: '优化技巧',
          collapsable: false,
          children: [
            ['optimize', 'Webpack优化技巧'],
          ],
        },
        {
          title: '进阶学习',
          collapsable: false,
          children: [
            ['tappable', '事件系统的核心 - Tappable'],
            ['hashes', 'hash, chunkhash 和 contenthash'],
            ['loader', 'Webpack Loader'],
            ['plugin', 'Webpack Plugin'],
          ],
        },
      ],
      '/tools/others/': [
        {
          title: 'Axios',
          collapsable: false,
          children: [
            ['axios/', 'Axios源码分析']
          ]
        },
        {
          title: 'Babel',
          collapsable: false,
          children: [
            ['babel/', 'Babel详解']
          ]
        },
      ],
      '/basic/js/': [
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            ['data-compare', '数据类型转换'],
            // ['base/js/oo', '面向对象编程'],
            ['reduce', 'reduce方法详解'],
            ['fetch', 'fetch方法详解'],
            ['request-animation-frame', 'requestAnimationFrame'],
            ['debounce-throttle', '函数节流和防抖'],
            ['module', '前端模块化'],
            ['web-component', 'Web Component & Shadow DOM'],
          ]
        },
        {
          title: 'Coding With JS',
          collapsable: false,
          children: [
            ['promise', '实现Promise'],
            ['bind', '实现apply/call/bind'],
            ['new', '实现new操作符'],
            ['create', '实现Object.create()'],
            ['deep-clone', '实现深拷贝'],
            ['add-big-number', '实现大数相加'],
            ['sleep', '实现sleep功能'],
          ]
        }
      ],
      '/basic/html/': [
        {
          title: 'HTML',
          collapsable: false,
          children: [

          ]
        },
      ],
      '/basic/css/': [
        {
          title: 'CSS',
          collapsable: false,
          children: [
            ['box', '盒模型与BFC'],
            ['animation', '帧动画-Animation-详解'],
            ['animation-demos', '帧动画-Animation-案例'],
            ['grid', '神奇的Grid系统'],
            ['util', '⭐️CSS常用样式合集'],
          ]
        },
      ],
      '/http/': [
        {
          title: 'HTTP',
          collapsable: false,
          children: [
            ['/http/history', 'HTTP的发展历程'],
            ['/http/cache', 'HTTP缓存'],
            ['/http/cookie', 'HTTP Cookie'],
            ['/http/headers', 'HTTP Headers'],
            ['/http/status-code', 'HTTP Status Code'],
            ['/http/https', 'HTTPS'],
            ['/http/cors', '跨域与CORS'],
            ['/http/hand-shake', 'TCP / 三次握手和四次挥手'],
            ['/http/security', 'Web安全'],
            // csp ?
          ]
        }
      ],
      '/backend/': [
        {
          title: 'Docker',
          collapsable: false,
          children: [
            ['docker/basic', '基本概念'],
            ['docker/commands', '常用命令'],
          ]
        },
        {
          title: 'Nginx',
          collapsable: false,
          children: [
            ['nginx/guide', 'Hello Nginx'],
            ['nginx/demo', '常用配置'],
          ]
        }
      ],
      '/about/': [
        {
          title: '关于我',
          collapsable: false,
          children: [
            ['', '我是谁'],
            ['/about/resume', '个人简历'],
            ['/about/resume-en', 'Resume']
          ]
        },
        {
          title: '好文共赏',
          collapsable: false,
          children: [
            ['/about/articles-zh', '中文'],
            ['/about/articles-en', 'English']

          ],
        },
        {
          title: '随记',
          collapsable: false,
          children: [
            ['/about/2020-06', '2020-06']
          ],
        },
      ]
    }
  }
}