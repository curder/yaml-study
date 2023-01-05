# 锚点和引用

锚点 `&` 和别名 `*`，可以用来引用。

## 对象使用

::: code-group
```yaml [Yaml Quote]
defaults: &defaults
  driver: mysql
  host:   localhost

dev:
  database: dev
  <<: *defaults

test:
  database: test
  <<: *defaults

prod:
  database: prod
  <<: *defaults
```

```yaml [Yaml]
defaults:
  driver: mysql
  host:   localhost
  
dev:
  database: dev
  driver:   mysql
  host:     localhost

test:
  database: test
  driver:   mysql
  host:     localhost

prod:
  database: prod
  driver:   mysql
  host:     localhost
```

```json [Json]
{
    "defaults": {
        "driver": "mysql",
        "host": "localhost"
    },
    "dev": {
        "database": "dev",
        "driver": "mysql",
        "host": "localhost"
    },
    "test": {
        "database": "test",
        "driver": "mysql",
        "host": "localhost"
    },
    "prod": {
        "database": "prod",
        "driver": "mysql",
        "host": "localhost"
    }
}
```
:::

通过 `&` 来建立锚点 `defaults`，`<<` 表示合并到当前数据，而 `*` 则是用来引用锚点。

## 数组使用

::: code-group
```yaml [Yaml]
Fruits:
  - &apple Apple
  - Orange
  - Pear
  - *apple
```

```yaml [Yaml inline]
Fruits: [ &apple Apple, Orange, Pear, *apple]
```

```json [Json]
{
    "Fruits": [
        "Apple",
        "Orange",
        "Pear",
        "Apple"
    ]
}
```
:::

