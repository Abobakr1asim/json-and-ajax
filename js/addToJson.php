<?php 

$data[] = $_POST;


$json = file_get_contents('js/data/json.json');
$data = json_decode($json);
$data[] = $_POST;
file_put_contents('js/data/json.json', json_encode($data));


// $inp = file_get_contents('js/data/json.json');
// var_dump($inp);
// $tempArray = json_decode($inp);
// array_push($tempArray, $data);
// $jsonData = json_encode($tempArray);
// file_put_contents('js/data/json.json', $jsonData);
?>