export const SITE = {
  website: "https://heybox.top",
  author: "RyanValor",
  profile: "https://github.com/2017fighting",
  desc: "折腾各种开源项目，搭建 homelab，分享那些好用到上头的工具，也偶尔写写折腾背后的思考。代码是方法，系统是容器，记录是和这个复杂世界较劲的一种方式。",
  title: "空雨集",
  ogImage: "heybox-top-og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  postPerArchive: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  genDescriptionMaxLines: 30, // Max number of lines to process
  genDescriptionCount: 200, // If 'more' tag is not found, use this count of characters
  showArchives: true,
  showBackButton: true, // show back button in post detail
  showPageDesc: false, // show page description in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  lang: "zh-Hans-CN", // html lang code. Set this empty and default will be "en"
  langOg: "zh_CN", // Open Graph locale tag, format 'language_TERRITORY' https://ogp.me/#optional
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  wontonCommentUrl: "", // Wonton comment server URL, set to empty string to disable comment
} as const;
