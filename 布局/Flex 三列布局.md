# Flex 三列布局
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Flex 三列布局</title>
    <style>
        .main {
            /* 高度完全支撑视口 */
            min-height:100vh;
            background:skyblue;
            /* 默认行布局 */
            display: flex;
        }
        .col1 {
            width:200px;
            background:pink;
        }
        .col2 {
            /* 左右固定中间自适应 */
            flex-grow: 1;
            background:lightblue;
        }
        .col3 {
            width:100px;
            background: lightcoral;
        }
    </style>
</head>

<body>
    <div class="main">
        <div class="col1"></div>
        <div class="col2"></div>
        <div class="col3"></div>
    </div>
</body>
</html>

```