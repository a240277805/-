一、介绍
1.angularjs是 MVC模式
2.数据绑定
3.Angular使用$预定义对象，只要遇到$符号，你都可以只把它看作一个Angular对象。
4.数据模型对象（model object）是指$scope对象。$scope对象是一个简单的 JavaScript对象，其中的属性可以被视图访问，也可以同控制器进行交互,在输入字段上使用ng-model指令来实现数据绑定
5.DOM元素上的 ng-controller声明所有被它包含的元素都属于某个控制
6.模块：angular.module('myApp', []); 
7.它允许开发者使用其中的apply机制，将数据模型 的变化在整个应用范围内进行通知
8.。$rootScope是所 有$scope对象的最上层，是AngularJS中最接近全局作用域的对象
9.$scope的生命周期四个阶段，销毁是当不用时自动销毁
10.更合理的方式是创建一个模块，然后在模块中创建控制器

1.只要在HTML页面中引用angular.js
2.并在某个DOM元素上明确设置 ng-app属性即可,ng-app属性声明所有被其包含的内容都属于这个AngularJS应用

1.$scope 全局对象
2.$timeout 延时

二基础学习
0. angularjs2 引入了三个类型Component类、View类和bootstrap函数
1.angular2要求浏览器支持es6+，则需要垫片：
   systemjs - 通用模块加载器，支持AMD、CommonJS、ES6等各种格式的JS模块加载
   es6-module-loader - ES6模块加载器，systemjs会自动加载这个模块
   traceur - ES6转码器，将ES6代码转换为当前浏览器支持的ES5代码。systemjs会自动加载 这个模块。
2.给类添加注解
3.selector，即标签，也就是我们在html中要使用的标签名称
4.template：该组件的模板，可以理解为该组件的视图
