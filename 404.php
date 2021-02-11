<?php get_header(); ?>
<div class="o-container u-margin-bottom-40 o-single-post-<?php echo $layout; ?>">
  <div class="o-row">
    <div class="o-col o-col-12">
      <main role="main">
        <?php get_template_part('template-parts/post/content', 'none'); ?>
      </main>
    </div>
  </div>
</div>
<?php get_footer(); ?>