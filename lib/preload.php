<?php
// Add all fonts to preload here

add_action('wp_head', 'preload_fonts', 5);
function preload_fonts() {
?>
<link rel="preload" href="<?php echo get_template_directory_uri(); ?>/dist/assets/fonts/oxygen-v10-latin-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="<?php echo get_template_directory_uri(); ?>/dist/assets/fonts/oxygen-v10-latin-regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="<?php echo get_template_directory_uri(); ?>/dist/assets/fonts/ubuntu-v15-latin-500.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="<?php echo get_template_directory_uri(); ?>/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossorigin>
<?php
};
