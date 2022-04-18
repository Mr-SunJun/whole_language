import {defineUserConfig} from 'vuepress-vite'
import type {DefaultThemeOptions} from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'en-CN',
    title: '知识体系',
    description: 'Just playing around',
    plugins: [
        [
            '@vuepress/docsearch',
            {
                apiKey: '<API_KEY>',
                indexName: '<INDEX_NAME>',
                locales: {
                    '/': {
                        placeholder: 'Search Documentation',
                        translations: {
                            button: {
                                buttonText: 'Search Documentation',
                            },
                        },
                    },
                    '/zh/': {
                        placeholder: '搜索文档',
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                            },
                        },
                    },
                },
            },
        ],
    ],
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        //logo.png 路由默认配置public 下的images的png图名
        logo: '/images/logo.png',
        navbar: [
            // NavbarItem
            {
                text: 'Foo',
                link: '/foo/',
            },
            // NavbarGroup
            {
                text: 'Group',
                children: ['/group/foo.md', '/group/bar.md'],
            },
            // 字符串 - 页面文件路径
            '/bar/README.md',
            // 嵌套 Group - 最大深度为 2
            {
                text: 'Group',
                children: [
                    {
                        text: 'Java',
                        children: ['/group/sub/foo.md', '/group/sub/bar.md','/group/sub/bar.md','/group/sub/bar.md'],
                    },
                    {
                        text: 'Python',
                        children: ['/group/sub/foo.md', '/group/sub/bar.md','/group/sub/bar.md','/group/sub/bar.md'],
                    },
                    {
                        text: 'Vue',
                        children: ['/group/sub/foo.md', '/group/sub/bar.md','/group/sub/bar.md','/group/sub/bar.md'],
                    }
                ],
            },

        ],
    },

})
