```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <style>
        /* 1. 内联上下居中 flex */
        /* .box {
            width: 300px;
            height: 200px;
            background: skyblue;
            display: flex;
            align-items: center;
        } */

        /* 2. 块级上下左右居中 flex */
        .box {
            width: 300px;
            height: 200px;
            background: skyblue;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .box div{
            width:100px;
            height:100px;
            background:pink;
        }

        /* 3. 块级上下左右居中 transform */
        /* .box {
            width: 300px;
            height: 200px;
            background: skyblue;
            position: relative;
        }
        .box div{
            width:200px;
            height:50px;
            background:pink;
            position: absolute;
            left:50%;
            top:50%;
            transform: translate(-50%,-50%);
        } */

        /* 4. 块级上下左右居中 margin */
        /* .box {
            width: 300px;
            height: 200px;
            background: skyblue;
            position: relative;
        }
        .box div{
            width:200px;
            height:50px;
            background:pink;
            position: absolute;
            left:0;
            top:0;
            right:0;
            bottom:0;
            margin:auto;
        } */
    </style>
</head>

<body>
    <!-- 内联 -->
    <!-- <div class="box">
        测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
    </div> -->
    <!-- 块级 -->
    <div class="box">
        <div></div>
    </div>
</body>

</html>

```
