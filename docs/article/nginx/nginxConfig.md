# Nginx 配置

#### location 中 alias 和 root 的区别

root与alias主要区别在于nginx如何解释location后面的url

root的处理结果是：

root路径＋location路径

alias的处理结果是：

使用 alias 路径 **替换** location 路径

alias是一个目录别名的定义，root则是最上层目录的定义。alias后面必须要用“/”结束，否则会找不到文件。

#### 对于一个服务器部署多个 Vue项目

// Vue-router history 模式

对于 Nginx 的 location 配置不能使用 root，应使用alias，会导致 webpack 打包后的文件无法找到静态文件。

<Valine></Valine>