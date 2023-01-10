<?php
# 使用 symfony/yaml 组件操作 Yaml 文件
// 文档地址：https://symfony.com/doc/current/components/yaml.html
// 0. 初始化项目
// composer init
// 1. 下载组件
// composer require symfony/yaml
// 2. 使用
include('./vendor/autoload.php');

use Symfony\Component\Yaml\Yaml;

// 2.1 读文件
$value = Yaml::parseFile('./.styleci.yml');
print_r($value);
// 2.2 读字符串
$yaml_str = <<<Yaml
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
// 2.3 写文件
$array = [
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
$yaml = Yaml::dump($array, 4, 2);
file_put_contents('./.styleci.yaml', $yaml);
