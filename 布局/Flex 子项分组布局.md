# Flex 子项分组布局

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Flex 子项分组布局</title>
    <style>
        /* 1. Flex 子项两列分组*/
        .main1 {
            height:200px;
            background: skyblue;
            display: flex;
            /* 中间自适应 */
            justify-content: space-between;
        }
        .main1 div:nth-of-type(2) {
            display: flex;
            margin-left:10px;
        }
        .main1 .box {
            width:50px;
            height:100px;
            background:pink;
        }
        /* 2. Flex 子项多列分组*/
        .main2 {
            height:200px;
            background: skyblue;
            display: flex;
        }
        .main2 div{
            width:50px;
            height:100px;
            background:pink;
            margin-right:10px;
        }
        /* 划分多列 */
        .main2 div:nth-of-type(3){
            margin-right: auto;
        }
        .main2 div:nth-of-type(6){
            margin-right: auto;
        }
    </style>
</head>

<body>
    <div class="main1">
        <div class="box">1</div>
        <div>
            <div class="box">2</div>
            <div class="box">3</div>
        </div>
    </div>
    <br>
    <div class="main2">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </div>
</body>
</html>
```
