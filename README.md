# Learn TypeScript on Bilibili

### 实时监听文件修改

```
tsc --watch
```

### 如果 TypeScript 语法检查器在编译时报错，不允许生成 JavaScript 文件

修改 tsconfig.json 文件中的配置

```json
noEmitOnError: true
```
