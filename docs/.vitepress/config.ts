import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/yaml-study/",
    title: "YAML 学习",
    description: "YAML 学习记录",
    lastUpdated: true,
    head: [
        ['link', {rel: 'icon', href: '/yaml-study/images/favicon.svg'}],
    ],
    themeConfig: {
        logo: "/images/favicon.svg",
        siteTitle: "",
        outlineTitle: "内容导航",
        outline: 'deep',
        lastUpdatedText: "最后更新时间",
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: "https://github.com/curder/yaml-study/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/yaml-study'}
        ],
        nav: [],
        sidebar: {},
    }
});