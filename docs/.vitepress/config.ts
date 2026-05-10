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
      '/': [
        {
          text: 'AI & ML',
          collapsed: false,
          items: [
            { text: '机器学习和人工智能', link: '/08AIandML/1-机器学习和人工智能.md' }
          ]
        },
        {
          text: '能源管理系统',
          collapsed: true,
          items: [
            { text: '能源管理信息系统', link: '/09EMS/1-能源管理信息系统.md' }
          ]
        },
        {
          text: 'IoT & 大数据 & 云',
          collapsed: true,
          items: [
            { text: '物联网', link: '/11IotBigdataCloud/1-物联网.md' },
            { text: '消息件', link: '/11IotBigdataCloud/2-消息件.md' },
            { text: '大数据简介', link: '/11IotBigdataCloud/3-大数据简介.md' },
            { text: '从虚拟机到云计算', link: '/11IotBigdataCloud/4-从虚拟机到云计算.md' },
            { text: '容器化和k8s', link: '/11IotBigdataCloud/5-容器化和k8s.md' }
          ]
        },
        {
          text: '碳中和工具',
          collapsed: true,
          items: [
            { text: 'SAM', link: '/awesome-carbon-neutrality/RenewableEnergy/1-SAM.md' },
            { text: 'PLANHEATTool', link: '/awesome-carbon-neutrality/RenewableEnergy/10-PLANHEATTool.md' },
            { text: 'ModelicaBuildingslibrary', link: '/awesome-carbon-neutrality/RenewableEnergy/11-ModelicaBuildingslibrary.md' },
            { text: 'IDEAS', link: '/awesome-carbon-neutrality/RenewableEnergy/12-IDEAS.md' },
            { text: 'OpenMDAO', link: '/awesome-carbon-neutrality/RenewableEnergy/13-OpenMDAO.md' },
            { text: 'ReOpt', link: '/awesome-carbon-neutrality/RenewableEnergy/2-ReOpt.md' },
            { text: 'pvlib-python', link: '/awesome-carbon-neutrality/RenewableEnergy/3-pvlib-python.md' },
            { text: 'SolarPILOT', link: '/awesome-carbon-neutrality/RenewableEnergy/4-SolarPILOT.md' },
            { text: 'SolarTherm', link: '/awesome-carbon-neutrality/RenewableEnergy/5-SolarTherm.md' },
            { text: 'SolTrace', link: '/awesome-carbon-neutrality/RenewableEnergy/6-SolTrace.md' },
            { text: 'OpenFAST', link: '/awesome-carbon-neutrality/RenewableEnergy/7-OpenFAST.md' },
            { text: 'OpenLCA', link: '/awesome-carbon-neutrality/RenewableEnergy/8-OpenLCA.md' },
            { text: 'FOQUS', link: '/awesome-carbon-neutrality/RenewableEnergy/9-FOQUS.md' },
            { text: 'coolprop-intro', link: '/awesome-carbon-neutrality/RenewableEnergy/coolprop-intro.md' },
            { text: 'sam-ssc', link: '/awesome-carbon-neutrality/RenewableEnergy/sam-ssc.md' }
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
