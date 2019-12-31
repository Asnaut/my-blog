module.exports = {
  title: "Kyle Liu's Blog",
  description: "Yuhang Liu",
  base: "/blog/",
  head: [["link", { rel: "icon", href: "/icon.png" }]],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Article", link: "/article/" },
      { text: "About Me", link: "/aboutMe/" },
      { text: "Github", link: "https://github.com/Asnaut" }
    ],
    sidebar: [
      {
        title: "Vue",
        children: [
          "/article/vueLearning/vueCom.md",
          "/article/vueLearning/vueCli3Tips.md",
          "/article/vueLearning/cookies.md"
        ]
      },
      {
        title: "Machine Learning",
        children: [
          /* ... */
        ]
      },
      {
        title: "NodeJS",
        children: [
          /* ... */
        ]
      }
    ]
  }
};
