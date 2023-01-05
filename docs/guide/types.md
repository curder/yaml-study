# 数据类型

Yaml 支持以下几种数据类型：

- **对象**：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）
- **数组**：一组按次序排列的值，又称为序列（sequence） / 列表（list）
- **纯量**：单个的、不可再分的值，比如整数、浮点数、布尔值、字符串等基本数据类型

## 对象

对象也是一个键值对，只不过其值并非是纯量，而是一组键值对。

::: code-group
```yaml [Yaml]
root-key:
  child-key1: value1
  child-key2: value2
```

```json [JSON]
{
    "root-key": {
        "child-key1": "value1",
        "child-key2": "value2"
    }
}
```
:::

Yaml 也允许另一种写法，将所有键值对写成一个行内对象。

::: code-group
```yaml [Yaml]
root-key: { child-key1: value1, child-key2: value2 }
```

```json
{
    "root-key": {
        "child-key1": "value1",
        "child-key2": "value2"
    }
}
```
:::

## 数组

以 `-` 开头的行表示构成一个数组：

::: code-group
```yaml [Yaml]
fruits:
  - apple
  - orange
  - pear
```

```json [JSON]
{
    "fruits": [
        "apple",
        "orange",
        "pear"
    ]
}
```
:::

Yaml 数组可以使用行内表示：

::: code-group
```yaml [Yaml]
fruits: [ apple, orange, pear ]
```
```json
{
    "fruits": [
        "apple",
        "orange",
        "pear"
    ]
}
```
:::

数据结构的子成员是一个数组，则可以在该项下面缩进一个空格：

::: code-group
```yaml [Yaml]
-
  - apple
  - orange
  - pear 
```

```json [JSON]
[
    [
        "apple",
        "orange",
        "pear"
    ]
]
```
::: 

## 纯量



## 符合结构


