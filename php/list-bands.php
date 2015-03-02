<?php
require_once 'classes/band.class.php';

if(session_status() == PHP_SESSION_NONE){
	// echo "No session active".session_name();
	session_start();
	
}


if(isset($_SESSION['is_logged_in']) && $_SESSION['is_logged_in'] == "TRUE" ){
	// echo $_SESSION['is_logged_in'];
	$bands = BandModel::getAllBands();

	echo "{'success': true ,";
	echo "'bands': ";
	echo json_encode($bands);
	// var_dump($bands);
	echo "}";

}else{
	// echo $_SESSION['is_logged_in'];
	echo "{'status' : 'failed'}";
}



?>