```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Flex 不定项居中布局</title>
    <style>
        .box {
            width: 300px;
            height: 150px;
            background: skyblue;
            display: flex;
            /* 水平居中对其 */
            justify-content: center;
            /* 垂直底部对齐 */
            align-items: flex-end;
        }
        .box div {
            width: 30px;
            height: 30px;
            background: pink;
            border-radius: 50%;
            margin:5px;
        }
    </style>
</head>

<body>
    <div class="box">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
</body>
</html>
```
