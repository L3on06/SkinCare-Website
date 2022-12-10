<?php 
    error_reporting(E_ALL);
ini_set('display_error', 1);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');


include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();
// var_dump($conn);

        // print_r(file_get_contents('php://input'));


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO user(id, name, surname, email, phone, created_at) VALUES(null, :name, :surname, :email, :phone, :created_at)";
        $stmt = $conn->prepare($sql);
        $created_at = date('Y-m-d');
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':surname', $user->surname);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':phone', $user->phone);
        $stmt->bindParam(':created_at', $created_at);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'succest'];
        } else {
            $response = ['status' => 0, 'message' => 'bad'];
        }
        break;
    }
