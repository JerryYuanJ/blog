module.exports = {
  dest: 'dist',
  title: 'Jerry 个人博客',
  description: 'Jerry\' blog',
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
    ['script', {}, `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?8ae528eeefd4ffa3e939c859d17658e5";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
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
          children: []
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
          children: []
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