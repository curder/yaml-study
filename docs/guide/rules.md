# 语法规则

Yaml 的基本语法规则如下：

- 大小写敏感
- 使用缩进表示层级关系
- 缩进时不允许使用Tab键，只允许使用空格。
- 缩进的空格数不重要，只要相同层级的元素左对齐即可
- `#` 表示注释，从这个字符一直到行尾，都会被解析器忽略

 ## 大小写敏感

如下 Yaml 文件内容，由于 Yaml 语法键是严格区分大小写，所以以下内容有效。

::: code-group

```yaml [Yaml]
name: Curder
Name: Luo
```

```json [JSON]
{
  "name":  "Curder",
  "Name": "Curder"
}
```
:::

::: warning **注意**
如果将 `Name` 改为 `name` 则会抛出 `Key 'name' is duplicated` 的错误。
:::

## 层级关系

使用缩进代表层级关系，并且缩进仅支持空格，不能使用 tab 键。

::: code-group

```yaml [Yaml]
server:
  app:
    host: 127.0.0.1
    port: 443
    scheme: https
```

```json [JSON]
{
    "server": {
        "app": {
            "host": "127.0.0.1",
            "port": 443,
            "scheme": "https"
        }
    }
}
```

:::

## `#` 代表注释
::: code-group
```yaml [Yaml]
server:
  app:
    # 服务主机
    host: 127.0.0.1
    port: 443 # 服务端口
# 服务协议
    scheme: https
```

```json [JSON]
{
    "server": {
        "app": {
            "host": "127.0.0.1",
            "port": 443,
            "scheme": "https"
        }
    }
}
```
:::