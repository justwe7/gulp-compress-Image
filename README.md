# gulp-compress-Image
gulp自动执行图片转base64及合成雪碧图-->图片压缩

执行gulp进行压缩，由于修改插件代码，需要使用项目中node模块依赖，文件引入路径配置需要在gulpfile.js中自定义

node_modules\gulp-css-base64\src\index.js

node_modules\gulp-css-spriter\lib\map-over-styles-and-transform-background-image-declarations.js
两个文件被修改，增加标记的文件名称才会被处理
借鉴自segmentfault--fwon博文

前后端未分离项目简直阿西吧


``` bash
# 全局安装gulp
npm i -g gulp

# 走你
gulp
```
