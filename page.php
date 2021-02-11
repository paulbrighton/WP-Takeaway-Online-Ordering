<?php get_header(); ?>
<div class="o-container u-margin-bottom-40 u-margin-top-40">
  <div class="o-row">
    <div class="o-col o-col-12">
      <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
          <?php the_content(); ?>
        <?php endwhile; ?>
      <?php endif; ?>
    </div>
  </div>
</div>
<?php get_footer(); ?>