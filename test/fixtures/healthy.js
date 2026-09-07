class Healthy extends ComicSource {
  name = "Fixture";
  key = "healthy";
  version = "1.0.0";
  png =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAC0lEQVQImWNgQAcAABIAAW/6Y7cAAAAASUVORK5CYII=";
  async init() {
    await new Promise((r) => setTimeout(r, 5));
    if (this.loadSetting("mode") !== "test")
      throw Error("Settings must precede init");
    this.saveData("ready", true);
  }
  settings = {
    mode: {
      title: "Mode",
      type: "select",
      options: [{ value: "test" }],
      default: "test",
    },
  };
  card(id) {
    return new Comic({ id, title: "Book " + id, cover: this.png });
  }
  account = {
    login: async (username, password) => {
      if (username !== "tester" || password !== "secret-password")
        throw Error("Wrong fixture credentials");
    },
  };
  search = {
    optionList: [{ options: ["all-All"] }],
    load: async (keyword, options, page) => {
      if (!this.loadData("ready")) throw Error("init race");
      if (keyword !== "test" || options[0] !== "all")
        throw Error("Incorrect search args");
      const response = await Network.get(
        "data:application/json,%7B%22ok%22%3Atrue%7D",
      );
      if (!JSON.parse(response.body).ok) throw Error("Network mismatch");
      return { comics: [this.card(page)], maxPage: 2 };
    },
    loadNext: async (_, __, next) => ({
      comics: [this.card(next ?? "cursor-first")],
      next: next ? null : "cursor-second",
    }),
  };
  explore = [
    {
      title: "Explore",
      type: "singlePageWithMultiPart",
      load: async (page) => {
        if (page !== null) throw Error("Expected null for single-page explore");
        return [{ title: "Section", comics: [this.card("explore")] }];
      },
    },
  ];
  category = {
    title: "Categories",
    parts: [
      {
        name: "Genres",
        type: "fixed",
        itemType: "category",
        categories: ["Action"],
        categoryParams: ["action"],
      },
      {
        name: "Dynamic",
        type: "dynamic",
        loader: async () => [
          {
            label: "Action",
            target: {
              page: "category",
              attributes: { category: "Action", param: "action" },
            },
          },
        ],
      },
    ],
  };
  categoryComics = {
    optionLoader: async () => [{ options: ["new-New"] }],
    load: async (category, param, options, page) => {
      if (category !== "Action" || param !== "action" || options[0] !== "new")
        throw Error("Incorrect category args");
      return { comics: [this.card("cat" + page)], maxPage: 1 };
    },
    ranking: {
      options: ["week-Weekly"],
      load: async (option, page) => ({
        comics: [this.card(option + page)],
        maxPage: 1,
      }),
    },
  };
  favorites = {
    multiFolder: true,
    loadFolders: async () => ({ folders: { main: "Main" } }),
    loadComics: async (_, folder) => {
      if (folder !== "main") throw Error("Missing folder");
      return { comics: [], maxPage: 0 };
    },
  };
  comic = {
    loadInfo: async (id) =>
      new ComicDetails({
        title: "Fixture",
        cover: this.png,
        chapters: new Map([["Group", new Map([["ep1", "Chapter 1"]])]]),
        tags: new Map([["genre", ["action"]]]),
      }),
    loadEp: async (id, ep) => {
      if (ep !== "ep1") throw Error("Wrong chapter");
      return { images: [this.png, this.png] };
    },
    onImageLoad: (url) => ({
      url,
      onResponse: (bytes) => bytes,
      modifyImage:
        "function modifyImage(image) { return image.copyAndRotate90(); }",
    }),
    onThumbnailLoad: (url) => ({ url }),
    loadThumbnails: async () => ({ thumbnails: [this.png], next: null }),
    loadComments: async () => ({ comments: [] }),
    loadChapterComments: async () => ({ comments: [] }),
    onClickTag: (namespace, tag) => ({
      page: "search",
      attributes: { keyword: tag },
    }),
    archive: {
      getArchives: async () => [
        { id: "a", title: "Archive", description: "Fixture" },
      ],
      getDownloadUrl: async () => "https://example.invalid/archive.zip",
    },
  };
}
