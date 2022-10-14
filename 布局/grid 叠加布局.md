```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <style>
        /* 1. grid 叠加布局 */
        .main {
            width: 530px;
            height: 300px;
            background:skyblue;
            display: grid;
        }
        .main img {
            grid-area: 1/1/1/1;
        }
        .main span {
            grid-area: 1/1/1/1;
            justify-self: end;
            align-self: end;
            margin:5px;
        }
        .main p {
            grid-area: 1/1/1/1;
            align-self: center;
            margin:0;
            padding:0;
            background:rgba(0,0,0,0.5);
            height:30px;
            line-height: 30px;
            color:white;
        }
    </style>
</head>

<body>
    <div class="main">
        <img src="./phone.png" alt="">
        <span>自制</span>
        <p>手机热卖中.....</p>
    </div>
</body>

</html>

```
