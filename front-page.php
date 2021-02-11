<?php get_header(); ?>
<div style="background: url('<?php the_field('home_hero_image'); ?>') center center; background-size: cover; background-repeat: no-repeat;" class="c-home-hero">
  <div class="c-home-hero__text">
    <h1 class="c-home-hero__text-top"><?php the_field('home_hero_text_top') ?></h1>
    <p class="c-home-hero__text-middle"><?php the_field('home_hero_text_middle') ?></p>
    <div class="c-home-hero__text-btn"><?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]') ?></div>
  </div>
</div>
<?php get_footer(); ?>