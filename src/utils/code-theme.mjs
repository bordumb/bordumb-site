const keywordScopes = [
  "keyword",
  "keyword.control",
  "keyword.operator",
  "keyword.other",
  "storage",
  "storage.type",
  "storage.modifier",
  "punctuation.definition.keyword",
  "invalid",
  "invalid.illegal",
];

const blueScopes = [
  "comment",
  "punctuation.definition.comment",
  "string.comment",
  "string",
  "string.quoted",
  "string.regexp",
  "constant",
  "constant.numeric",
  "constant.language",
  "entity",
  "entity.name",
  "entity.name.function",
  "entity.name.type",
  "entity.name.tag",
  "support",
  "support.function",
  "support.type",
  "variable.language",
  "variable.other.constant",
  "meta.function-call",
  "meta.method-call",
  "markup.heading",
  "markup.link",
];

function codeTheme(name, type, foreground, background, blue, red) {
  return {
    name,
    type,
    semanticHighlighting: false,
    colors: {
      "editor.background": background,
      "editor.foreground": foreground,
    },
    tokenColors: [
      {
        scope: keywordScopes,
        settings: { foreground: red },
      },
      {
        scope: blueScopes,
        settings: { foreground: blue },
      },
    ],
  };
}

export const codeThemes = {
  light: codeTheme(
    "bordumb-light",
    "light",
    "#171815",
    "#e9e7e0",
    "#005cc5",
    "#b42335",
  ),
  dark: codeTheme(
    "bordumb-dark",
    "dark",
    "#f2f3ed",
    "#161916",
    "#79b8ff",
    "#f97583",
  ),
};

export const codeHighlightOptions = Object.freeze({
  themes: codeThemes,
  defaultColor: false,
});
