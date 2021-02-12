<?php get_header(); ?>

<div class="c-contact">
  <div style="background: url('<?php the_field('contact_hero_image'); ?>') center center; background-size: cover; background-repeat: no-repeat;" class="c-hero c-hero-contact">
    <div class="c-hero__overlay c-hero__overlay--contact">
      <div class="c-hero__text">
        <h1 class="c-hero__text-top"><?php the_field('contact_hero_text_top'); ?></h1>
        <p class="c-hero__text-middle"><?php the_field('contact_hero_text_middle'); ?></p>
      </div>
    </div>
  </div>
</div>

<?php get_footer(); ?>