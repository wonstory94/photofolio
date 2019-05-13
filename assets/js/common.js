$isShowMenu = false;	// 메뉴가 활성화 상태인지
$targetMenu = false;	// 마지막으로 열린 메뉴가 무엇인지

//메인 로딩시 로딩 이미지 넣기
$(window).load(function() {     
	setTimeout(function(){ $('#loading').hide(); }, 300);
}); 
//화면크기 변할때 마다 .sub_container영역 변경
$(window).resize(function() {
	//set_menu_size();
});
// function set_menu_size(){
// 	$menu_off_size = 0;
// 	$menu_on_size = 0;
// 	$windowsize = innerWidth;

// 	if ($windowsize < 768) {
// 		$menu_off_size = 205;
// 		$menu_on_size = 205;
// 	}else if ($windowsize >= 768 && $windowsize < 1024){
// 		$menu_off_size = 233;
// 		$menu_on_size = 233
// 	}else if ($windowsize >= 1024 && $windowsize <1280) {
// 		$menu_off_size = 237;
// 		$menu_on_size = 377;
// 	}else {
// 		$menu_off_size = 262;
// 		$menu_on_size = 410;
// 	}

// 	if($isShowMenu){
// 		//$( ".sub_container" ).css("paddingTop",$menu_on_size+"px");
// 	}else{
// 		//$( ".sub_container" ).css("paddingTop",$menu_off_size+"px");
// 	}

// }
$(document).ready(function(){
	//set_menu_size();

	/*메뉴버튼눌렀을때 사이드메뉴 펼쳐줌*/
	$( ".menu_btn" ).click(function() {
		$( "#menu_list" ).toggle("slide" );
		$(".back").fadeToggle();
	});
	/*메뉴버튼 옆 닫기버튼 사이드메뉴 닫아줌*/
	$( ".menu_closebtn" ).click(function() {
		$( "#menu_list" ).toggle("slide" );
		$(".back").fadeToggle();
		$(".sn").hide();
	});
	/*메뉴버튼 누르면 나타나는 검은화면 누르면 사이드메뉴 닫아줌*/
	$(".back").click(function(){
		$("#menu_list").toggle("slide");
		$(".back").fadeToggle("fast");
		$(".sn").hide();
	});
	/*이미지 hover시 어둡게*/
	/*$(".box").hover(
		function() {
			$(this).append('<div class="box_hover"></div>');
			$(this).find('.box_hover').show();
		} , function() {
			$(this).find('.box_hover').remove();
		}
		);*/
	/*사이드메뉴의 하위메뉴목록*/
	$( ".smcolor1" ).click(
		function() {
			$( ".sn1" ).toggle();
			$( ".sn2").hide();
			$( ".sn3").hide();
			$( ".sn4").hide();
			$( ".sn5").hide();
		}
	);
	$( ".smcolor2" ).click(
		function() {
			$( ".sn1" ).hide();
			$( ".sn2").toggle();
			$( ".sn3").hide();
			$( ".sn4").hide();
			$( ".sn5").hide();
		}
	);
	$( ".smcolor3" ).click(
		function() {
			$( ".sn1" ).hide();
			$( ".sn2").hide();
			$( ".sn3").toggle();
			$( ".sn4").hide();
			$( ".sn5").hide();
		}
	);
	$( ".smcolor4" ).click(
		function() {
			$( ".sn1" ).hide();
			$( ".sn2").hide();
			$( ".sn3").hide();
			$( ".sn4").toggle();
			$( ".sn5").hide();
		}
	);
	$( ".smcolor5" ).click(
		function() {
			$( ".sn1" ).hide();
			$( ".sn2").hide();
			$( ".sn3").hide();
			$( ".sn4").hide();
			$( ".sn5").toggle();
		}
	);

	/*sub_head 메뉴 */
	$(".sb1").mouseover(
		function() {
			if($isShowMenu && $targetMenu !== 'sub_head1'){
				$(".sh_display").hide();
				$(".sub_head1").show();
				$targetMenu = 'sub_head1';
				return true;
			}

			if(!$isShowMenu){
				$(".sh_display").hide();
				// $( ".sub_container" ).animate({ paddingTop : $menu_on_size+"px" }, 0, function() {});
				$(".sub_head1").slideDown(0);
				$isShowMenu = true;
				$targetMenu = 'sub_head1';
			}
		}
		);
	$(".sb2").mouseover(
		function() {
			if($isShowMenu && $targetMenu !== 'sub_head2'){
				$(".sh_display").hide();
				$(".sub_head2").show();
				$targetMenu = 'sub_head2';
				return true;
			}

			if(!$isShowMenu){
				$(".sh_display").hide();
				// $( ".sub_container" ).animate({ paddingTop :  $menu_on_size+"px" }, 0, function() {});
				$(".sub_head2").slideDown(0);
				$isShowMenu = true;
				$targetMenu = 'sub_head2';
			}
		}
		);
	$(".sb3").mouseover(
		function() {
			if($isShowMenu && $targetMenu !== 'sub_head3'){
				$(".sh_display").hide();
				$(".sub_head3").show();
				$targetMenu = 'sub_head3';
				return true;
			}

			if(!$isShowMenu){
				$(".sh_display").hide();
				// $( ".sub_container" ).animate({ paddingTop :  $menu_on_size+"px" }, 0, function() {});
				$(".sub_head3").slideDown(0);
				$isShowMenu = true;
				$targetMenu = 'sub_head3';
			}
		}
		);
	$(".sb4").mouseover(
		function() {
			if($isShowMenu && $targetMenu !== 'sub_head4'){
				$(".sh_display").hide();
				$(".sub_head4").show();
				$targetMenu = 'sub_head4';
				return true;
			}

			if(!$isShowMenu){
				$(".sh_display").hide();
				// $( ".sub_container" ).animate({ paddingTop :  $menu_on_size+"px" }, 0, function() {});
				$(".sub_head4").slideDown(0);
				$isShowMenu = true;
				$targetMenu = 'sub_head4';
			}
		}
		);
	$(".sb5").mouseover(
		function() {
			if($isShowMenu && $targetMenu !== 'sub_head5'){
				$(".sh_display").hide();
				$(".sub_head5").show();
				$targetMenu = 'sub_head5';
				return true;
			}

			if(!$isShowMenu){
				$(".sh_display").hide();
				// $( ".sub_container" ).animate({ paddingTop :  $menu_on_size+"px" }, 0, function() {});
				$(".sub_head5").slideDown(0);
				$isShowMenu = true;
				$targetMenu = 'sub_head5';
			}
		}
		);
	/*$(".sub_back").mouseover(
		function(){

				$(".sh_display").slideUp(0);
				//$( ".sub_container" ).animate({	paddingTop : $menu_off_size+"px" }, 0, function() {});
				$isShowMenu = false;

		}
	);*/
});

