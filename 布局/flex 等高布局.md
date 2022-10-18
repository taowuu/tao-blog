```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Flex 等高布局</title>
    <style>
        .main {
            width: 500px;
            background:skyblue;
            display: flex;
            /* 间隔化垂直居中 */
            /* 左右相互适应 */
            justify-content: space-between;
        }
        .main div {
            width: 100px;
            background:pink;
        }
    </style>
</head>

<body>
    <div class="main">
        <div>
            <p>测试内容</p>
            <p>测试内容</p>
        </div>
        <div>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
        </div>
    </div>
</body>
</html>
```
