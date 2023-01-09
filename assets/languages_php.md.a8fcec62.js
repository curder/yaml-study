import{_ as s,c as a,o as n,a as l}from"./app.bde0c861.js";const A=JSON.parse('{"title":"PHP","description":"","frontmatter":{},"headers":[{"level":2,"title":"Yaml 扩展","slug":"yaml-扩展","link":"#yaml-扩展","children":[{"level":3,"title":"安装 Yaml 扩展","slug":"安装-yaml-扩展","link":"#安装-yaml-扩展","children":[]},{"level":3,"title":"使用 Yaml 扩展","slug":"使用-yaml-扩展","link":"#使用-yaml-扩展","children":[]}]},{"level":2,"title":"Yaml 组件","slug":"yaml-组件","link":"#yaml-组件","children":[]}],"relativePath":"languages/php.md","lastUpdated":1673260683000}'),p={name:"languages/php.md"},e=l(`<h1 id="php" tabindex="-1">PHP <a class="header-anchor" href="#php" aria-hidden="true">#</a></h1><p>在 PHP 中操作 Yaml 可以选择给 PHP 添加 <a href="https://pecl.php.net/package/yaml" target="_blank" rel="noreferrer">yaml 扩展</a> 或者使用 <a href="https://symfony.com/doc/current/components/yaml.html" target="_blank" rel="noreferrer">symfony/yaml 组件</a>来操作 Yaml 文件。</p><h2 id="yaml-扩展" tabindex="-1">Yaml 扩展 <a class="header-anchor" href="#yaml-扩展" aria-hidden="true">#</a></h2><h3 id="安装-yaml-扩展" tabindex="-1">安装 Yaml 扩展 <a class="header-anchor" href="#安装-yaml-扩展" aria-hidden="true">#</a></h3><p>Yaml 扩展<a href="http://pecl.php.net/package/yaml" target="_blank" rel="noreferrer">下载地址</a></p><p>下面演示在 MacOS 上安装 yaml 扩展的流程，具体<a href="https://curder.github.io/setup-mac-for-developer/guide/install/php.html#yaml" target="_blank" rel="noreferrer">流程可以查看这里</a>。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libyaml</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 安装依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">pecl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yaml</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 使用 pecl 命令安装</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yaml</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 检查是否安装成功</span></span>
<span class="line"></span></code></pre></div><h3 id="使用-yaml-扩展" tabindex="-1">使用 Yaml 扩展 <a class="header-anchor" href="#使用-yaml-扩展" aria-hidden="true">#</a></h3><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-XmhnF" id="tab-A46tTiR" checked="checked"><label for="tab-A46tTiR">将 Yaml 转为 PHP 数组</label><input type="radio" name="group-XmhnF" id="tab-73BwwLZ"><label for="tab-73BwwLZ">将 PHP 数组转成 Yaml 格式</label></div><div class="blocks"><div class="language-php active"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## 1. 读内容并转换成数组</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">contents </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;&lt;Yaml</span></span>
<span class="line"><span style="color:#C3E88D;">php:</span></span>
<span class="line"><span style="color:#C3E88D;">preset: laravel</span></span>
<span class="line"><span style="color:#C3E88D;">disabled:</span></span>
<span class="line"><span style="color:#C3E88D;">   - no_unused_imports</span></span>
<span class="line"><span style="color:#C3E88D;">finder:</span></span>
<span class="line"><span style="color:#C3E88D;">   not-name:</span></span>
<span class="line"><span style="color:#C3E88D;">      - index.php</span></span>
<span class="line"><span style="color:#C3E88D;">js: true</span></span>
<span class="line"><span style="color:#C3E88D;">css: true</span></span>
<span class="line"><span style="color:#89DDFF;">Yaml</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print_r</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">yaml_parse</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">contents</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 2. 读文件并转换成数组（将上面的 $contents 内容写入文件 .styleci.yml 文件）</span></span>
<span class="line"><span style="color:#82AAFF;">print_r</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">yaml_parse_file</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./.styleci.yml</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Array</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># (</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     [php] =&gt; Array</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         (</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#             [preset] =&gt; laravel</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#             [disabled] =&gt; Array</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                 (</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                     [0] =&gt; no_unused_imports</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                 )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#             [finder] =&gt; Array</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                 (</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                     [not-name] =&gt; Array</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                         (</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                             [0] =&gt; index.php</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                         )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                 )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     [js] =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     [css] =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># )</span></span>
<span class="line"></span></code></pre></div><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 读数组并转换成Yaml</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">contents </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">php</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">preset</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">laravel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">disabled</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">no_unused_imports</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">finder</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">not-name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">index.php</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#82AAFF;">print_r</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">str_replace</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">yaml_emit</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">contents</span><span style="color:#89DDFF;">)));</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ---</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># php:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   preset: laravel</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   disabled:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   - no_unused_imports</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   finder:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     not-name:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     - index.php</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   js: true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   css: true</span></span>
<span class="line"></span></code></pre></div></div></div><h2 id="yaml-组件" tabindex="-1">Yaml 组件 <a class="header-anchor" href="#yaml-组件" aria-hidden="true">#</a></h2>`,10),o=[e];function t(c,r,y,i,D,F){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
