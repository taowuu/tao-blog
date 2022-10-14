```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <style>
        /* 1. flex 等高布局 */
        .main{
            width:500px;
            background:skyblue;
            display: flex;
            justify-content: space-between;
        }
        .main div{
            width:100px;
            background:pink;
        }
        /* 2. float 等高布局 */
        /* .main{
            width:500px;
            background:skyblue;
            overflow: hidden;
        }
        .main div{
            width:100px;
            background:pink;
            float:left;
            margin-bottom:-2000px;
            padding-bottom:2000px;
        }
        .main div:nth-of-type(2){
            float:right;
        } */
    </style>
</head>

<body>
    <div class="main">
        <div>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
        </div>
        <div>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
            <p>测试内容</p>
        </div>
    </div>
</body>

</html>

```
