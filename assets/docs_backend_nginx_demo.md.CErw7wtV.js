import{_ as a,c as n,o as i,ae as p}from"./chunks/framework.CLNW5JS9.js";const t="/blog/assets/nginx-localhost-9090.CzQmxZxr.png",e="/blog/assets/nginx-test-9090.C8sjv5_9.png",l="/blog/assets/nginx-demo-1.r4nz-bA_.png",h="/blog/assets/nginx-localhost-9091.B8x3wnfa.png",r="/blog/assets/nginx-test-user.FsQGQyef.png",o="/blog/assets/nginx-test-order.DobtakDN.png",c="/blog/assets/nginx-load-balance.CE59fbXG.gif",k="/blog/assets/nginx-node-1.BkSS_30l.png",d="/blog/assets/nginx-node-2.DDEVJnwk.png",x=JSON.parse('{"title":"Nginx 配置","description":"","frontmatter":{"sidebarDepth":3},"headers":[],"relativePath":"docs/backend/nginx/demo.md","filePath":"docs/backend/nginx/demo.md"}'),g={name:"docs/backend/nginx/demo.md"};function E(y,s,b,u,m,v){return i(),n("div",null,s[0]||(s[0]=[p(`<h1 id="nginx-配置" tabindex="-1">Nginx 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;Nginx 配置&quot;">​</a></h1><h2 id="配置文件简介" tabindex="-1">配置文件简介 <a class="header-anchor" href="#配置文件简介" aria-label="Permalink to &quot;配置文件简介&quot;">​</a></h2><p>nginx 的配置文件一般是：<code>/usr/local/etc/nginx/nginx.conf</code> 文件。它由三大部分组成：</p><ul><li><p><strong>全局块</strong></p><p>主要配置一些影响 nginx 服务器全局整体运行的指令。比如 <code>worker_processes</code> 等。</p></li><li><p><strong>events 块</strong></p><p>主要配置一些影响服务器与用户的网络连接的指令。比如 <code>worker_connections</code> 等。</p></li><li><p><strong>http 块</strong></p><p>是 nginx 中配置最频繁的部分，他也可分为两小部分：</p><ul><li><strong>http 全局块</strong>：配置 MIME-TYPE，日志，连接超时时间，gzip 压缩，单连接请求上限等。</li><li><strong>server 块</strong>：可以看作是一个虚拟主机，可以配置多个。</li></ul></li></ul><h2 id="常见配置实例" tabindex="-1">常见配置实例 <a class="header-anchor" href="#常见配置实例" aria-label="Permalink to &quot;常见配置实例&quot;">​</a></h2><p><strong>准备工作</strong>：</p><ol><li>安装 http-server 来在本地启动 http 服务</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i -g http-server</span></span></code></pre></div><ol start="2"><li>新建一个文件夹 server-9090，在里面新建一个 index.html 文件：</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- ...省略其他... --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;9090&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ol start="3"><li>在 server-9090 目录下运行：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http-server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9090</span></span></code></pre></div><p>接着在浏览器就能看到我们的页面：</p><p><img src="`+t+`" alt="nginx-localhost-9090"></p><ol start="4"><li>修改 hosts 文件</li></ol><p>我打算在本地弄一个假的域名来做测试，所以我要修改 /etc/hosts 文件来做本地的 dns 映射，在 hosts 文件上加上这样的一行：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">192.168.1.9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> www.test.com</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 192.168.1.9 是我本机的 ip 地址</span></span></code></pre></div><p>然后使用域名来访问我们之前的网页：</p><p><img src="`+e+`" alt="nginx-test-9090"></p><p>如果修改完 hosts 文件没有生效，尝试刷新 dns 缓存，或者关闭本地的一些代理软件等。刷新 dns 缓存命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dscacheutil</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -flushcache</span></span></code></pre></div><h3 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to &quot;反向代理&quot;">​</a></h3><p>打开 nginx.conf 文件，找到 server 块，按照如下内容修改：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># others ...</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name  www.test.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #charset koi8-r;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #access_log  logs/host.access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root   html;</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:9090;</span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    # others ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们只在原有的基础上修改了三处：</p><ol><li>修改了默认的监听端口，从 8080 改到 80</li><li>修改 server_name 为我们刚刚配置的域名 www.test.com</li><li>在 location 块中添加了一行 proxy_pass 配置</li></ol><p>以上配置的大致意思可以简单的理解为：当你访问 www.test.com 的时候，nginx 会为你转发到你 <a href="http://127.0.0.1:9090" target="_blank" rel="noreferrer">http://127.0.0.1:9090</a> 上来。我们来看一下效果：</p><p><img src="`+l+`" alt="nginx-demo-1"></p><p>可以看到，直接输入域名，正常的访问到了我们 http-server 下的一个服务（9090的那个网页），证明我们的配置生效了。这样，一个简单的反向代理配置就完成了。</p><h3 id="反向代理2-多路径配置" tabindex="-1">反向代理2 - 多路径配置 <a class="header-anchor" href="#反向代理2-多路径配置" aria-label="Permalink to &quot;反向代理2 - 多路径配置&quot;">​</a></h3><p>上例中我们演示了一个简单的反向代理的配置。这里我们接着上例，实现根据不同的路径，跳转到不同的端口的服务中去。</p><p>假设我们有两个服务，一个在 9090 端口上，一个在 9091 端口上，我们要实现的是在浏览器中输入 <code>www.test.com:8888/user</code> 能跳转到 9090 端口下的服务，输入 <code>www.test.com:8888/order</code> 能跳转到 9091 下的服务。</p><p>首先，我们需要添加一个 9091 的服务。我们新建一个 server-9091 的文件夹，在里面新建一个 index.html 文件：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 省略其他... --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;color: red;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;9091 Order List&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>接着在 server-9091 文件夹下，运行 <code>http-server -p 9091</code> 来开启我们的服务：</p><p><img src="`+h+`" alt="nginx-localhost-9091"></p><p>可以看到，我们的 9091 端口下的服务正常运行了，下面我们来配置 nginx，最终实现我们的目标任务。</p><p>这里我们就要配置一个 server 块了，在 http 块下，我们加入如下配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 8888;</span></span>
<span class="line"><span>    server_name www.test.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /order {</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:9091/;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /user {</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:9090/;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>简单的解释一下上述配置：我们监听了 8888 端口，访问域名为 www.test.com；同时我们还配置了两个 location 块，第一个表示匹配 /order 路径，匹配到以后，转发到我们的 <a href="http://127.0.0.1:9091/" target="_blank" rel="noreferrer">http://127.0.0.1:9091/</a> 上来，即访问 www.test.com:8888/order 就是访问我们的 <a href="http://127.0.0.1:9091/%EF%BC%8C%E5%8F%A6%E4%B8%80%E4%B8%AA" target="_blank" rel="noreferrer">http://127.0.0.1:9091/，另一个</a> location 块同理。</p><p>我们来看看效果：</p><p><img src="`+r+'" alt="nginx-test-user"></p><p><img src="'+o+`" alt="nginx-test-order"></p><p>可以看到运行成功，表示我们的配置是正确的。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>上述配置中 proxy_pass 的值，最后的斜杠 / 是有作用的，即 <code>proxy_pass http://127.0.0.1:9090/</code> 与 <code>proxy_pass http://127.0.0.1:9090</code> 表达的意思是不同的。</p><ul><li>对于最后不带有 / 的，即只包含 ip + 端口号的这种方式，nginx 在处理转发时会保留 location 中的 path 部分：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location /order {</span></span>
<span class="line"><span>    proxy_pass http://127.0.0.1:9091;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里如果访问 www.test.com:8888/order，相当于访问：<a href="http://127.0.0.1:9091/order" target="_blank" rel="noreferrer">http://127.0.0.1:9091/order</a></p><ul><li>带有 / 的，即在 ip+端口号 后面有 path 的（单个 / 也算），nginx 在处理的时候会直接<strong>从字面上替换 URI</strong>。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location /order {</span></span>
<span class="line"><span>    proxy_pass http://127.0.0.1:9091/;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里如果访问 www.test.com:8888/order，相当于访问：<a href="http://127.0.0.1:9091/%E3%80%82%E4%B9%9F%E5%B0%B1%E6%98%AF%E7%9B%B4%E6%8E%A5%E5%B0%86%E5%8E%9F%E5%A7%8B%E8%B7%AF%E5%BE%84%E6%9B%BF%E6%8D%A2%E6%88%90%E4%BA%86%E6%88%91%E4%BB%AC%E9%85%8D%E7%BD%AE%E7%9A%84" target="_blank" rel="noreferrer">http://127.0.0.1:9091/。也就是直接将原始路径替换成了我们配置的</a> proxy_pass 的值。那假设我们访问的是 www.test.com:8888/order/book ，那么实际上访问的是 **<a href="http://127.0.0.1:9091//book**%EF%BC%88%E6%B3%A8%E6%84%8F%E5%88%86%E6%9E%90%E8%BF%99%E9%87%8C%E7%9A%84%E5%8F%8C%E6%96%9C%E6%9D%A0" target="_blank" rel="noreferrer">http://127.0.0.1:9091//book**（注意分析这里的双斜杠</a> // 的原因）</p></div><h3 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h3><p>当单台服务器的压力过大时，我们会部署多台机器来将请求分摊，以减小服务器的压力。</p><p>假设我们需要实现这样的需求，当访问 www.test.com 时，服务器将我们的请求分摊到 9091 和 9090 这两个服务上。在 nginx 中，我们要这样来配置：</p><p>首先在 http 块中新增一个 upstream 块：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream my_server {</span></span>
<span class="line"><span>    server 127.0.0.1:9090;</span></span>
<span class="line"><span>    server 127.0.0.1:9091;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上述配置表示，我们定义了一个名为 my_server 的 upstream 块，它包含两个服务器的配置，一个 9090 一个 9091。接着修改我们 server 块中的 location 配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name  www.test.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root   html;</span></span>
<span class="line"><span>        proxy_pass http://my_server;</span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # ... 省略其他 ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这样一个简单的负载均衡的配置就完成了，我们来看一下效果。</p><p><img src="`+c+`" alt="nginx-load-balance"></p><p>可以看到，每次刷新都得到 9090 或者 9091 的内容，证明我们的请求被分摊到了这两个服务上。负载均衡的默认策略是 <strong>轮询</strong>，每个请求会按时间顺序逐一分配到不同的后端服务器，所以我们的 9091 和 9090 的内容是随着我们的刷新而交替出现的。</p><h3 id="动静分离" tabindex="-1">动静分离 <a class="header-anchor" href="#动静分离" aria-label="Permalink to &quot;动静分离&quot;">​</a></h3><p>所谓动静分离，是指将动态请求与静态请求分开。比如我们查询一个用户列表，需要服务器去查询数据库然后返回，这就是动态请求；而我们请求图片，字体，样式文件等资源，这些基本都是静态内容，不会改变。将动态请求和静态请求分开能提交请求的效率，比如负责接口的服务器挂了以后，不会影响到我页面 html，css，js 等静态内容的展示。</p><p>使用 nginx 配置动静分离，一般是将静态内容交由 nginx 来处理，当一个静态请求过来时，直接到静态资源目录下去获取；而动态请求，则是将请求转发给对应的服务器去处理。在开始配置之前，我们来做如下的准备工作：</p><p>首先我们新建一个 images 文件夹用来存放图片资源，在里面放一张图片 jerry.jpg；</p><p>接着再新建一个 node-server 目录，在里面新建一个 index.js 文件，搭建一个简单的 node 服务：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeHead</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Content-Type&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text/html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> currentDate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toLocaleDateString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> html</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;h1&gt;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">currentDate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;img src=&quot;/jerry.jpg&quot; width=&quot;200px&quot; height=&quot;200px&quot; /&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(html);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7777</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>这是一个非常简单的 node 服务，它监听了 7777 端口，在页面上显示了当前时间，和一张图片。我们访问 localhost:7777 看一下效果：</p><p><img src="`+k+`" alt="node server"></p><p>我们的文字部分是显示出来的，但是图片没有。因为这时候请求的图片地址是 localhost:7777/jerry.jpg，而我们根本没有在 index.js 处理这样的资源，所以显示不出来。</p><p>下面我们就来配置 nginx，实现这种动静分离的效果。为了更好的解释，我们这里新建一个 server 块来配置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 5555;</span></span>
<span class="line"><span>    server_name localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://localhost:7777;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location ~ .*\\.(gif|jpg|jpeg|bmp|png)$ {</span></span>
<span class="line"><span>        root /Users/jerry/jerryspace/blog/src/nginx/images;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>配置项也不多，我们访问 / 的时候，转发到了我们的 node 服务上，是个动态请求，由 node 服务器来决定要显示什么内容；而当我们访问 png，gif，jpg 等图片的时候，会以本地的 /Users/jerry/jerryspace/blog/src/nginx/images 为 root 来查找对应的资源。</p><p>我们来看一下效果：</p><p><img src="`+d+'" alt="nginx node"></p><p>可以看到我们的文字和图片都正常显示了，证明我们的动静分离配置生效了。</p>',70)]))}const C=a(g,[["render",E]]);export{x as __pageData,C as default};
