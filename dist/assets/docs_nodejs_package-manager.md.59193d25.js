import{_ as s,c as a,o as n,a as e}from"./app.af7acbbc.js";const g=JSON.parse('{"title":"\u5305\u7BA1\u7406\u5668","description":"","frontmatter":{"title":"\u5305\u7BA1\u7406\u5668"},"headers":[{"level":2,"title":"NPM","slug":"npm","link":"#npm","children":[{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E","link":"#\u914D\u7F6E","children":[]}]},{"level":2,"title":"PNPM","slug":"pnpm","link":"#pnpm","children":[{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E-1","link":"#\u914D\u7F6E-1","children":[]}]}],"relativePath":"docs/nodejs/package-manager.md","lastUpdated":1664893492000}'),l={name:"docs/nodejs/package-manager.md"},p=e(`<h1 id="node-js-\u5305\u7BA1\u7406\u5668" tabindex="-1">Node.js \u5305\u7BA1\u7406\u5668 <a class="header-anchor" href="#node-js-\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a></h1><p>\u5B89\u88C5 Node.js \u540E\u4F1A\u5E26\u6709\u9ED8\u8BA4\u7684 Node.js \u5305\u7BA1\u7406\u5DE5\u5177 npm</p><h2 id="npm" tabindex="-1">NPM <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h2><p>npm \u662F\u968F\u540C Node.js \u4E00\u8D77\u5B89\u88C5\u7684\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u662F\u5E38\u7528\u7684\u524D\u7AEF\u5305\u7BA1\u7406\u5DE5\u4F5C\u3002</p><h3 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><ul><li><p>\u4FEE\u6539\u914D\u7F6E\u540E\u65E0\u6CD5\u4F7F\u7528</p><p>\u5982\u679C\u9ED8\u8BA4\u4F4D\u7F6E\u4FEE\u6539\u5728\u67D0\u4E9B\u76EE\u5F55\u4E0B\u65E0\u6CD5\u4F7F\u7528\uFF0C\u5F88\u5927\u53EF\u80FD\u662F\u5BF9\u8BE5\u76EE\u5F55\u7684\u6743\u9650\u4E0D\u591F\uFF0C\u53EF\u5C1D\u8BD5\u7528\u7BA1\u7406\u5458\u8EAB\u4EFD\u6267\u884C\u547D\u4EE4\u6216\u4FEE\u6539\u914D\u7F6E\u7684\u6587\u4EF6\u5939\u5B89\u5168\u6743\u9650\uFF08\u5C5E\u6027-\u5B89\u5168-\u7F16\u8F91-\u9009\u62E9\u81EA\u5DF1\u7684\u8D26\u6237-\u52FE\u9009\u5B8C\u5168\u63A7\u5236\uFF09</p></li><li><p>\u5982\u679C\u8DEF\u5F84\u6709\u7A7A\u683C\uFF0C\u6267\u884C\u547D\u4EE4\u8BBE\u7F6E\u65F6\u9700\u8981\u4F7F\u7528\u5F15\u53F7\u5C06\u8DEF\u5F84\u5305\u8D77\u6765</p></li></ul></div><ul><li><p>\u6DD8\u5B9D\u955C\u50CF</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm config set registry https://registry.npmmirror.com/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><details class="details custom-block"><summary>\u5176\u4ED6\u5305\u955C\u50CF</summary><ul><li>Electron \u955C\u50CF</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm config set electron_mirror https://npm.taobao.org/mirrors/electron/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>electron-builder-binaries \u955C\u50CF</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm config set electron_builder_binaries_mirror https://npm.taobao.org/mirrors/electron-builder-binaries/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></details></li><li><p>\u9ED8\u8BA4\u4F4D\u7F6E</p><ul><li>\u7F13\u5B58\u4F4D\u7F6E\uFF08<code>E:\\nodejs\\node_cache\\</code>\u4E3A\u4F7F\u7528 npm \u5B89\u88C5\u5305\u65F6\u7F13\u5B58\u7684\u4F4D\u7F6E\uFF09</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm config set cache E:\\nodejs\\node_cache\\</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u5168\u5C40\u5305\u4F4D\u7F6E\uFF08<code>E:\\nodejs\\node_cache\\</code>\u4E3A\u4F7F\u7528 npm \u5B89\u88C5\u7684\u5168\u5C40\u5305\u7684\u4F4D\u7F6E\uFF09</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm config set prefix E:\\nodejs\\</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h2 id="pnpm" tabindex="-1">PNPM <a class="header-anchor" href="#pnpm" aria-hidden="true">#</a></h2><p>pnpm \u662F\u901F\u5EA6\u5FEB\u3001\u8282\u7701\u78C1\u76D8\u7A7A\u95F4\u7684\u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\u3002</p><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 npm \u5B89\u88C5</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -g pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u914D\u7F6E-1" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E-1" aria-hidden="true">#</a></h3><p>pnpm \u4E0E npm \u5171\u7528\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6(.npmrc)</p><ul><li><p>\u9ED8\u8BA4\u4F4D\u7F6E</p><ul><li>\u7F13\u5B58\u4F4D\u7F6E(<code>E:\\.pnpm-store\\</code>\u4E3A\u4F7F\u7528 pnpm \u4F7F\u7528\u5305\u65F6\u7F13\u5B58\u7684\u4F4D\u7F6E)</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm config set store-dir E:\\.pnpm-store\\</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul>`,15),c=[p];function o(t,i,r,d,u,m){return n(),a("div",null,c)}const _=s(l,[["render",o]]);export{g as __pageData,_ as default};