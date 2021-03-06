const categories = {
  results: [
    {
      name: "홈",
      category: "home",
      waitForFree: false,
      newAlert: false,
      selected: false,
    },
    {
      name: "웹툰",
      category: "webtoon",
      waitForFree: true,
      newAlert: true,
      selected: true,
    },
    {
      name: "웹소설",
      category: "webnovel",
      waitForFree: true,
      newAlert: true,
      selected: false,
    },
    {
      name: "영화",
      category: "movie",
      waitForFree: false,
      newAlert: true,
      selected: false,
    },
    {
      name: "방송",
      category: "broadcast",
      waitForFree: false,
      newAlert: true,
    },
    {
      name: "책",
      category: "book",
      waitForFree: false,
      newAlert: true,
      selected: false,
    },
  ],
};

module.exports = categories;
