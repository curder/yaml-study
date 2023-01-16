# Python

在 Python 中操作 Yaml 文件的模块包括 [pyyaml](https://pyyaml.org/wiki/PyYAMLDocumentation) 和 [ruamel.yaml](https://yaml.readthedocs.io/en/latest/install.html)。

这里选择使用后者 **ruamel.yaml**，因为它使用起来更加直观，简单。

## 项目环境准备

```bash
pip install ruamel.yaml
```

## 使用

::: code-group
```python [读内容并转换成json对象]
# 1. 读内容并转换成json对象

from ruamel.yaml import YAML, YAMLError
contents = """
php:
  preset: laravel
  disabled:
    - no_unused_imports
  finder: null
  not-name:
    - index.php
js: true
css: true
"""

try:
    # 1. 创建YAML对象
    yaml = YAML(typ='safe')
    # 读取 yaml 格式的内容
    data = yaml.load(contents)
    # 输出内容
    print(data)
except YAMLError as error:
    print(error)

## 2. 读文件并转换成 json 对象（将上面的 contents 内容写入文件 .styleci.yml 文件）
try:
    # 1. 创建YAML对象
    yaml = YAML(typ='safe')
    # 读取 yaml 格式的内容
    with open('./.styleci.yml') as f:
        yaml = YAML(typ='safe')
        data = yaml.load(f.read()) 
    # 输出内容
    print(data)
except YAMLError as error:
    print(error)
```

```python [将字典转成 Yaml 文件]
from ruamel import yaml

dicts = {
    "php": {
        "preset": "laravel",
        "disabled": [
            "no_unused_imports"
        ],
        "finder": {
            "not-name": [
                "index.php"
            ]
        }
    },
    "js": True,
    "css": True,
}

file_path = './.styleci.yaml'

with open(file_path, 'w', encoding='utf-8') as f:
    yaml.dump(dicts, f, Dumper=yaml.RoundTripDumper)
```
:::