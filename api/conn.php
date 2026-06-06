<?php 
$host = $_SERVER['HTTP_HOST'] ?? '';

if ($host === 'localhost' || str_contains($host, '127.0.0.1') || str_contains($host, 'localhost')) {

    define('db_host', 'localhost');
    define('db_user', 'root');
    define('db_pass', '');
    define('db_name', 'shopify');

} else {

    define('db_host', 'sql210.infinityfree.com');
    define('db_user', 'if0_42052668');
    define('db_pass', 'tujRB5hkwo');
    define('db_name', 'if0_42052668_shopify');
}
   $conn=new mysqli(db_host,db_user,db_pass) or die('unknow database connection');
   $conn->query('create database if not exists '. db_name);
   $conn->select_db(db_name);
?>