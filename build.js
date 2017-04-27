/**
 * 按照SUMMARY.md 将md文件顺序拼接在一起
 */
var fs = require('fs');

var book = JSON.parse(fs.readFileSync('./book.json').toString());

var summary = fs.readFileSync('./SUMMARY.md').toString();

var output = '# ' + book.title + '\n\n';

var contentArr = summary.match(/\(.*\)/g).map(function (path) {
    path = path.slice(1).slice(0, -1);
    var res = fs.readFileSync('./' + path).toString();
    // pandoc 图片路径修复
    res = res.replace('](/img/', '](./img/');
    return res;
});

output += contentArr.join('\n\n');

fs.writeFileSync(process.env.npm_package_name + '.md', output);
