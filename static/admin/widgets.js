const shortcodes = {
  youtube: {
    id: "youtube",
    label: "Youtube Video",
    fields: [
      { name: "id", label: "Video ID", widget: "string" },
    ],
    pattern: /^{{< youtube (\S+) >}}$/,
    fromBlock: function (match) {
      return {
        id: match[1],
      };
    },
    toBlock: function (obj) {
      return `{{< youtube ${obj.id} >}}`;
    },
    toPreview: function (obj) {
      return `{{< youtube ${obj.id} >}}`;
    },
  },

  landscape: {
    id: "landscape",
    label: "Landscape Image",
    fields: [
      { name: "src", label: "Source", widget: "image", choose_url: false },
      { name: "title", label: "Title", widget: "string" },
    ],
    pattern: /^{{< landscape "(\S+)" "(\S+)" >}}$/,
    fromBlock: function (match) {
      return {
        src: match[1],
        title: match[2],
      };
    },
    toBlock: function (obj) {
      return `{{< landscape "${obj.src}" "${obj.title}" >}}`;
    },
    toPreview: function (obj) {
      return `{{< landscape "${obj.src}" "${obj.title}" >}}`;
    },
  },

  portrait: {
    id: "portrait",
    label: "Portrait Image",
    fields: [
      { name: "src", label: "Source", widget: "image", choose_url: false },
      { name: "title", label: "Title", widget: "string" },
    ],
    pattern: /^{{< portrait "(\S+)" "(\S+)" >}}$/,
    fromBlock: function (match) {
      return {
        src: match[1],
        title: match[2],
      };
    },
    toBlock: function (obj) {
      return `{{< portrait "${obj.src}" "${obj.title}" >}}`;
    },
    toPreview: function (obj) {
      return `{{< portrait "${obj.src}" "${obj.title}" >}}`;
    },
  },
}

Object.values(shortcodes).forEach(component => {
  CMS.registerEditorComponent(component);
});
