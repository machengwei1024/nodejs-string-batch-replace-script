/**
 * 字符批量替换脚本
 *  Github - https://github.com/WeicMa/nodejs-string-batch-replace-script
 */

const fs = require('fs')
const path = require('path')
const config = require('./config')
function callback(){console.log("\033[45;30m DONE \033[40;31m 耶！工作终于完成啦，操作状态见log.txt文件。\033[0m");}

// 创建日志文件
var logDec = '此文件为操作执行日志：\n\n'
fs.writeFile('./log.txt', logDec, err=>{
    if (err) {
        console.log('日志文件创建失败，工具停止运行。\n错误原因为：\n', err);
    }
    // 读取目录
    fs.readdir(config.postPath, (err, files)=>{
        if (err) {
            return console.error(err);
        }
        // 遍历目录中的文章
        files.forEach((file, index, array)=>{
            let resultTxt = '';
            // 判断是否为文件类型
            fs.stat(path.join(config.postPath, file), (err, stats)=>{
                if (stats.isFile() == true) {
                    fs.readFile(path.join(config.postPath, file), (err, data)=>{
                        if (!err) {
                            // 进行全文替换url
                            let regexp = data.toString().replace(new RegExp(config.oldStr, 'g'), config.newStr);
                            // 将替换后的内容重新写入文件
                            fs.writeFile(path.join(config.postPath, file), regexp, err=>{
                                if (err) {
                                    resultTxt = '文件：《' + file + '》替换失败，错误原因：\n' + err + '\n';
                                }
                                resultTxt = '文件：《' + file + '》替换成功；\n';
                                fs.appendFile(path.join(__dirname, 'log.txt'), resultTxt, err=>{
                                    if (err) {
                                        return console.log('日志文件写入失败');
                                    }
                                })
                            })
                        }
                    })
                }
            })
            // 所有文件循环完成后再控制台输出提示信息！
            if(index == array.length -1){               
                callback()
            }
        })
    })
})