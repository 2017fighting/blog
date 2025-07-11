import type dayjs from "dayjs";

// Datetime format
// https://day.js.org/docs/en/display/format

// English
// const en = {
//   archives: {
//     title: "Archives",
//     desc: "All the articles I've posted.",
//   },
//   posts: {
//     title: "Posts",
//     desc: "All the articles I've posted.",
//   },
//   tags: {
//     title: "Tags",
//     desc: "All the tags used in posts.",
//   },
//   tag: {
//     title: "Tag: ",
//     desc: (tag: string) => `All the articles with the tag "${tag}".`,
//   },
//   categories: {
//     title: "Categories",
//     desc: "All the categories.",
//   },
//   category: {
//     title: "Category: ",
//     desc: (category: string) =>
//       `All the articles in the category "${category}".`,
//   },
//   about: {
//     title: "About",
//   },
//   search: {
//     title: "Search",
//     desc: "Search any article ...",
//   },
//   notFoundPage: {
//     title: "Page Not Found",
//     toHome: "Go back home",
//     toSearch: "Try searching",
//   },
//   date: {
//     shortFormat(datetime: dayjs.Dayjs): string {
//       return datetime.format("MMM D, YYYY");
//     },
//     fullFormat(datetime: dayjs.Dayjs): string {
//       return datetime.format("MMMM D, YYYY hh:mm A");
//     },
//     published(strDate: string): string {
//       return `Published: ${strDate}`;
//     },
//     updated(strDate: string): string {
//       return `Updated: ${strDate}`;
//     },
//   },
//   pagination: {
//     next: "Next",
//     previous: "Prev",
//   },
//   license: {
//     copyright: "Copyright",
//     statement: "All rights reserved",
//   },
//   common: {
//     backToTop: "Back to Top",
//     themeBtn: "Toggle light & dark mode",
//     allPosts: "All Posts",
//     featuredPosts: "Featured",
//     recentPosts: "Recent Posts",
//   },
// };

//简体中文
const zhHans = {
  archives: {
    title: "归档",
    desc: "所有文章",
  },
  posts: {
    title: "文章",
    desc: "所有文章",
  },
  tags: {
    title: "标签",
    desc: "所有被使用过的标签",
  },
  tag: {
    title: "标签： ",
    desc: (tag: string) => `所有带有标签【"${tag}】的文章".`,
  },
  categories: {
    title: "分类",
    desc: "所有文章的分类",
  },
  category: {
    title: "分类: ",
    desc: (category: string) => `所有属于分类【"${category}】的文章".`,
  },
  about: {
    title: "关于",
  },
  search: {
    title: "搜索",
    desc: "搜索文章...",
  },
  notFoundPage: {
    title: "页面不存在",
    toHome: "返回主页面",
    toSearch: "搜一搜？",
  },
  date: {
    shortFormat(datetime: dayjs.Dayjs): string {
      return datetime.format("YYYY/MM/DD");
    },
    fullFormat(datetime: dayjs.Dayjs): string {
      return datetime.format("YYYY/MM/DD hh:mm A");
    },
    published(strDate: string): string {
      return `发布于： ${strDate}`;
    },
    updated(strDate: string): string {
      return `更新于: ${strDate}`;
    },
  },
  pagination: {
    next: "下一页",
    previous: "上一页",
  },
  license: {
    copyright: "Copyright",
    statement: "All rights reserved",
  },
  common: {
    backToTop: "回到顶部",
    themeBtn: "切换主题",
    allPosts: "所有文章",
    featuredPosts: "精选",
    recentPosts: "最近发布",
  },
};

// 繁體中文
/*
const zhHant: typeof en = {
  archives: {
    title: "歸檔",
    desc: "所有文章。",
  },
  posts: {
    title: "文章",
    desc: "我發過的所有文章。",
  },
  tags: {
    title: "標籤",
    desc: "文章中使用的所有標籤。",
  },
  tag: {
    title: "標籤：",
    desc: (tag: string) => `所有帶有標籤「${tag}」的文章。`,
  },
  categories: {
    title: "分類",
    desc: "所有文章的分類。",
  },
  category: {
    title: "分類：",
    desc: (category: string) => `所有屬於分類「${category}」的文章。`,
  },
  about: {
    title: "關於",
  },
  search: {
    title: "搜尋",
    desc: "搜尋文章 ...",
  },
  notFoundPage: {
    title: "頁面不存在",
    toHome: "回主畫面",
    toSearch: "嘗試搜尋",
  },
  date: {
    shortFormat(datetime: dayjs.Dayjs): string {
      return datetime.format("YYYY/MM/DD");
    },
    fullFormat(datetime: dayjs.Dayjs): string {
      return datetime.format("YYYY/MM/DD hh:mm A");
    },
    published(strDate: string): string {
      return `${strDate} 發佈`;
    },
    updated(strDate: string): string {
      return `${strDate} 更新`;
    },
  },
  pagination: {
    next: "下一頁",
    previous: "上一頁",
  },
  license: {
    copyright: "版權所有",
    statement: "保留所有權利",
  },
  common: {
    backToTop: "回到頂部",
    themeBtn: "切換深色模式",
    allPosts: "所有文章",
    featuredPosts: "精選文章",
    recentPosts: "最新文章",
  },
};
*/

