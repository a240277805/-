1.什么是Webpack
  Webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。
2.Webpack 的特点
  1)代码拆分
  2)Loader可以处理任何资源
  3)智能解析，Webpack 有一个智能解析器，几乎可以处理任何第三方库，无论它们的模块形式是 CommonJS、 AMD 还是普通的 JS 文件。甚至在加载依赖的时候，允许使用动态表达式 require("./templates/" + name + ".jade")。
  4)插件系统  Webpack 还有一个功能丰富的插件系统。大多数内容功能都是基于这个插件系统运行的，还可以开发和使用开源的 Webpack 插件，来满足各式各样的需求。
  5)快速运行   Webpack 使用异步 I/O 和多级缓存提高运行效率，这使得 Webpack 能够以令人难以置信的速度快速增量编译。
3.安装
  1）nodejs最新版
  2）npm install webpack -g   可以通过命令行 webpack -h 试试。
  3)在项目中 可以 npm install webpack --save-dev

  webpack entry.js bundle.js --module-bind "css=style!css"




  resolve  :负责简写
  output :输出到哪
  

 