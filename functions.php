<?php

// Import php files from lib folder
require_once('lib/customize.php');
require_once('lib/helpers.php');
require_once('lib/enqueue-assets.php');
require_once('lib/sidebars.php');
require_once('lib/theme-support.php');
require_once('lib/navigation.php');
require_once('lib/comment-callback.php');
require_once('lib/images.php');
require_once('lib/translations.php');
require_once('lib/metaboxes.php');

function add_file_types_to_uploads($file_types){
  $new_filetypes = array();
  $new_filetypes['svg'] = 'image/svg';
  $file_types = array_merge($file_types, $new_filetypes );
  return $file_types;
}
add_filter('upload_mimes', 'add_file_types_to_uploads');

function my_exclude_ipad_and_tablets( $is_mobile ) {
  if( 
  false !== strpos( strtolower( $_SERVER['HTTP_USER_AGENT'] ),'ipad' )
  || false !== strpos( strtolower( $_SERVER['HTTP_USER_AGENT'] ),'tablet' )
  || false !== strpos( strtolower( $_SERVER['HTTP_USER_AGENT'] ),'playbook' )
  || false !== strpos( strtolower( $_SERVER['HTTP_USER_AGENT'] ),'mobi|opera mini' )
){
      return false;
  }
  return $is_mobile;
}
add_filter( 'wp_is_mobile','my_exclude_ipad_and_tablets' );

function add_rel_preload($html, $handle, $href, $media) {
    
  if (is_admin())
      return $html;

   $html = <<<EOT
<link rel='preload' as='style' onload="this.onload=null;this.rel='stylesheet'" id='$handle' href='$href' type='text/css' media='all' crossorigin='anonymous' />
EOT;
  return $html;
}
add_filter( 'style_loader_tag', 'add_rel_preload', 10, 4 );

add_action('wp_head', 'fouc_protect_against');
/**
 * Combat FOUC in WordPress
 * @link https://stackoverflow.com/questions/3221561/eliminate-flash-of-unstyled-content
 */
function fouc_protect_against () {
    ?>
        <style type="text/css">
            .hidden {display:none;}
        </style>
        <script type="text/javascript">
         jQuery('html').addClass('hidden');
	            
	 jQuery(document).ready(function($) {		            
	    $('html').removeClass('hidden');	            
	 });  
        </script>
    <?php

}

function add_defer_attribute( $tag, $handle ) {

  $scripts_to_defer = array(
      'jquery',
      'jquery-migrate',
      'bootstrap-bundle-js'
  );

  foreach ( $scripts_to_defer as $defer_script ) {
      if ( $defer_script === $handle ) {
          return str_replace( "src", "defer src", $tag );
      }
  }

  return $tag;
}
add_filter( 'script_loader_tag', 'add_defer_attribute', 10, 2 );

add_filter('wpcf7_autop_or_not', '__return_false');