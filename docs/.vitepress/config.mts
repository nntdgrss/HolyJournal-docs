import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HolyJournal Документация",
  description: "Документация по API для HolyJournal",
  base: "/HolyJournal-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Главная", link: "/" },
      { text: "Начать", link: "/get-started" },
      { text: "Примеры", link: "/api-examples" },
    ],

    sidebar: [
      {
        text: "Начало",
        items: [
          { text: "Начало работы", link: "/get-started" },
          {
            text: "Получение информации о пользователе",
            link: "/get-user-info",
          },
          {
            text: "Проверки",
            link: "/checkouts",
          },
          {
            text: "Получение списка персонала",
            link: "/get-staffs",
          },
        ],
      },
      {
        text: "Дополнительная информация",
        items: [
          { text: "Справочник рангов", link: "/ranks" },
          { text: "Причины вызова на проверку", link: "/checkout-reason" },
          { text: "Результат проверки", link: "/checkout-result" },
          { text: "Причины бана", link: "/checkout-ban-reason" },
        ],
      },
      {
        text: "Примеры API",
        items: [{ text: "Базовые концепции", link: "/api-examples" }],
      },
      {
        text: "Обработка ошибок",
        items: [{ text: "Обработка ошибок", link: "/error-handling" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/nntdgrss/holyjournal-docs" },
    ],
  },
});
