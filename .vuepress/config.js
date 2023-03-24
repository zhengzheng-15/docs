// .vuepress/config.js
module.exports = {
    themeConfig: {
        logo: '/assets/img/logo-2022igem.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about/' },
            { text: 'External', link: 'https://google.com' },
            {
              text: 'Languages',
              ariaLabel: 'Language Menu',
              items: [
                { text: 'Chinese', link: '/language/chinese/' },
                { text: 'Japanese', link: '/language/japanese/' }
              ]
            },
            {
                text: 'Languages2',
                items: [
                  { text: 'Group1', items: [{ text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' }] },
                  { text: 'Group2', items: [{ text: 'Chinese2', link: '/language/chinese/' },
                  { text: 'Japanese2', link: '/language/japanese/' }] }
                ]
            },
        ],
        sidebar: 'auto',
        sidebarDepth: 3,
        search: false,
    }
  }