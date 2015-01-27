jQuery(document).ready(function($) {

		//Nav menu small
		jQuery('#menu-toggle').click(
			function(){
	    		jQuery(this).toggleClass('opened');
	    		jQuery('#menu').toggleClass('opened');
				return false;
			}
		);

		jQuery('.flexslider').flexslider({
				animation: 'slide',
				controlNav: false
		});

		if( $('html').hasClass('ie8') ){

		}else{

		if (document.documentElement.clientWidth >= 640) {

			if  ( $('.project-description').length != 0 ){

				$('.project-description').hcSticky({
						className: 'jsSticky',
						bottom:0,
						top:0,
						followScroll: false
				});

			}

		}

		}

		if  ( $('#gmap').length != 0 ){

			new Maplace({
				locations: [{
					lat: 28.56594,
					lon: -81.32811,
					title: 'Findsome & Winmore',
					zoom: 12,
					icon: 'http://findsomewinmore.com/wp-content/themes/fiwi/images/map-icon.png',
					clickable: false
				}],
				map_options : {
					styles: [ { "stylers": [ { "hue": "#bdb9af" }, { "saturation": -80 } ] } ]
				},

				controls_on_map: false,
				generate_controls: false
			}).Load();

		}

		var $container = $('.js-masonry');
		// initialize Masonry after all images have loaded
		$container.imagesLoaded( function() {
		  $container.masonry({
			  columnWidth: ".post:nth-child(2)",
			  itemSelector: ".post",
			  transitionDuration: ".2s"
		  });
		});
		var $wire_masonry = $('.wire-issues');
		// initialize Masonry after all images have loaded
		$wire_masonry.imagesLoaded( function() {
		  $wire_masonry.masonry({
			  columnWidth: ".wire-issue:nth-child(2)",
			  itemSelector: ".wire-issue",
			  transitionDuration: ".2s"
		  });
		});


		wt.fix({
			elements: '.services-list p',
			chars: 20,
			event: 'resize'
		});


		var cookies;

function createCookie(name,value,days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	}
	document.cookie = name+"="+value+expires+";path=/";
}

function readCookie(name,c,C,i){
    if(cookies){ return cookies[name]; }

    c = document.cookie.split('; ');
    cookies = {};

    for(i=c.length-1; i>=0; i--){
       C = c[i].split('=');
       cookies[C[0]] = C[1];
    }

    return cookies[name];
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

		if(readCookie('social-modal-popup-page-count')) {
			var pageCount = readCookie('social-modal-popup-page-count');
			pageCount++;
			if(pageCount == 1) {
				var randomModal = Math.floor(Math.random() * 2) ;
				var modals = [ 'newsletter-modal', 'social-modal' ];
				$('[data-remodal-id=' + modals[randomModal] +']').remodal().open();
			}
		} else {
			var pageCount = 0;
		}
		createCookie('social-modal-popup-page-count', pageCount, 30);


		$("#e2ma_signup-modal").on("submit", function(e) {
			$('[data-remodal-id]').remodal().close();
		});


	});



// Emma form scripts -- This is for the 1 field form with only an email address.

