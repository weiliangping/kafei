
;( function ( window, $ ) {
	var myScroll, myScroll2, myScroll3, myScroll4, myScroll5;
	$( document ).ready( function () {
		bindAnchorEvt();
		 myScroll2 = new iScroll( 'linkman', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll3 = new iScroll( 'trends', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll4 = new iScroll( 'set', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll6 = new iScroll( 'news', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll7 = new iScroll( 'crowd', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll8 = new iScroll( 'message', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll9 = new iScroll( 'talking', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll10 = new iScroll( 'friend', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll11 = new iScroll( 'about', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll12 = new iScroll( 'online', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll13 = new iScroll( 'nearby', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll14 = new iScroll( 'mine', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll15 = new iScroll( 'erweima', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll16 = new iScroll( 'sound', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll17 = new iScroll( 'assist', { checkDOMChanges: true, fadeScrollbar: true } );
		myScroll18 = new iScroll( 'regard', { checkDOMChanges: true, fadeScrollbar: true } );
		bindFooterEapEvt();
	});
	
	function bindAnchorEvt(){

		$('#header, #wrapper, #footer').on( 'click', 'a[href]', function( e ){
		//alert(1);
			var tmpId = $(this).attr('href');
			//alert(tmpId);
			var title = $(this).attr('title');
			//alert(title);
			$( tmpId ).css({
				'-webkit-transition': '-webkit-transform 200ms',
				'-webkit-transform-origin': '0% 0%',
				'-webkit-transform': 'translate(0%, 0%) scale(1) translateZ(0px)',
				'opacity': 1
			}).siblings().css({
				'-webkit-transition': '-webkit-transform 200ms',
				'-webkit-transform-origin': '0% 0%',
				'-webkit-transform': 'translate(100%, 0%) scale(1) translateZ(0px)',
				'opacity': 0
			});
			e.preventDefault();
			
			reviseTopBar( title, tmpId );
			
		});		
		
	}		
	//变换title
	function reviseTopBar(lei,ids){		
		if(lei){
			$('#header label').text(lei);
		}
	}
	//点击footer加背景
	function bindFooterEapEvt(){
		var $masker = $( '#footer .masker' ),
			index;
		$('#footer li').on( 'click', function () {
			index = $(this).index() * 100;
			$masker.css({
				'-webkit-transition': '-webkit-transform 200ms',
				'-webkit-transform-origin': '0% 0%',
				'-webkit-transform': 'translate('+index+'%, 0%) scale(1) translateZ(0px)'
			});
		} )
	}
		
})( window, Zepto );









