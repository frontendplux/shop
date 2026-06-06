<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
function loadPage($data){
        include __DIR__ . "/conn.php";
        include __DIR__ . "/auth.php";
        include __DIR__ . "/main.php";
    
        $main = new Main($conn);
        switch ($data['action']) {
            case 'auth':
                $auth = new Auth($conn);
                switch ($data['type']) {
                    case 'login':
                     echo  json_encode($auth->Login(['email' => $data['email'], 'referral' => $data['referral']]));
                        break;

                    case 'loginPassword':
                        echo json_encode($auth->loginPassword(['email' => $data['email'], 'password' => $data['password']]));
                        break;  

                    case 'signup':
                        echo json_encode($auth->Signup(['email' => $data['email'], 'password' => $data['password']]));
                        break;

                    default:
                        echo json_encode(['status' => 'error', 'message' => 'Invalid auth type']);
                        break;
                }
                break;
    
            case 'product':
                switch ($data['type']) {
                    case 'list':
                        include __DIR__ . "/product/list.php";
                        break;
                    case 'details':
                        include __DIR__ . "/product/details.php";
                        break;
                    default:
                        echo json_encode(['status' => 'error', 'message' => 'Invalid product type']);
                        break;
                }
                break;
    
            default:
                echo json_encode(['status' => 'error', 'message' => 'Invalid action']);
                break;
        }
}
// Accept JSON or POST
$data = json_decode(
    file_get_contents('php://input'),
    true
);

if (!$data) {
    $data = $_POST;
}

// Load router
loadPage($data);
