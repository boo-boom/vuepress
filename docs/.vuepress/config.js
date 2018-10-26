module.exports = {
    port: '8080',
    base: '/vuepress/',
    dest: 'docs/.vuepress/dist',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'yit-node',
            description: 'yit-node-doc',
        }
    },
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/logo.ico'
        }],
    ],
    themeConfig: {
        nav: [
            {
                text: '关于',
                link: '/about/'
            },
            {
                text: 'Github',
                link: 'https://www.github.com/'
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '开发文档',
                    collapsable: false,
                    children: [
                        '',
                        'yit-mst',
                    ]
                },
            ]
        }
    },
}
