import{_ as s,c as n,o as a,a as l}from"./app.fb7b9bec.js";const F=JSON.parse('{"title":"node.js","description":"","frontmatter":{},"headers":[{"level":2,"title":"项目环境准备","slug":"项目环境准备","link":"#项目环境准备","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"relativePath":"languages/nodejs.md","lastUpdated":1673433789000}'),p={name:"languages/nodejs.md"},o=l(`<h1 id="node-js" tabindex="-1">node.js <a class="header-anchor" href="#node-js" aria-hidden="true">#</a></h1><p><a href="https://www.npmjs.com/package/yaml" target="_blank" rel="noreferrer">YAML</a></p><p>在 node.js 中操作 Yaml 文件将其转换为 json。</p><h2 id="项目环境准备" tabindex="-1">项目环境准备 <a class="header-anchor" href="#项目环境准备" aria-hidden="true">#</a></h2><p>这里使用 <code>node</code> 的版本为：<code>v16.13.0</code></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight has-highlighted-lines"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 并修改 package.json 文件，添加一行配置 &quot;type&quot;: &quot;module&quot;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yaml</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \`package.json\` 文件内容如下</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   &quot;name&quot;: &quot;node&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   &quot;license&quot;: &quot;MIT&quot;,</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">#   &quot;type&quot;: &quot;module&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   &quot;devDependencies&quot;: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     &quot;yaml&quot;: &quot;^2.2.1&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># }</span></span>
<span class="line"></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-PEVEP" id="tab-AT__yXP" checked="checked"><label for="tab-AT__yXP">将 Yaml 转为 JSON</label><input type="radio" name="group-PEVEP" id="tab-MAffLnk"><label for="tab-MAffLnk">将 JSON 转成 Yaml</label></div><div class="blocks"><div class="language-javascript active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 1. 读内容并转换成json对象</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> contents </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">php:</span></span>
<span class="line"><span style="color:#C3E88D;">preset: laravel</span></span>
<span class="line"><span style="color:#C3E88D;">disabled:</span></span>
<span class="line"><span style="color:#C3E88D;">   - no_unused_imports</span></span>
<span class="line"><span style="color:#C3E88D;">finder:</span></span>
<span class="line"><span style="color:#C3E88D;">   not-name:</span></span>
<span class="line"><span style="color:#C3E88D;">      - index.php</span></span>
<span class="line"><span style="color:#C3E88D;">js: true</span></span>
<span class="line"><span style="color:#C3E88D;">css: true</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(YAML</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(contents))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//  php: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    preset: &#39;laravel&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    disabled: [ &#39;no_unused_imports&#39; ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    finder: { &#39;not-name&#39;: [Array] }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//  },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//  js: true,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//  css: true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. 读文件并转换成 json 对象（将上面的 contents 内容写入文件 .styleci.yml 文件）</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  YAML</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readFileSync</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.styleci.yml</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> contents </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">php</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">preset</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">laravel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">disabled</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">no_unused_imports</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">finder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">not-name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">index.php</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">js</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">css</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(YAML</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(contents))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// php:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//  preset: laravel</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//  disabled:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   - no_unused_imports</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//  finder:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    not-name:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//      - index.php</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//js: true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//css: true</span></span>
<span class="line"></span></code></pre></div></div></div>`,8),e=[o];function t(c,r,i,y,D,C){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
