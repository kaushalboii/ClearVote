<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Preflight OPTIONS check
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Actual logic starts here
$input = json_decode(file_get_contents("php://input"), true);
$prompt = $input["prompt"] ?? null;

if (!$prompt) {
    echo json_encode(["error" => "No prompt received"]);
    exit;
}

$response = [
    "choices" => [
        [
            "message" => [
                "content" => "✅ This is a mock summary of your DAO proposal: \"" . substr($prompt, 0, 100) . "...\""
            ]
        ]
    ]
];

echo json_encode($response);
?>
