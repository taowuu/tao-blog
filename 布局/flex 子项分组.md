```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <style>
        /* 1. flex 子项分组 */
        /* .main{
            height:200px;
            background: skyblue;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .main div:nth-of-type(2){
            display: flex;
            margin-left:10px;
        }
        .main .box{
            width:50px;
            height:100px;
            background:pink;
        } */
        /* 2. flex 子项分组 */
        .main{
            height:200px;
            background: skyblue;
            display: flex;
            align-items: center;
        }
        .main div{
            width:50px;
            height:100px;
            background:pink;
            margin-right:10px;
        }
        .main div:nth-of-type(3){
            margin-right: auto;
        }
        .main div:nth-of-type(6){
            margin-right: auto;
        }
    </style>
</head>

<body>
    <!-- 1 -->
    <!-- <div class="main">
        <div class="box">1</div>
        <div>
            <div class="box">2</div>
            <div class="box">3</div>
        </div>
    </div> -->
    <!-- 2 -->
    <div class="main">
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
