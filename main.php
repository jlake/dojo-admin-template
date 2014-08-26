<?php
session_start();
if (!(isset($_SESSION['login']) && $_SESSION['login'] != '')) {
    header ("Location: login.html");
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Dojo Admin Template</title>
    <link rel='stylesheet' href='http://ajax.googleapis.com/ajax/libs/dojo/1.10.0/dijit/themes/claro/claro.css'>
    <link rel='stylesheet' href='app/css/main.css'>
    <script type="text/javascript">
    // Configure Dojo.
    var dojoConfig = {
        baseUrl: location.href.substring(0,location.href.lastIndexOf('/')),
        parseOnLoad: true,
        packages: [
            {name: 'app', location: 'app'}
        ]
    };
    </script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/dojo/1.10.0/dojo/dojo.js"></script>
    <script type="text/javascript">
    require([
        'app/main'
    ], function (app) {
        app();
    });
    </script>
</head>
<body class="claro">
</body>
</html>
