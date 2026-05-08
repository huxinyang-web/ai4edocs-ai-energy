import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'
import mermaid from 'markdown-it-mermaid-plugin'
import path from 'path'

export default defineConfig({
  title: 'Ai4Energy',
  description: 'Ai4Energy Docs - AI & Energy Applications',
  base: '/ai4edocs-ai-energy/',
  srcDir: '.',
  publicDir: '.vitepress/public',
  ignoreDeadLinks: true,
  vite: {
    resolve: {
      alias: [
        {
          find: '/assets/',
          replacement: path.resolve(__dirname, './public/assets/') + '/'
        }
      ]
    }
  },
  themeConfig: {
    siteTitle: 'Ai4Energy',
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'AI-Energy', icon: 'book', link: '/' },
      { text: 'Cs-Basics', link: 'https://huxinyang-web.github.io/ai4edocs-cs-basics/' },
      { text: 'Dev-Tools', link: 'https://huxinyang-web.github.io/ai4edocs-dev-tools/' },
      { text: 'Modeling', link: 'https://huxinyang-web.github.io/ai4edocs-modeling/' },
      { text: 'Optimization', link: 'https://huxinyang-web.github.io/ai4edocs-optimization/' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'AI & ML',
          collapsed: false,
          items: [
            { text: '机器学习基础', link: '/08AIandML/机器学习基础.md' }
          ]
        },
        {
          text: '能源管理系统',
          collapsed: true,
          items: [
            { text: 'EMS 简介', link: '/09EMS/EMS 简介.md' }
          ]
        },
        {
          text: 'IoT & 大数据 & 云',
          collapsed: true,
          items: [
            { text: '简介', link: '/11IotBigdataCloud/简介.md' },
            { text: 'IoT 物联网基础', link: '/11IotBigdataCloud/IoT 物联网基础.md' },
            { text: '大数据技术', link: '/11IotBigdataCloud/大数据技术.md' },
            { text: '云计算基础', link: '/11IotBigdataCloud/云计算基础.md' },
            { text: '物联网架构', link: '/11IotBigdataCloud/物联网架构.md' }
          ]
        },
        {
          text: 'awesome-carbon-neutrality',
          collapsed: true,
          items: [
            { text: '简介', link: '/awesome-carbon-neutrality/简介.md' },
            { text: '太阳能工具', link: '/awesome-carbon-neutrality/太阳能工具.md' },
            { text: '风能工具', link: '/awesome-carbon-neutrality/风能工具.md' },
            { text: '储能工具', link: '/awesome-carbon-neutrality/储能工具.md' },
            { text: '能源预测', link: '/awesome-carbon-neutrality/能源预测.md' },
            { text: '碳排放计算', link: '/awesome-carbon-neutrality/碳排放计算.md' },
            { text: '能源可视化', link: '/awesome-carbon-neutrality/能源可视化.md' },
            { text: '建筑能源模拟', link: '/awesome-carbon-neutrality/建筑能源模拟.md' },
            { text: '电力系统分析', link: '/awesome-carbon-neutrality/电力系统分析.md' },
            { text: '微电网设计', link: '/awesome-carbon-neutrality/微电网设计.md' },
            { text: '能源经济分析', link: '/awesome-carbon-neutrality/能源经济分析.md' },
            { text: '能源政策工具', link: '/awesome-carbon-neutrality/能源政策工具.md' },
            { text: '可再生能源认证', link: '/awesome-carbon-neutrality/可再生能源认证.md' },
            { text: '能源效率评估', link: '/awesome-carbon-neutrality/能源效率评估.md' },
            { text: '能源数据源', link: '/awesome-carbon-neutrality/能源数据源.md' },
            { text: '能源 API 服务', link: '/awesome-carbon-neutrality/能源 API 服务.md' }
          ]
        }
      ]
    },

    footer: {
      message: '陕 ICP 备 19000424 号 -2 | 陕公网安备 61010302001034 号',
      copyright: 'Copyright © 2024 Ai4Energy'
    },

    editLink: {
      pattern: 'https://github.com/huxinyang-web/ai4edocs-ai-energy/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    returnToTopLabel: '返回顶部',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: 2
    }
  },

  markdown: {
    config: (md) => {
      md.use(katex)
      md.use(mermaid)
    }
  },

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }]
  ]
})
