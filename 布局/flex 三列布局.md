```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <style>
        body{
            margin:0;
        }
        /* 2. flex 三列布局 */
        .main{
            height:100vh;
            background:skyblue;
            display: flex;
        }
        .col1{
            width:200px;
            background:pink;
        }
        .col2{
            flex-grow: 1;
            background:springgreen;
        }
        .col3{
            width:100px;
            background: tomato;
        }
        /* 2. float 两列布局 */
        /* .main{
            height:100vh;
            background:skyblue;
        }
        .col1{
            width:200px;
            height:60%;
            float:left;
            background:pink;
        }
        .col2{
            height:100%;
            background:lightcoral;
            margin-left:200px;
            /* overflow: hidden; */
        } */
    </style>
</head>

<body>
    <!-- 1 -->
    <div class="main">
        <div class="col1"></div>
        <div class="col2"></div>
        <div class="col3"></div>
    </div>
    <!-- 2 -->
    <!-- <div class="main">
        <div class="col1"></div>
        <div class="col2"></div>
    </div> -->
</body>

</html>

```
