<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Blog extends CI_Controller {


	function index(){
		$this->load->view('head');
		$this->load->view('nav');
		$this->load->view('blog/list');
		$this->load->view('tail');
	}
}
