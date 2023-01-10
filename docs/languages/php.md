# PHP

在 PHP 中操作 Yaml 可以选择给 PHP 添加 [yaml 扩展](https://pecl.php.net/package/yaml) 或者使用 [symfony/yaml 组件](https://symfony.com/doc/current/components/yaml.html)来操作 Yaml 文件。

## Yaml 扩展

### 安装 Yaml 扩展
Yaml 扩展[下载地址](http://pecl.php.net/package/yaml)

下面演示在 MacOS 上安装 yaml 扩展的流程，具体[流程可以查看这里](https://curder.github.io/setup-mac-for-developer/guide/install/php.html#yaml)。

```bash
brew install libyaml # 安装依赖
pecl install yaml # 使用 pecl 命令安装

php -m |grep yaml # 检查是否安装成功
```

### 使用 Yaml 扩展

::: code-group
```php [将 Yaml 转为 PHP 数组]
## 1. 读内容并转换成数组
$contents = <<<Yaml
php:
preset: laravel
disabled:
   - no_unused_imports
finder:
   not-name:
      - index.php
js: true
css: true
Yaml;

print_r(yaml_parse($contents));

## 2. 读文件并转换成数组（将上面的 $contents 内容写入文件 .styleci.yml 文件）
print_r(yaml_parse_file('./.styleci.yml'));
# Array
# (
#     [php] => Array
#         (
#             [preset] => laravel
#             [disabled] => Array
#                 (
#                     [0] => no_unused_imports
#                 )
#
#             [finder] => Array
#                 (
#                     [not-name] => Array
#                         (
#                             [0] => index.php
#                         )
#
#                 )
#
#         )
#
#     [js] => 1
#     [css] => 1
# )
```

 ```php [将 PHP 数组转成 Yaml 格式]
 # 读数组并转换成Yaml
 $contents = [
    'php' => [
        'preset'   => 'laravel',
        'disabled' => ['no_unused_imports'],
        'finder'   => [
            'not-name' => ['index.php']
        ]
    ],
    'js'  => true,
    'css' => true,
]; 
print_r(str_replace("\n...", '', yaml_emit($contents)));
# ---
# php:
#   preset: laravel
#   disabled:
#   - no_unused_imports
#   finder:
#     not-name:
#     - index.php
#   js: true
#   css: true
```
:::


## Yaml 组件

### 安装 `symfony/yaml` 组件

下载地址：http://pecl.php.net/package/yaml

```bash
composer require symfony/yaml
```


### 使用 `symfony/yaml` 组件

::: code-group

```php [将 Yaml 转为 PHP 数组]
## 1. 读内容并转换成数组
$contents = <<<Yaml
php:
preset: laravel
disabled:
   - no_unused_imports
finder:
   not-name:
      - index.php
js: true
css: true
Yaml;
$value    = Yaml::parse($yaml_str);
print_r($value);

## 2. 读文件并转换成数组（将上面的 $contents 内容写入文件 .styleci.yml 文件）
$value = Yaml::parseFile('./.styleci.yml');
print_r($value);

## 以上打印均输出如下：
# Array
# (
#     [php] => Array
#         (
#             [preset] => laravel
#             [disabled] => Array
#                 (
#                     [0] => no_unused_imports
#                 )
#
#             [finder] => Array
#                 (
#                     [not-name] => Array
#                         (
#                             [0] => index.php
#                         )
#
#                 )
#
#         )
#
#     [js] => 1
#     [css] => 1
# )
```

```php [将 PHP 数组转成 Yaml 格式]
# 读数组并转换成Yaml
$contents = [
   'php' => [
       'preset'   => 'laravel',
       'disabled' => ['no_unused_imports'],
       'finder'   => [
           'not-name' => ['index.php']
       ]
   ],
   'js'  => true,
   'css' => true,
];
$yaml  = Yaml::dump($array, 4, 2);
file_put_contents('./.styleci.yaml', $yaml);

## 写入的文件内容如下：
# php:
#   preset: laravel
#   disabled:
#     - no_unused_imports
#   finder:
#     not-name:
#       - index.php
# js: true
# css: true
```
:::