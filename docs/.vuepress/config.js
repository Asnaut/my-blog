module.exports = {
  title: "Kyle Liu's Blog",
  description: "Yuhang Liu",
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
        children: ["/article/vueLearning/vueCom.md"]
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
