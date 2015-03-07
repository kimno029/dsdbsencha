<?php
require_once 'himitsu/himitsu.php';
if(session_status() == PHP_SESSION_NONE){
	// echo "No session active".session_name();
	session_start();
	
}


if(isset($_SESSION['is_logged_in']) && $_SESSION['is_logged_in'] == "TRUE" ){
	// echo $_SESSION['is_logged_in'];
	$con_string = Himitsu::getHimitsu();
	$db_con = pg_connect($con_string);
	pg_prepare($db_con, "get_all_countries", "select * FROM countries");

	$result = pg_execute($db_con, "get_all_countries", array());

	$countries = array();


	while($obj = pg_fetch_assoc($result)){
		// $new_band = new Band($obj->id, $obj->name, $obj->contact, $obj->city, $obj->modtime);
		// $bands[] = $new_band;
		$countries[] = $obj;
	}

	echo "{'success': true ,";
	echo "'countries': ";
	echo json_encode($countries);
	// var_dump($bands);
	echo "}";

}else{
	// echo $_SESSION['is_logged_in'];
	echo "{'status' : 'failed'}";
}



?>