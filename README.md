# iconfonts
已经部署到 [http://iconfont.imweb.io](http://iconfont.imweb.io) 上面。

===
### 存储icon
icon 相关文件存储到docs中，db/insert.js 会负责解析docs中的style.css，解析出其中的icon，并完成如下的工作：
+ 将style.css (关于iconfont的定义)copy到public/css/iconfont.css中
+ 将fonts中字体文件copy到pubic/css/fonts下
+ 将style.css中解析出来的icon图片存储到db中。

===
### 显示icon

```
node index.js
```
浏览器输入

```
localhost:4001
```

===
### 遗留问题
icon 的解析依赖与给定的样式和font，目前的流程是：
+ 设计给到 svg 文件，上传到 icomoon 导出合并后的字体文件和 css 文件（命名规则）
+ 将这部分文件放到 docs 目录下面，由 db/insert.js 负责解析工作
+ 将 icon 存储到 db 中。

整个流程复杂，繁琐。

### 后续计划
希望将整个流程打通，设计同学给到 svg 后（这里要制定一套 icon 的命名规则），系统可以将上面流程的后面部分全部完成。


### 更新
##### 0701
已经将 svg 到iconfont整个流程打通，现在从 svg 目录中读取 svg， 生成对应的 iconfont，并加数据存储到本地数据库，然后到显示。
##### 0702
用户可以选择少数几个图标，然后定制自己的 font 字体（这样文件会小很多），暂时还没有复杂处理，不太稳定
##### 0707
+ 下载这里有坑，打包zip的插件没有提供回调机制，（fsstream的几个事件试过了，无效），所以不知道什么时候下载打包好的zip包，这里暂时用setTimeout hack了一下
+ 对于 ttf 文件 base64 内嵌到 css 中的需求，font-carrier 生成字体文件时，异步但是没有提供回调，已经向作者 pull request了，暂时把这里生成字体文件的操作改成同步。
+ 上传，目前支持单个 svg 上传到 iconfont 平台。
