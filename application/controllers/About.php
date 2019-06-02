<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class About extends CI_Controller {

	public function index()
	{
		$this->load->view('head');
		$this->load->view('nav');
		$this->load->view('main');
		$this->load->view('tail');
	}
	
}
