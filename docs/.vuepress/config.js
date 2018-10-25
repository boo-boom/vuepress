module.exports = {
    port: '8080',
    base: '/vuepress/',
    dest: 'docs/.vuepress/dist',
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/logo.ico'
        }],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'yit-node',
            description: 'yit-node-doc'
        }
    },
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
    },
}