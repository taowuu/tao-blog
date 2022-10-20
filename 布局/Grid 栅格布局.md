# Grid 栅格布局

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Grid 栅格布局</title>
    <style>
        .row {
            background: skyblue;
            display: grid;
            /* 一行十八列 */
            grid-template-columns: repeat(18, 1fr);
            grid-auto-rows: 100px;
        }
        .row div {
            background:pink;
            border:1px black solid;
        }
        /* 占据格数 */
        .row .col-1 {
            grid-area: auto/auto/auto/span 1;
        }
        .row .col-2 {
            grid-area: auto/auto/auto/span 2;
        }
        .row .col-3 {
            grid-area: auto/auto/auto/span 3;
        }
        .row .col-4  {
            grid-area: auto/auto/auto/span 4;
        }
        .row .col-5 {
            grid-area: auto/auto/auto/span 5;
        }
        .row .col-6 {
            grid-area: auto/auto/auto/span 6;
        }
        .row .col-7 {
            grid-area: auto/auto/auto/span 7;
        }
        .row .col-8 {
            grid-area: auto/auto/auto/span 8;
        }
        .row .col-9 {
            grid-area: auto/auto/auto/span 9;
        }
        .row .col-10 {
            grid-area: auto/auto/auto/span 10;
        }
        .row .col-11 {
            grid-area: auto/auto/auto/span 11;
        }
        .row .col-12 {
            grid-area: auto/auto/auto/span 12;
        }
    </style>
</head>

<body>
    <div class="row">
        <div class="col-6">6</div>
        <div class="col-3">3</div>
        <div class="col-4">4</div>
        <div class="col-5">5</div>
    </div>
</body>
</html>
```
