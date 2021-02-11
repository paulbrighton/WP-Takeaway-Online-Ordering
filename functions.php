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