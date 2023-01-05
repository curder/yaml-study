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

纯量是最基本的、不可再分的值。分别包括：

* 字符串
* 布尔值
* 整数
* 浮点数
* Null
* 时间
* 日期

::: code-group
```yaml [Yaml]
string: 
  - Hello # 字符串默认不使用引号表示
  # 使用双引号或者单引号包裹特殊字符
  - ' world'
  # 单引号和双引号都可以使用，双引号不会对特殊字符转义
  - "Hello\nworld"
  - 'Hello\nworld'
  # 单引号之中如果还有单引号，必须连续使用两个单引号转义
  - 'Curder''s iPhone'
  # 字符串可以写成多行，从第二行开始，必须有一个单空格缩进，换行符会被转为空格
  - Hello
    world
  # 多行字符串可以使用 | 保留换行符，也可以使用 > 折叠换行
  - |  # 多行字符串可以使用 | 保留换行符
    Hello
    world
  - >  # 使用>折叠换行
    Hello
    world
  - |+  # + 表示保留文字块末尾的换行
    Hello
  - |-  # - 表示删除字符串末尾的换行
    Hello
  - |  # 字符串之中可以插入 HTML 标记
    <p style="color: red">
      段落
    </p>

boolean:
  - false # False, FALSE 均可
  - true # True,TRUE 均可

integer:
  - 123
  - 0b0000_0000_0000_0111_1011 # 使用二进制表示

float:
  - 3.1415926
  - 0.031415926e+2

null:
  - null
  - ~ # 使用 ~ 表示 null

datetime: 2023-01-05T17:03:12+08:00 # 时间使用ISO 8601 格式，时间和日期之间使用 T 连接，最后使用 + 代表时区

date: 2022-01-05 # 日期必须使用 ISO 8601 格式，即 yyyy-MM-dd
```

```json [Json]
{
  "string": [
    "Hello",
    " world",
    "Hello\nworld",
    "Hello\\nworld",
    "Curder's iPhone",
    "Hello world",
    "Hello\nworld\n",
    "Hello world\n",
    "Hello\n",
    "Hello",
    "<p style=\"color: red\">\n  段落\n</p>\n"
  ],
  "boolean": [
    false,
    true
  ],
  "integer": [
    123,
    123
  ],
  "float": [
    3.1415926,
    3.1415926
  ],
  "null": [
    null,
    null
  ],
  "datetime": "2023-01-05T09:03:12.000Z",
  "date": "2022-01-05T00:00:00.000Z"
}
```
:::


## 复合结构


