```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <style>
        /* 1. flex 均分列布局 */
        .main{
            height:200px;
            background:skyblue;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding:0 20px;
        }
        .main div{
            width:30px;
            height:30px;
            background:pink;
            border-radius: 50%;
        }
        /* 2. float 均分列布局 */
        /* .main{
            width:500px;
            height:200px;
            background:skyblue;
            overflow: hidden;
            padding:0 20px;
            box-sizing: border-box;
        }
        .main section{
            width:600px;
        }
        .main div{
            width:30px;
            height:30px;
            background:pink;
            border-radius: 50%;
            float:left;
            margin-right:77px;
        } */
    </style>
</head>

<body>
    <!-- 1 -->
    <div class="main">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <!-- 2 -->
    <!-- <div class="main">
        <section>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section>
    </div> -->
</body>

</html>

```
