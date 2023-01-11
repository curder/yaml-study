# node.js

[YAML](https://www.npmjs.com/package/yaml)

在 node.js 中操作 Yaml 文件将其转换为 json。

## 项目环境准备

这里使用 `node` 的版本为：`v16.13.0`

```bash {11}
yarn init -y
# 并修改 package.json 文件，添加一行配置 "type": "module",

yarn add yaml -D
# `package.json` 文件内容如下
# {
#   "name": "node",
#   "version": "1.0.0",
#   "main": "index.js",
#   "license": "MIT",
#   "type": "module",
#   "devDependencies": {
#     "yaml": "^2.2.1"
#   }
# }
```

## 使用 

::: code-group

```javascript [将 Yaml 转为 JSON]
// 1. 读内容并转换成json对象
let contents = `
php:
preset: laravel
disabled:
   - no_unused_imports
finder:
   not-name:
      - index.php
js: true
css: true
`

console.log(YAML.parse(contents))
//{
//  php: {
//    preset: 'laravel',
//    disabled: [ 'no_unused_imports' ],
//    finder: { 'not-name': [Array] }
//  },
//  js: true,
//  css: true
//}


// 2. 读文件并转换成 json 对象（将上面的 contents 内容写入文件 .styleci.yml 文件）
console.log(
  YAML.parse(
    fs.readFileSync('.styleci.yml', 'utf8')
  )
);
```


```javascript [将 JSON 转成 Yaml]
let contents = {
  php: {
    preset: 'laravel',
    disabled: ['no_unused_imports'],
    finder: {'not-name': ['index.php']}
  },
  js: true,
  css: true
}

console.log(YAML.stringify(contents))
// php:
//  preset: laravel
//  disabled:
//   - no_unused_imports
//  finder:
//    not-name:
//      - index.php
//js: true
//css: true
```
:::