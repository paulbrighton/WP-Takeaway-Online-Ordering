<?php get_header(); ?>
<div class="c-menu">
  <div style="background: url('<?php the_field('menu_hero_image'); ?>') center right; background-size: cover; background-repeat: no-repeat;" class="c-hero">
    <div class="c-hero__overlay c-hero__overlay--menu">
      <div class="c-hero__text">
        <h1 class="c-hero__text-top"><?php the_field('menu_hero_text_top'); ?></h1>
        <p class="c-hero__text-middle"><?php the_field('menu_hero_text_middle'); ?></p>
        <div class="c-hero__text-btn"><?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]'); ?></div>
      </div>
    </div>
  </div>

  <div class="o-container">
    <?php echo do_shortcode('[restaurant-full-menu ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]') ?>
  </div>
</div>

<?php get_footer(); ?>