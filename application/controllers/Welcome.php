<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function index()
	{
		$this->photofolio();
	}

	function photofolio(){
		$this->load->view('head');
		$this->load->view('nav');
		$this->load->view('main');
		$this->load->view('tail');
	}
	function about(){

	}
	function blog(){

	}
	function blog_search(){

	}
}
