<?php
	require 'UserFactory.php';

	if(session_status() == PHP_SESSION_NONE){
		session_start();
	}
	$allOk = FALSE;
	$pass = "";
	$usr = "";
	if(isset($_POST['username']) && isset($_POST['password'])){
		$pass = $_POST['password'];
		$usr = $_POST['username'];
		if(UserFactory::loginOk($usr, $pass)){
			$allOk = TRUE;
		}
	}

	if($allOk == false){
		echo "{status: failed}";
	}else{
		echo "{status: success, user: $usr, role: }";
		$_SESSION['logged_in'] = TRUE;
		$_SESSION['user'] = $usr;
		$_SESSION['role'] = "";
	}
	
?>