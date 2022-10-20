# Flex 居中布局

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Flex 居中布局</title>
    <style>
        /* 1. Flex 内联上下居中*/
        .box1 {
            width: 300px;
            height: 200px;
            background: skyblue;
            display: flex;
            /* 垂直居中 */
            align-items: center;
        }
        /* 2. Flex 块级上下左右居中 */
        .box2 {
            width: 300px;
            height: 200px;
            background: skyblue;
            display: flex;
            /* 水平居中 */
            justify-content: center;
            /* 垂直居中 */
            align-items: center;
        }
        .box2 div {
            width:100px;
            height:100px;
            background:pink;
        }
    </style>
</head>

<body>
    <div class="box1">
        测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
    </div>
    <br>
    <div class="box2">
        <div></div>
    </div>
</body>
</html>
```
