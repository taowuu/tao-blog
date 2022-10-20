# Flex 粘性布局

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Flex 粘性布局</title>
    <style>
        .main {
            /* 高度完全支撑视口 */
            min-height:100vh;
            display: flex;
            /* 列布局 */
            flex-direction: column;
        }
        .main .header {
            height:100px;
            background:pink;
        }
        .main .content {
            /* 内容自适应 */
            flex-grow: 1;
        }
        .main .footer {
            height:100px;
            background:skyblue;
        }
    </style>
</head>

<body>
    <div class="main">
        <div class="header"></div>
        <div class="content">
            <h1>content</h1>
        </div>
        <div class="footer"></div>
    </div>
</body>
</html>
```
