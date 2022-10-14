```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <style>
        /* 1. flex 不定项居中 */
        .box {
            width: 300px;
            height: 150px;
            background: skyblue;
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }

        .box div {
            width: 30px;
            height: 30px;
            background: pink;
            border-radius: 50%;
            margin:5px;
        }

        /* 2. position 不定项居中 */
        /* .box {
            width: 300px;
            height: 150px;
            background: skyblue;
            position: relative;
        }
        .box section{
            text-align: center;
            width:100%;
            position: absolute;
            bottom:0;
            font-size:0;
        }
        .box div {
            width: 30px;
            height: 30px;
            background: pink;
            border-radius: 50%;
            display: inline-block;
            font-size:16px;
            margin:5px;
        } */
    </style>
</head>

<body>
    <!-- 1 -->
    <div class="box">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
    <!-- 2 -->
    <!-- <div class="box">
        <section>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </section>
    </div> -->
</body>

</html>

```
