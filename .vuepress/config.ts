import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "Sparkpixel Server Wiki",
  description: "Sparkpixel服务器WIKI",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({

    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "快速开始", link: "/docs/start/introduce.html" },
      { text: "公告", link: "/docs/notice/all.html" },
      {
        text: "各部门页面",
        children: [
          { text: "城建", link: "/docs/blog/urban" },
          { text: "MTR", link: "/docs/blog/MTR" },
          { text: "城际", link: "/docs/blog/cj" },
          { text: "开发", link: "/docs/blog/kaifa" },
        ],
      },
      { text: "开发指南", link: "/docs/notice/kaifa.html" },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `这是我们的wiki你可以在这寻求相关帮助`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "QQ 群",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>QQ群1：694688016</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
       
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    commentConfig: {
      type: 'giscus',
      options: {
        repo: 'Sparkpixel-Navigation/wiki',
        repoId: 'R_kgDON4TfqA',
        category: 'Announcements',
        categoryId: 'DIC_kwDON4TfqM4Cm5O-',
        mapping: 'pathname',
        strict: '0',
        reactionsEnabled: '1',
        emitMetadata: '0',
        inputPosition: 'bottom',
        theme: 'catppuccin_macchiato',
        lang: 'zh-CN',
        crossorigin: 'anonymous',
        async: true,
      },
    },
  }),
  // debug: true,
});
