# GitBook模版
一个基于gitbook快速写电子书的模版，支持html、pdf、docx、epub、mobi

[GitBook使用笔记](http://yanhaijing.com/tool/2015/09/12/my-gitbook-note/)

## 依赖环境
- gitbook-cli@2.3.0
- gitbook@3.2.2
- calibre@2.38.0

## 安装环境
安装gitbook-cli

    $ npm install gitbook-cli@2.3.0 -g

安装gitbook

    $ gitbook fetch 3.2.2

生成pdf等文件请自行安装calibre

## 构建命令
安装插件

    $ gitbook install

本地模拟

    $ gitbook serve --port 8001

产出静态资源

    $ gitbook build . ../temp

生成pdf, epub, mobi文件，依赖[calibre](calibre)里的ebook-convert

    $ gitbook pdf . ./gitbook-boilerplate.pdf
    $ gitbook epub . ./gitbook-boilerplate.epub
    $ gitbook mobi . ./gitbook-boilerplate.mobi

生成一个markdown文件，需要node环境

    $ npm run build:markdown

生成docx格式，依赖生成的统一markdown文件，依赖[pandoc](http://pandoc.org/)环境

    $ pandoc gitbook-boilerplate.md -o gitbook-boilerplate.docx

## LICENSE
[LICENSE](./LICENSE.md)


[calibre]: http://calibre-ebook.com/
