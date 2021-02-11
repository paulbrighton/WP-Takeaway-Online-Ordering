<?php get_header(); ?>
<?php
$layout = _themename_meta(get_the_ID(), '__themename_post_layout', 'full');
$sidebar = is_active_sidebar('primary-sidebar');
if ($layout === 'sidebar' && !$sidebar) {
  $layout = 'full';
}
?>
<div class="o-container u-margin-bottom-40 u-margin-top-40 o-single-post-<?php echo $layout; ?>">
  <div class="o-row">
    <div class="o-col o-col-12 o-col-<?php echo $layout === 'sidebar' ? '8' : '12' ?>@medium">
      <?php get_template_part('single', 'loop'); ?>
    </div>
    <?php if ($layout === 'sidebar') { ?>
      <div class="o-col o-col-12 o-col-4@medium">
        <?php get_sidebar(); ?>
      </div>
    <?php } ?>
  </div>
</div>
<?php get_footer(); ?>