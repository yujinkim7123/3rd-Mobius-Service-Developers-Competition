$(document).ready(function(e) {
		//warning
		$('a#warning').click(function() {
			modal({
				type: 'warning',
				title: 'Warning',
        text: 'Would you like to stop the shoot? Return to main page. ',
        center: false,
        buttons: [{
		      text: 'OK', //Button Text
		      val: 'ok', //Button Value
		      eKey: true, //Enter Keypress
		      addClass: 'btn-light-white', //Button Classes (btn-large | btn-small | btn-green | btn-light-green | btn-purple | btn-orange | btn-pink | btn-turquoise | btn-blue | btn-light-blue | btn-light-red | btn-red | btn-yellow | btn-white | btn-black | btn-rounded | btn-circle | btn-square | btn-disabled)
		      onClick: function(dialog) {
			        location.href="gallery.html";
			        return true;
		}
	}, ],
      });
    });
	});
