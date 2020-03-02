module.exports = {
  dest: 'dist',
  title: 'Jerry 个人博客',
  description: 'Jerry\'s blog',
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
        link: '/basic/'
      },
      {
        text: 'Vue',
        link: '/vue/'
      },
      {
        text: 'Webpack',
        link: '/webpack/'
      },
      {
        text: 'HTTP',
        link: '/http/'
      },
      {
        text: 'Others',
        link: '/others/'
      },
      {
        text: 'About Me',
        link: '/about/'
      }
    ],
    sidebar: {
      '/algorithm/': [
        {
          title: '算法',
          collapsable: false,
          children: [
            ['subs', '获取子集']
          ]
        }
      ],
      '/vue/': [
        {
          title: 'API实现原理',
          collapsable: false,
          children: []
        },
        {
          title: '内置组件',
          collapsable: false,
          children: [
            ['components/keep-alive', 'keep-alive'],
            ['components/transition', 'transition'],
            ['components/transition-group', 'transition-group'],
            ['components/async-component', '异步组件']
          ]
        }
      ],
      '/webpack/': [
        {
          title: '使用',
          collapsable: false,
        },
        {
          title: '优化',
          collapsable: false,
        }
      ],
      '/others/': [
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
            ['babel/', 'Babel使用']
          ]
        }
      ],
      '/basic/': [
        {
          title: '基础知识',
          collapsable: false,
          children: [
            ['base/module', '前端模块化'],
            ['base/reduce', 'reduce方法详解']
          ]
        },
        {
          title: '模拟原生方法',
          collapsable: false,
          children: [
            ['native/bind', '实现apply/call/bind'],
            ['native/new', '实现new操作符'],
            ['native/create', '实现Object.create()'],
            ['native/promise', '实现Promise'],
          ]
        }
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
      '/about/': [
        {
          title: 'About Me',
          collapsable: false,
          children: []
        }
      ]
    }
  }
}