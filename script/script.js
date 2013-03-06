// JavaScript Document

	jQuery(document).ready(function($){		
	
			$('#wpch_frm_data_txt_header').keyup(function(){
					$('#wpch_header_txt').text( $(this).val());
			});
			
			$('#wpch_frm_data_txt_value').keydown(function(event){
					
					if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
						 // Allow: Ctrl+A
						(event.keyCode == 65 && event.ctrlKey === true) || 
						 // Allow: home, end, left, right
						(event.keyCode >= 35 && event.keyCode <= 39)) {
							 // let it happen, don't do anything							
							 return; 
					}
					else {
						// Ensure that it is a number and stop the keypress
						if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
							event.preventDefault(); 
							$(this).css({ 'border-color' : 'red' });
						}else{
							$(this).css({ 'border-color' : '#EEE' });							
						}   
					}
			});
			
			$('#wpch_cur_data_txt_value').keydown(function(event){
					
					if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
						 // Allow: Ctrl+A
						(event.keyCode == 65 && event.ctrlKey === true) || 
						 // Allow: home, end, left, right
						(event.keyCode >= 35 && event.keyCode <= 39)) {
							 // let it happen, don't do anything							
							 return; 
					}
					else {
						// Ensure that it is a number and stop the keypress
						if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
							event.preventDefault(); 
							$(this).css({ 'border-color' : 'red' });
						}else{
							$(this).css({ 'border-color' : '#EEE' });							
						}   
					}
			}).keyup(function(event){
				if ( jQuery(this).val() > wpch_target ){
					//console.log(jQuery(this).val());
				}
				if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
						 // Allow: Ctrl+A
						(event.keyCode == 65 && event.ctrlKey === true) || 
						 // Allow: home, end, left, right
						(event.keyCode >= 35 && event.keyCode <= 39)) {
							 // let it happen, don't do anything	
							 wpch_current = jQuery(this).val();
							 var _symbol = jQuery('#wpch_frm_data_currency option:selected').text();
							 jQuery('#wpch_cti_img').text(_symbol+''+wpch_current);
							 jQuery('#wpch_slider').val(wpch_current);
							 draw();						
							 return; 
				}
				else {
					if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
							event.preventDefault(); 
					}else{
							wpch_current = jQuery(this).val();
							var _symbol = jQuery('#wpch_frm_data_currency option:selected').text();
							jQuery('#wpch_cti_img').text(_symbol+''+wpch_current);
							jQuery('#wpch_slider').val(wpch_current);
							draw();							
					}
				}	   
					
			});
			
			$('#wpch_data_txt_footer').keyup(function(){
					$('#wpch_footer_txt').text( $(this).val());
			});
			
			jQuery('#wpch_slider').val( jQuery('#wpch_cur_data_txt_value').val());
			
			//Get postmeta data if document is ready..
			wpch_target = jQuery('#wpch_target_data_value').val();
			wpch_current = jQuery('#wpch_current_data_value').val();
			//Draw the canvas
			draw();
			
	});//end of document...
	
	