var signupFormObj = {

    error_string: "",
    element_count: "1",

    drawForm: function() {
        if(this.error_string != '') {
            document.write(this.error_string);
        }
        else {
            //All old forms will be calling a drawForm method on signupFormObj
            //with no paramaters passed in.
            // var json_data = {"content": "<div class=\"e2ma_signup_form\" id=\"e2ma_signup_form\">\n    \n    <div class=\"e2ma_signup_message\" id=\"e2ma_signup_message\">    \n        <div>To sign up to receive our emails, fill in the following fields and hit submit. Thanks, and welcome!</div>\n    </div>\n    <div class=\"e2ma_signup_form_container\" id=\"e2ma_signup_form_container\">\n        <form target=\"_new\" method=\"post\" id=\"e2ma_signup\" onSubmit=\"return signupFormObj.checkForm(this)\" action=\"https://app.e2ma.net/app2/audience/signup/1757341/21605/?v=a\" >\n    \n    <input type=\"hidden\" name=\"prev_member_email\" id=\"id_prev_member_email\" />\n    \n    <input type=\"hidden\" name=\"source\" id=\"id_source\" />\n    \n    \n    \n    <input type=\"hidden\" name=\"group_1848421\" value=\"1848421\" id=\"id_group_1848421\" />\n    \n      <input type=\"hidden\" name=\"private_set\" value=\"{num_private}\">\n\n    \n    \n    \n    \n    \n    <div class=\"e2ma_signup_form_row\">\n      <div class=\"e2ma_signup_form_label\">\n        \n        <span class=\"e2ma_signup_form_required_asterix\">*</span>\n        \n        Email\n      </div>\n      <div class=\"e2ma_signup_form_element\"><input type=\"text\" name=\"email\" id=\"id_email\" /></div>\n    </div>\n    \n    \n    \n    <div class=\"e2ma_signup_form_required_footnote\"><span class=\"e2ma_signup_form_required_asterix\">*</span> required</div>\n    <div class=\"e2ma_signup_form_button_row\" id=\"e2ma_signup_form_button_row\">\n    <input id=\"e2ma_signup_submit_button\" class=\"e2ma_signup_form_button\" type=\"submit\" name=\"Submit\" value=\"Submit\" {disabled}>\n      &nbsp;\n      <input id=\"e2ma_signup_reset_button\" class=\"e2ma_signup_form_button\" type=\"reset\" value=\"Clear\" {disabled}>\n    </div>\n  </form>\n  </div>\n</div>\n<script type=\"text/javascript\">\nif (document.getElementById) { //if everything loads cool hide the link to emma\n    document.getElementById('load_check').style.display = 'none';\n}\n</script>\n"};

            // //print form
            // document.write(json_data.content);

        }
    },

    checkForm: function(form_obj) {
        //now handle required field validation
        json_fields = {"data": [{"widget_type": "text", "field_type": "text", "required": true, "name": "Name", "short_name": "name"}]};
        var element_array = json_fields.data;
        var why = "";
        for (var loop = 0; loop < element_array.length; loop++)
        {
            if(element_array[loop].widget_type == 'text' || element_array[loop].widget_type == 'long')
            {
                if(form_obj[element_array[loop].short_name].value == "")
                {
                    why += element_array[loop].name + " is a required field.\n"
                }
                else if(element_array[loop].short_name == 'name')
                {
                    var filter=/^[a-z0-9_\-\.\+]+@[a-z0-9_\-\.]+\.[a-z]{2,4}$/i;

                    if (!filter.test(form_obj[element_array[loop].short_name].value))
                    {
                        why += element_array[loop].name + " must be a valid email address.\n";
                    }
                }
                continue;
            }
            else if (element_array[loop].widget_type == 'check_multiple')
            {
                var element = form_obj[element_array[loop].short_name];
                if(signupFormObj.checkMulti(element))
                {
                    continue;
                }
                why += element_array[loop].name + " is a required field.\n";
            }
            else if (element_array[loop].widget_type == 'radio')
            {
                var flag = 'false';
                var element = form_obj[element_array[loop].short_name];
                if (signupFormObj.checkMulti(element))
                {
                    continue;
                }
                why += element_array[loop].name + " is a required field.\n";
            }
            else if (element_array[loop].widget_type == 'select one')
            {
                var index = form_obj[element_array[loop].short_name].selectedIndex;
                if(form_obj[element_array[loop].short_name].options[index].value == "")
                {
                    why += element_array[loop].name + " is a required field.\n";
                }
            }
            else if (element_array[loop].widget_type == 'select multiple')
            {
                var element = form_obj[element_array[loop].short_name];
                if(!signupFormObj.checkSelMulti(element)) {
                    why += element_array[loop].name + " is a required field.\n";
                }
            }
            else if (element_array[loop].widget_type == 'date')
            {
                var str_month = element_array[loop].widget_type + "_month";
                var str_day = element_array[loop].widget_type + "_day";
                var str_year = element_array[loop].widget_type + "_year";

                if (form_obj[str_month].selectedIndex < 1 || form_obj[str_day].selectedIndex < 1 || form_obj[str_year].selectedIndex < 1)
                {
                    why += element_array[loop].name + " is a required field.\n";
                }
            }
        }
        if (why != "") {
            alert(why);
            return false;
        }

        return true;

    },

    checkSelMulti: function (element) {
        for(var i = 0; i < element.length; i++) {
            if(element[i].selected) {
                return true;
            }
        }
        return false;
    },

    checkMulti: function (element) {
        for (var i = 0; i < element.length; i++) {
            if (element[i].checked)
            {
                return true;
            }
        }
        return false;
    }
}
