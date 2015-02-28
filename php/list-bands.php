<?php
require_once 'classes/band.class.php';

if(isset($_SESSION['is_logged_in']) && $_SESSION['is_logged_in'] === "TRUE" || TRUE){
	$bands = BandModel::getAllBands();
	var_dump($bands);

}else{
	echo "{'name' : 'failed'}";
}



?>