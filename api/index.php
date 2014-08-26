<?php
session_start();
require 'flight/Flight.php';

//require 'lib/EasyPDO.php';
//Flight::register('db', 'EasyPDO', array('mysql:dbname=appdb;host=localhost;charset=UTF8', "username", "password"));

Flight::map('checkLogin', function(){
    if (!(isset($_SESSION['login']) && $_SESSION['login'] != '')) {
        $output = array(
            'error' => 'Login required!'
        );
        Flight::json($output);
    }
});

Flight::route('/', function(){
    echo 'hello world!';
});

Flight::route('/test', function(){
    Flight::checkLogin();
    echo "It's OK!";
});

Flight::route('POST /login', function(){
    $data = Flight::request()->data;
    if($data->username == 'admin' && $data->password == 'secret') {
        $_SESSION['login'] = 'YES';
        Flight::json(array(
            'status'  => 'success',
            'message' => 'Logged in'
        ));
    } else {
        Flight::json(array(
            'status'  => 'failure',
            'message' => 'Invalid login or password'
        ));
    }
});

Flight::start();
?>
