```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Grid 多组合排列布局</title>
    <style>
        .main {
            width: 300px;
            height:300px;
            background: skyblue;
            display: grid;
            /* 自适应创建行列个数 */
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 5px;
        }
        .main div {
            background: pink;
        }
        .main div:nth-of-type(1) {
            /* 对于第一个格子的起始结束 */
            grid-area: 1/1/span 2/span 2;
            /* grid-area: 2/1/span 2/span 2; */
        }
    </style>
</head>

<body>
    <div class="main">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
</body>
</html>
```
