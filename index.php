<?php get_header(); ?>
<div class="o-container u-margin-bottom-40 u-margin-top-40">
  <div class="o-row">
    <!-- Add "<?php echo is_active_sidebar('primary-sidebar') ? '8' : '12'; ?>@small" 
    instead of 12 if adding sidebar below -->
    <div class="o-col o-col-12">
      <?php get_template_part('loop') ?>
    </div>
    <!-- <?php if (is_active_sidebar('primary-sidebar')) { ?>
      <div class="o-col o-col-4@small">
        <?php get_sidebar() ?>
      </div>
    <?php } ?> -->
  </div>
</div>
<?php get_footer(); ?>