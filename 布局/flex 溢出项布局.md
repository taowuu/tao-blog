```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <style>
        /* 1. flex 溢出项布局 */
        body{
            margin:0;
        }
        .main{
            height:100px;
            background:skyblue;
            display: flex;
            align-items: center;
        }
        .main div{
            width:100px;
            height:80px;
            background:pink;
            margin-right:10px;
            flex-shrink: 0;
        }
        /* 2. float 溢出项布局 */
        /* body{
            margin:0;
        }
        .main{
            height:100px;
            background:skyblue;
        }
        .main section{
            width:2000px;
        }
        .main div{
            width:100px;
            height:80px;
            background:pink;
            margin-right:10px;
            float:left;
        } */
    </style>
</head>

<body>
    <!-- 1 -->
    <div class="main">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </div>
    <!-- 2 -->
    <!-- <div class="main">
        <section>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
        </section>
    </div> -->
</body>

</html>

```
