		<?php
			$wpch_meta_header = get_post_meta($post->ID, '_wpch_meta_header', true);
			$wpch_meta_target = get_post_meta($post->ID, '_wpch_meta_target', true);
			$wpch_meta_current = get_post_meta($post->ID, '_wpch_meta_current', true);
			$wpch_meta_footer = get_post_meta($post->ID, '_wpch_meta_footer', true);
			$wpch_meta_symbol = get_post_meta($post->ID, '_wpch_meta_curr_symbol', true);
			$wpch_meta_error = get_post_meta($post->ID, '_wpch_meta_error', true);
			$wpch_meta_title = get_post_meta($post->ID, '_wpch_meta_title', true);
			
						
			empty($wpch_meta_target) || $wpch_meta_target == '' ? $wpch_meta_target = '' : $wpch_meta_target; 
			
						
		?>
		<div id="wpch_metabox_container">
        	<div id="wpch_form_data">
        			<div> 
        				<p>Use the shortcode below in your post/page/sidebar.</p>
        				<p style="font-size:13px;background:#FEFEFE;padding:2px;text-align:center;"><code>[wpch_thermometer id="<?php echo $post->ID; ?>"]</code></p> 
                        <p style="font-size:13px;background:#FEFEFE;padding:2px;text-align:left;width:600px;">
                        	To position the Charity-Thermometer on the frontend use the following shortcode of your choice: <br />                            
                            [wpch_thermometer id="<?php echo $post->ID; ?>" position="left"]<br />
                            [wpch_thermometer id="<?php echo $post->ID; ?>" position="right"]<br />
                            Additionaly you when using the position='none' set the attribut margin to position your Thermometer accordingly. <br />
                            [wpch_thermometer id="<?php echo $post->ID; ?>" position="none" margin="0"]<br />                            
                            Remember to put the attribute for the scale, like `px` like so... margin="2px 5px 0 0"<br />
                            This is only applicable to shortcode generated when you create a thermometer. The single post for the custom_post_type of this is always positioned right.  
                        </p>
        			</div>	        			
            		<h2>Header Text</h2>			
            		<input type="text" name="wpch_frm_data_title_txt" id="wpch_frm_data_title_txt" class="widefat" placeholder="*Title" value="<?php _e($wpch_meta_title); ?>"/>
            		<input type="text" name="wpch_frm_data_txt_header" id="wpch_frm_data_txt_header" class="widefat" placeholder="*Header" value="<?php _e($wpch_meta_header); ?>"/>
                    <input type="text" name="wpch_frm_data_txt_value" id="wpch_frm_data_txt_value" class="widefat" placeholder="*Target" value="<?php _e($wpch_meta_target); ?>"/>
                    <select name="wpch_frm_data_currency" id="wpch_frm_data_currency">
                    	<?php
                    		if ($wpch_meta_symbol === "1"){
                    			$dollar = "selected=selected"; 
                    			$wpch_symbol = "&#36;";
                    		}else if ($wpch_meta_symbol === "2"){
                    			$pound = "selected=selected";
                    			$wpch_symbol = "&#xa3;";
                    		}else if ($wpch_meta_symbol === "3"){
                    			$yen = "selected=selected";
                    			$wpch_symbol = "&#xa5;";
                    		}else if ($wpch_meta_symbol === "4"){
                    			$euro = "selected=selected";
                    			$wpch_symbol = "&#x20ac;";
                    		}
                    			
                    	?>
                    	<option value="1" <?php echo $dollar; ?>>&#36;</option>
                    	<option value="2" <?php echo $pound; ?>>&#xa3;</option>
                    	<option value="3" <?php echo $yen; ?>>&#xa5;</option>
                    	<option value="4" <?php echo $euro; ?>>&#x20ac;</option>
                    </select>
                    
                    <h2>Current Total</h2>			                                     
            		<input type="text" name="wpch_cur_data_txt_value" id="wpch_cur_data_txt_value" class="widefat" placeholder="Current" value="<?php _e($wpch_meta_current); ?>"/>
                    <input id="wpch_slider" type="range" min="0" max="<?php echo $wpch_meta_target; ?>" onchange="setTempAndDraw();" value="0"/>
                    
                    <h2>Footer Text</h2>			
                    <input type="text" name="wpch_data_txt_footer" id="wpch_data_txt_footer" class="widefat" placeholder="Text Header" value="<?php _e($wpch_meta_footer); ?>" />
                    <input type="hidden" id="wpch_target_data_value" value="<?php _e($wpch_meta_target); ?>">
                    <input type="hidden" id="wpch_current_data_value" value="<?php _e($wpch_meta_current); ?>">
                                                           
			</div>
            <div id="wpch_image_indicator">   	         		
            		<h3 id="wpch_header_txt"><?php _e($wpch_meta_header); ?></h3>
                    <p id="wpch_target_value"><?php _e($wpch_symbol.$wpch_meta_target); ?></p>                               
            		<img id="wpch_therm_img" src="<?php echo plugins_url('/css/images/Thermometer.png', __DIR__); ?>"  />
                    <canvas id="thermometer" class="wpch_thermometer_canvas" width="200" height="416"></canvas> 
                    <p id="wpch_cti_img"><?php _e($wpch_symbol.$wpch_meta_current); ?></p>
                    <h3 style="clear:both" id="wpch_footer_txt"><?php _e($wpch_meta_footer); ?></h3>
                 
	                 <div id="paypal_donation" style="border-top:1px solid #DDD;">
		            	<p style="text-align:center;padding:5px 20px;">If you like this plugin, consider buying the author a 
		            	<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=33HE6UC8VRNRU&lc=PH&item_name=Charity%20Thermometer&item_number=charterm&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted">Coffee</a></p>
		            </div>
            </div>			
            	
		</div>