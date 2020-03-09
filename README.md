# nodejs-string-batch-replace-script
一个用Node.js写的轻量级批量替换文件中字符的脚本。

可用于批量替换Hexo文章中的url等

### 使用方法

1.获取脚本

npm 方式：
```
npm i nodejs-string-batch-replace-script
```

Git 方式：

```
git clone git@github.com:WeicMa/nodejs-string-batch-replace-script.git && cd nodejs-string-batch-replace-script
```

2.修改config.js配置文件
```
module.exports = {
    postPath: '',           // 文件目录的路径，例 F:\\Hexo\\source\\_posts 或 /data/wwwroot/hexo/source/_posts
    oldStr: '',     // 旧字符串（需要替换掉的字符串）
    newStr: ''     // 新字符串
}
```

3.执行脚本

```
node index
```

4.查看执行结果。。。
