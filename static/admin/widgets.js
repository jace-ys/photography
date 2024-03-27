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
    ],
    pattern: /^{{< landscape "(\S+)" >}}$/,
    fromBlock: function (match) {
      return {
        src: match[1],
      };
    },
    toBlock: function (obj) {
      return `{{< landscape "${obj.src}" >}}`;
    },
    toPreview: function (obj) {
      return `{{< landscape "${obj.src}" >}}`;
    },
  },

  portrait: {
    id: "portrait",
    label: "Portrait Image",
    fields: [
      { name: "src", label: "Source", widget: "image", choose_url: false },
    ],
    pattern: /^{{< portrait "(\S+)" >}}$/,
    fromBlock: function (match) {
      return {
        src: match[1],
      };
    },
    toBlock: function (obj) {
      return `{{< portrait "${obj.src}" >}}`;
    },
    toPreview: function (obj) {
      return `{{< portrait "${obj.src}" >}}`;
    },
  },
}

Object.values(shortcodes).forEach(component => {
  CMS.registerEditorComponent(component);
});