// 日本語 (machine translation)
/*
const ja: typeof en = {
  archives: {
    title: "アーカイブ",
    desc: "投稿したすべての記事。",
  },
  posts: {
    title: "記事",
    desc: "投稿したすべての記事。",
  },
  tags: {
    title: "タグ",
    desc: "記事で使用されたすべてのタグ。",
  },
  tag: {
    title: "タグ: ",
    desc: (tag: string) => `「${tag}」タグが付いたすべての記事。`,
  },
  categories: {
    title: "カテゴリー",
    desc: "すべてのカテゴリー。",
  },
  category: {
    title: "カテゴリー: ",
    desc: (category: string) => `「${category}」カテゴリーのすべての記事。`,
  },
  about: {
    title: "について",
  },
  search: {
    title: "検索",
    desc: "記事を検索",
  },
  notFoundPage: {
    title: "ページが見つかりません",
    toHome: "ホームに戻る",
    toSearch: "検索してみる",
  },
  date: {
    shortFormat(datetime: dayjs.Dayjs): string {
      return datetime.format("YYYY年MM月DD日");
    },
    fullFormat(datetime: dayjs.Dayjs): string {
      return datetime.format("YYYY年MM月DD日 HH:mm");
    },
    published(strDate: string): string {
      return `公開日: ${strDate}`;
    },
    updated(strDate: string): string {
      return `更新日: ${strDate}`;
    },
  },
  pagination: {
    next: "次へ",
    previous: "前へ",
  },
  license: {
    copyright: "Copyright",
    statement: "All rights reserved",
  },
  common: {
    backToTop: "トップに戻る",
    themeBtn: "ライト/ダークモード切替",
    allPosts: "すべての記事",
    featuredPosts: "おすすめ記事",
    recentPosts: "最新記事",
  },
};
*/

// cspell:disable
// Español (machine translation)
/*
const es: typeof en = {
  archives: {
    title: "Archivos",
    desc: "Todos los artículos que he publicado.",
  },
  posts: {
    title: "Artículos",
    desc: "Todos los artículos que he publicado.",
  },
  tags: {
    title: "Etiquetas",
    desc: "Todas las etiquetas utilizadas en los artículos.",
  },
  tag: {
    title: "Etiqueta: ",
    desc: (tag: string) => `Todos los artículos con la etiqueta "${tag}".`,
  },
  categories: {
    title: "Categorías",
    desc: "Todas las categorías.",
  },
  category: {
    title: "Categoría: ",
    desc: (category: string) =>
      `Todos los artículos en la categoría "${category}".`,
  },
  about: {
    title: "Acerca de",
  },
  search: {
    title: "Buscar",
    desc: "Buscar cualquier artículo ...",
  },
  notFoundPage: {
    title: "Página no encontrada",
    toHome: "Volver a inicio",
    toSearch: "Intenta buscar",
  },
  date: {
    shortFormat(datetime: dayjs.Dayjs): string {
      return datetime.format("DD/MM/YYYY");
    },
    fullFormat(datetime: dayjs.Dayjs): string {
      return datetime.format("DD/MM/YYYY HH:mm");
    },
    published(strDate: string): string {
      return `Publicado: ${strDate}`;
    },
    updated(strDate: string): string {
      return `Actualizado: ${strDate}`;
    },
  },
  pagination: {
    next: "Siguiente",
    previous: "Anterior",
  },
  license: {
    copyright: "Copyright",
    statement: "All rights reserved",
  },
  common: {
    backToTop: "Volver arriba",
    themeBtn: "Alternar modo claro/oscuro",
    allPosts: "Todos los artículos",
    featuredPosts: "Destacados",
    recentPosts: "Artículos recientes",
  },
};
*/
// cspell:enable

// Select the language you want to use
// export const _t = zhHant;
// export const _t = en;
export const _t = zhHans;
