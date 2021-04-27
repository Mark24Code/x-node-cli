# 技术说明


# 依赖

## 使用node内置模块

使用了nodejs的几个内置模块：fs、path、child_process

## 外部依赖

* commander.js：可以自动的解析命令和参数，用于处理用户输入的命令。
* download-git-repo：下载并提取 git 仓库，用于下载项目模板。
* Inquirer.js：通用的命令行用户界面集合，用于和用户进行交互。
* handlebars.js：模板引擎，将用户提交的信息动态填充到文件中。
* ora：下载过程久的话，可以用于显示下载中的动画效果。
* chalk：可以给终端的字体加上颜色。
* log-symbols：可以在终端上显示出 √ 或 × 等的图标。
* fs：node内置的文件处理模块。
* path：node内置的路径处理、解析模块。
* child_process：node中创建子进程模块。


# shebang语句

index.js 第一句

```
!/usr/bin/node是告诉操作系统执行这个脚本的时候，调用/usr/bin下的node解释器；
!/usr/bin/env node这种用法是为了防止操作系统用户没有将node装在默认的/usr/bin路径里。当系统看到这一行的时候，首先会到env设置里查找node的安装路径，再调用对应路径下的解释器程序完成操作。
!/usr/bin/node相当于写死了node路径;
!/usr/bin/env node会去环境设置寻找node目录,推荐这种写法
```