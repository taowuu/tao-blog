# Grid 叠加布局

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Grid 叠加布局</title>
    <style>
        .main {
            width: 530px;
            height: 300px;
            background:skyblue;
            display: grid;
        }
        .main img {
            /* 占据整个网格 */
            grid-area: 1/1/1/1;
        }
        .main span {
            grid-area: 1/1/1/1;
            /* 对齐当前 grid flex */
            /* 水平靠末尾 */
            justify-self: end;
            /* 垂直靠末尾 */
            align-self: end;
        }
        .main p {
            grid-area: 1/1/1/1;
            /* 垂直居中 */
            align-self: center;
            background:rgba(0,0,0,0.5);
            color:white;
        }
    </style>
</head>

<body>
    <div class="main">
        <img src="./phone.png">
        <span>自制</span>
        <p>手机热卖中.....</p>
    </div>
</body>
</html>
```
