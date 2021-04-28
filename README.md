# x node cli

node实现的脚手架程序  x-cli 


## 构建你自己的 x-cli

1. 复用项目
git clone 项目，修改repo.js 中的目标地址

2. 修改package.json 的项目名


3. 修改cli名称

修改package.json 中 bin的key 作为你的命令名字，目前是 x-cli

4. 打包发布

npm publish

发布你的 x-cli


## x-cli 使用

1. 下载 全局安装

`npm install -g <项目名>`

2. 加入你之前的注册的 bin 的key为 x-cli

`x-cli init <你的打算新建的项目名>`
