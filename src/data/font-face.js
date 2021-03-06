define(function () {
  return {
    name: "font-face",
    description: "The @font-face rule lets you use any font as a web font. It is supported by the majority of browsers. While all browsers support the syntax, not every browser supports the same [font format](#font%20format).\n",
    specification: "http://www.w3.org/TR/css3-fonts/#font-face-rule",
    keywords: ['@font-face', 'fontface', 'font face', 'font', 'webfont'],
    browsers: [
      { name: "ie", range: "-", support: "yes", note: "Internet Explorer 6, 7, and 8 only support the Embedded OpenType (EOT) format. Internet Explorer 9 and above supports multiple formats." },
      { name: "chrome", range: "-", support: "yes" },
      { name: "firefox", range: "-", support: "yes" },
      { name: "safari", range: "-", support: "yes" },
      { name: "ios", range: "-", support: "yes", note: "Safari for iOS 3.2 to 4.1 only support SVG fonts." },
      { name: "opera", range: "-", support: "yes" },
      { name: "android", range: "-", support: "yes" }
    ],
    features: [
      {
        name: "font-family (font-face)",
        description: "The `font-family` property (when used inside an @font-face rule) gives a web font a name by which it can be referenced in a CSS font stack.",
        specification: "http://www.w3.org/TR/css3-fonts/#font-family-desc",
        keywords: ['font-family', 'family', 'font', 'typeface'],
        browsers: [
          { name: "ie", range: "-", support: "yes", note: "Internet Explorer limits the length of a font-family to 32 characters." },
          { name: "chrome", range: "-", support: "yes" },
          { name: "firefox", range: "-", support: "yes" },
          { name: "safari", range: "-", support: "yes" },
          { name: "ios", range: "-", support: "yes" },
          { name: "opera", range: "-", support: "yes" },
          { name: "android", range: "-", support: "yes" }
        ]
      },
      {
        name: "src",
        description: "The `src` property specifies one or more locations for font data. An optional format hint describes the format the font is in. This can be used by the browser to select a preferred font format. Support for [font formats](#font%format) differs from browser to browser.",
        specification: "http://www.w3.org/TR/css3-fonts/#descdef-src",
        keywords: ['font', 'src'],
        browsers: [
          { name: "ie", range: "6-8", support: "partial", note: "Internet Explorer 6 to 8 only support a single url, and always download fonts immediately (instead of checking to see if they are used." },
          { name: "ie", range: "9-", support: "yes" },
          { name: "chrome", range: "-", support: "yes" },
          { name: "firefox", range: "-", support: "yes" },
          { name: "safari", range: "-", support: "yes" },
          { name: "ios", range: "-", support: "yes" },
          { name: "opera", range: "-", support: "yes" },
          { name: "android", range: "-", support: "yes" }
        ],
        features: [
          {
            name: "WOFF",
            description: "The Web Open Font Format (WOFF) is a compressed container format for either [TrueType or OpenType fonts](#TTF/OTF).",
            specification: "http://www.w3.org/TR/WOFF/",
            keywords: ['woff', 'format', 'web font format', 'font format'],
            browsers: [
              { name: "ie", range: "-8", support: "no", note: "Internet Explorer 6 to 8 only support Embedded OpenType (EOT)." },
              { name: "ie", range: "9-", support: "yes" },
              { name: "chrome", range: "4", support: "no" },
              { name: "chrome", range: "5-", support: "yes" },
              { name: "firefox", range: "-", support: "yes" },
              { name: "safari", range: "-5", support: "no" },
              { name: "safari", range: "5.1-", support: "yes" },
              { name: "ios", range: "-4.3", support: "no" },
              { name: "ios", range: "5.1-", support: "yes" },
              { name: "opera", range: "-11", support: "no" },
              { name: "opera", range: "11.1", support: "yes" },
              { name: "android", range: "-4.3", support: "no" },
              { name: "android", range: "4.4-", support: "yes" }
            ]
          },
          {
            name: "WOFF2",
            description: "The Web Open Font Format 2 (WOFF2) is a compressed container format for either [TrueType or OpenType fonts](#TTF/OTF). It offers higher compression rates than WOFF at the expense of compression time.",
            specification: "http://www.w3.org/TR/WOFF2/",
            keywords: ['woff', 'format', 'web font format', 'font format'],
            browsers: [
              { name: "ie", range: "-", support: "no" },
              { name: "chrome", range: "-35", support: "no" },
              { name: "chrome", range: "36-", support: "yes" },
              { name: "firefox", range: "-38", support: "no" },
              { name: "firefox", range: "39-", support: "yes" },
              { name: "safari", range: "-", support: "no" },
              { name: "ios", range: "-", support: "no" },
              { name: "opera", range: "-22", support: "no" },
              { name: "opera", range: "23-", support: "yes" },
              { name: "android", range: "-", support: "no" }
            ]
          },
          {
            name: "EOT",
            description: "The Embedded OpenType format is Microsoft's proprietary font format used exclusively in Internet Explorer. It is a container format that can contain either [TrueType or OpenType fonts](#TTF/OTF) (though the format supports OpenType fonts, Internet Explorer 8 and earlier do not). EOT fonts can optionally be compressed, but are usually not.",
            specification: "http://www.w3.org/Submission/EOT/",
            keywords: ['eot', 'format', 'web font format', 'font format', 'embedded opentype'],
            browsers: [
              { name: "ie", range: "-", support: "yes", note: "The EOT format only supports embedding TrueType fonts in Internet Explorer 8 and below." },
              { name: "chrome", range: "-", support: "no" },
              { name: "firefox", range: "-", support: "no" },
              { name: "safari", range: "-", support: "no" },
              { name: "ios", range: "-", support: "no" },
              { name: "opera", range: "-", support: "no" },
              { name: "android", range: "-", support: "no" }
            ]
          },
          {
            name: "TTF/OTF",
            description: "The TrueType and OpenType font formats are raw unmodified fonts. While browser support is fairly good for these formats, it is highly recommended to use either WOFF2 or WOFF in order to reduce file size.",
            specification: "http://www.microsoft.com/typography/otspec/",
            keywords: ['ttf', 'truetype', 'opentype', 'otf', 'format', 'web font format', 'font format'],
            browsers: [
              { name: "ie", range: "-8", support: "no" },
              { name: "ie", range: "9-", support: "yes", note: "The fonts need their installable bit set for fonts to load." },
              { name: "chrome", range: "-", support: "yes" },
              { name: "firefox", range: "-", support: "yes" },
              { name: "safari", range: "-", support: "yes" },
              { name: "ios", range: "-4.1", support: "no" },
              { name: "ios", range: "4.3-", support: "yes" },
              { name: "opera", range: "-", support: "yes" },
              { name: "android", range: "-", support: "yes", note: "Due to a bug fonts need their installable bit set between versions 3.1 and 4.1." }
            ]
          },
          {
            name: "SVG fonts",
            description: "SVG fonts are outlines generated from either TrueType or OpenType fonts. They lack many of the required features necessary to properly display text, nor do they support advanced OpenType features. Recently they have also been marked as deprecated in Chrome and Opera. **Do not use them**.",
            specification: "http://www.w3.org/TR/SVG/fonts.html",
            keywords: ['svg', 'vector', 'scalable', 'graphics', 'format', 'web font format', 'font format'],
            browsers: [
              { name: "ie", range: "-", support: "no" },
              { name: "firefox", range: "-", support: "no" },
              { name: "chrome", range: "-37", support: "yes" },
              { name: "chrome", range: "38-", support: "partial", note: "Starting from Chrome 38 SVG fonts are disabled on all platforms except Windows XP and Windows Vista. On these platforms SVG fonts still work but are deprecated." },
              { name: "safari", range: "-", support: "yes" },
              { name: "opera", range: "-24", support: "yes" },
              { name: "opera", range: "25-", support: "yes", note: "Starting from Opera 25 SVG fonts are disabled on all platforms except Windows XP and Windows Vista. On these platforms SVG fonts still work but are deprecated." },
              { name: "android", range: "-2.3", support: "no" },
              { name: "android", range: "3-", support: "yes" }
            ]
          }
        ]
      },
      {
        name: "font-weight (font-face)",
        description: "When used inside a `@font-face` rule the `font-weight` property is used to classify a web font as having a certain weight. This property does not affect rendering and is only used for font matching (though it may affect fallback fonts and faux styles).",
        specification: "http://www.w3.org/TR/css3-fonts/#descdef-font-weight",
        keywords: ['font-weight', 'bold', 'weight'],
        browsers: [
          { name: "ie", range: "-", support: "yes" },
          { name: "chrome", range: "-", support: "yes" },
          { name: "firefox", range: "-", support: "yes" },
          { name: "safari", range: "-", support: "yes" },
          { name: "ios", range: "-", support: "yes" },
          { name: "opera", range: "-", support: "yes" },
          { name: "android", range: "-", support: "yes" }
        ]
      },
      {
        name: "font-style (font-face)",
        description: "When used inside a `@font-face` rule the `font-style` property is used to classify a web font as having a certain style (e.g. `italic`, `oblique`). This property does not affect rendering and is only used for font matching (though it may affect fallback fonts and faux styles).",
        specification: "http://www.w3.org/TR/css3-fonts/#descdef-font-style",
        keywords: ['font-style', 'style', 'italic', 'oblique'],
        browsers: [
          { name: "ie", range: "-", support: "yes" },
          { name: "chrome", range: "-", support: "yes" },
          { name: "firefox", range: "-", support: "yes" },
          { name: "safari", range: "-", support: "yes" },
          { name: "ios", range: "-", support: "yes" },
          { name: "opera", range: "-", support: "yes" },
          { name: "android", range: "-", support: "yes" }
        ]
      },
      {
        name: "font-stretch (font-face)",
        description: "When used inside a `@font-face` rule the `font-stretch` property is used to classify a web font as having a certain style (e.g. condensed, expanded). This property does not affect rendering and is only used for font matching (though it may affect fallback fonts and faux styles).",
        specification: "http://www.w3.org/TR/css3-fonts/#descdef-font-stretch",
        keywords: ['font-stretch', 'stretch', 'condensed', 'expanded'],
        browsers: [
          { name: "ie", range: "-8", support: "no" },
          { name: "ie", range: "9-", support: "yes" },
          { name: "chrome", range: "-", support: "no" },
          { name: "firefox", range: "-8", support: "yes", note: "Firefox 3.6 to 8 on Windows do not support font-stretch. The font-stretch property is supported from version 3.6 on all other platforms." },
          { name: "firefox", range: "8-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-", support: "no" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "font-variant (font-face)",
        description: "When used inside a `@font-face` rule the `font-variant` property is used to specify a default font variation for the web font.",
        specification: "http://www.w3.org/TR/css3-fonts/#descdef-font-variant",
        keywords: ['font-variant', 'variant', 'small-caps'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
          { name: "chrome", range: "-", support: "no", note: "Web fonts fail to render if font-variant is used within @font-face." },
          { name: "firefox", range: "-", support: "no" },
          { name: "safari", range: "-", support: "no", note: "Web fonts fail to render if font-variant is used within @font-face." },
          { name: "ios", range: "-", support: "no", note: "Web fonts fail to render if font-variant is used within @font-face." },
          { name: "opera", range: "-", support: "no", note: "Web fonts fail to render if font-variant is used within @font-face." },
          { name: "android", range: "-", support: "no", note: "Web fonts fail to render if font-variant is used within @font-face." }
        ]
      },
      {
        name: "font-feature-settings (font-face)",
        specification: "http://www.w3.org/TR/css3-fonts/#descdef-font-feature-settings",
        description: "The `font-feature-settings` property can be used to set default OpenType features within @font-face rules.",
        keywords: ['font-feature-settings', 'feature-settings', 'feature', 'features', 'ligatures', 'small-caps', 'opentype'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
          { name: "chrome", range: "-", support: "no" },
          { name: "firefox", range: "-19", support: "no" },
          { name: "firefox", range: "20-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-", support: "no" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "unicode-range",
        description: "The unicode-range property offers a way to tell the browser which unicode characters are included in a font. It can use this information to selectively download and display fonts. For a browser to have full support it must both download and display the font selectively. Partial support means that a browser only uses the given ranges to selectively display characters.",
        specification: "http://www.w3.org/TR/css3-fonts/#descdef-unicode-range",
        keywords: ['unicode-range', 'range', 'unicode', 'subset'],
        browsers: [
          { name: "ie", range: "-8", support: "no" },
          { name: "ie", range: "9-", support: "partial", note: "Internet Explorer only supports the range syntax with an uppercase U (e.g. U+65, U+66). Support for lowercase ranges (e.g. u+65, u+66) was added to the CSS specification after Internet Explorer shipped, so you should always use ranges with an uppercase U for maximum compatibility." },
          { name: "chrome", range: "-35", support: "partial" },
          { name: "chrome", range: "36-", support: "yes" },
          { name: "firefox", range: "-35", support: "no" },
          { name: "firefox", range: "36-", support: "yes" },
          { name: "safari", range: "-", support: "partial" },
          { name: "ios", range: "-", support: "partial" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-22", support: "partial" },
          { name: "opera", range: "23-", support: "yes" },
          { name: "android", range: "-3", support: "no" },
          { name: "android", range: "4-", support: "partial" }
        ]
      }
    ]
  };
});
