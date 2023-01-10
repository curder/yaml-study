<?php

# 使用 yaml 扩展操作 Yaml 文件

// 0. 安装 Yaml 扩展，下载地址：http://pecl.php.net/package/yaml
// For Mac OS
// 0.1 brew install libyaml
// 0.2 pecl install yaml

// 1. 将 Yaml 转为 PHP 数组
$contents = file_get_contents('./.styleci.yml');
var_dump(yaml_parse($contents));
