<!-- Add all fonts to preload here -->
<?php

add_action( 'wp_head', function () {
	$fonts_dir = get_template_directory_uri() . '/dist/assets/fonts';
	?>

<link rel="preload" href="<?php echo get_template_directory_uri(); ?>/dist/assets/fonts/oxygen-v10-latin-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="<?php echo get_template_directory_uri(); ?>/dist/assets/fonts/oxygen-v10-latin-regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="<?php echo get_template_directory_uri(); ?>/dist/assets/fonts/ubuntu-v15-latin-500.woff2" as="font" type="font/woff2" crossorigin>
<?php } );