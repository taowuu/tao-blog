# Flex 均分列布局

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Flex 均分列布局</title>
    <style>
        .main {
            height:200px;
            background:skyblue;
            display: flex;
            /* 间隔化居中 */
            justify-content: space-between;
            /* 垂直底部对齐 */
            align-items: flex-end;
        }
        .main div {
            width:30px;
            height:30px;
            background:pink;
            border-radius: 50%;
        }
    </style>
</head>

<body>
    <div class="main">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</body>
</html>
```
