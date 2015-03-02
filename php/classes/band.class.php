<?php

require_once '/../himitsu/himitsu.php';

class Band{
	private $id;
	private $name;
	private $contact;
	private $city;
	private $modtime;

	function __construct($_id, $_name, $_contact, $_city, $_modtime){
		$this->id = $_id;
		$this->name = $_name;
		$this->contact = $_contact;
		$this->modtime = $_modtime;
	}

	public function getName(){
		return $this->name;
	}

	public function getContact(){
		return $this->contact;
	}
}

class BandModel{
	public static function getAllBands(){
		$con_string = Himitsu::getHimitsu();
		$db_con = pg_connect($con_string);
		pg_prepare($db_con, "get_all_bands", "select * FROM bands");

		$result = pg_execute($db_con, "get_all_bands", array());

		$bands = array();


		while($obj = pg_fetch_assoc($result)){
			// $new_band = new Band($obj->id, $obj->name, $obj->contact, $obj->city, $obj->modtime);
			// $bands[] = $new_band;
			$bands[] = $obj;
		}


		return $bands;
	}
}

?>