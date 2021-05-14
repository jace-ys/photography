const shortcodes = {
  youtube: {
    id: "youtube",
    label: "Youtube",
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
      { name: "src", label: "Source", widget: "image" },
      { name: "alt", label: "Alt", widget: "string" },
    ],
    pattern: /^{{< landscape "(\S+)" "(\S+)" >}}$/,
    fromBlock: function (match) {
      return {
        src: match[1],
        alt: match[2],
      };
    },
    toBlock: function (obj) {
      return `{{< landscape "${obj.src}" "${obj.alt}" >}}`;
    },
    toPreview: function (obj) {
      return `{{< landscape "${obj.src}" "${obj.alt}" >}}`;
    },
  },

  portrait: {
    id: "portrait",
    label: "Portrait Image",
    fields: [
      { name: "src", label: "Source", widget: "image" },
      { name: "alt", label: "Alt", widget: "string" },
    ],
    pattern: /^{{< portrait "(\S+)" "(\S+)" >}}$/,
    fromBlock: function (match) {
      return {
        src: match[1],
        alt: match[2],
      };
    },
    toBlock: function (obj) {
      return `{{< portrait "${obj.src}" "${obj.alt}" >}}`;
    },
    toPreview: function (obj) {
      return `{{< portrait "${obj.src}" "${obj.alt}" >}}`;
    },
  },
}

Object.values(shortcodes).forEach(component => {
  CMS.registerEditorComponent(component);
});
