<?php
	require 'UserFactory.php';
	$TRUE = "TRUE";
	$FALSE = "FALSE";



	if(session_status() == PHP_SESSION_NONE){
		
		session_start();
				
	}

	if(isset($_SESSION['user']) && isset($_SESSION['is_logged_in']) && $_SESSION['is_logged_in'] === $TRUE){
			$usr = $_SESSION['user'];
			$role = $_SESSION['role'];
			echo "{'status': 'success', 'username': '$usr', 'role' : '$role' }";
			
	}else{
		$allOk = $FALSE;
		$pass = "";
		$usr = "";
		if(isset($_POST['username']) && isset($_POST['password'])){
			$pass = $_POST['password'];
			$usr = $_POST['username'];
			if(UserFactory::loginOk($usr, $pass)){
				$allOk = $TRUE;
				$_SESSION['is_logged_in'] = $TRUE;
				$_SESSION['user'] = $usr;
				$_SESSION['role'] = "admin";
			}
		}

		if($allOk == $FALSE){
			echo "{'status': 'failed'";
			if(isset($_SESSION['user'])){
				echo ", 'user' : '".$_SESSION['user']."'";
			}
			if(isset($_SESSION['is_logged_in'])){
				echo ", 'is_logged_in' : ".$_SESSION['is_logged_in'];	
			}

			echo "}";
			
		}else{
			echo "{'status': 'success', 'username': '$usr', 'role' : 'admin' }";
			
		}
	}
	
?>