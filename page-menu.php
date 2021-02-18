<?php get_header(); ?>
<div class="c-menu">
  <div style="background: #0D0A08 url('<?php the_field('menu_hero_image'); ?>') center right; background-size: cover; background-repeat: no-repeat;" class="c-hero">
    <div class="c-hero__overlay c-hero__overlay--menu">
      <div class="c-hero__text">
        <h1 class="c-hero__text-top"><?php the_field('menu_hero_text_top'); ?></h1>
        <p class="c-hero__text-middle"><?php the_field('menu_hero_text_middle'); ?></p>
        <div class="c-hero__text-btn glf-btn-basic-gradient"><?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]'); ?></div>
      </div>
    </div>
  </div>

  <div class="o-container">
    <div class="c-menu__heading">
      <div class="c-front-page__welcome-warning--contact">
        <p class="c-front-page__welcome-warning c-front-page__welcome-warning--contact-p"><span>Note: </span>This is a demo takeaway website and no orders will be fulfilled. If you would like a similar website for your business, please contact <a href="https://www.paulbrighton.com/">Paul Brighton</a>.</p>
      </div>
      <h2>Menu</h2>
    </div>
    <?php echo do_shortcode('[restaurant-full-menu ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]') ?>
    <div class="menu-page-button">
      <div class="glf-btn-basic-gradient"><?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]'); ?></div>

    </div>
  </div>
</div>

<?php get_footer(); ?>