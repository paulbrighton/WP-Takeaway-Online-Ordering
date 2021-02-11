<?php get_header(); ?>
<div class="c-front-page">
  <div style="background: url('<?php the_field('home_hero_image'); ?>') center center; background-size: cover; background-repeat: no-repeat;" class="c-home-hero">
    <div class="c-home-hero__text">
      <h1 class="c-home-hero__text-top"><?php the_field('home_hero_text_top'); ?></h1>
      <p class="c-home-hero__text-middle"><?php the_field('home_hero_text_middle'); ?></p>
      <div class="c-home-hero__text-btn"><?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]'); ?></div>
    </div>
  </div>

  <div class="c-front-page__welcome u-flex u-flex-direction-column u-align-middle">
    <h2><?php the_field('welcome_title'); ?></h2>
    <p><?php the_field('welcome_paragraph_top'); ?></p>
    <p><?php the_field('welcome_paragraph_bottom'); ?></p>
  </div>

  <div class="c-front-page__ordering-options">
    <h2><?php the_field('ordering_options_title'); ?></h2>
    <div class="o-container-full">
      <div class="o-row c-front-page__ordering-options__card-layout">
        <div class="o-col o-col-12 o-col-4@medium card card-online">
          <h3><?php the_field('order_online_title'); ?></h3>
          <div class="card-body">
            <p><?php the_field('order_online_description'); ?></p>
          </div>
          <div class="card-links">
            <div class="card-online-btn"><?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]'); ?></div>
          </div>
        </div>

        <div class="o-col o-col-12 o-col-4@medium card card-phone">
          <h3><?php the_field('call_us_title'); ?></h3>
          <div class="card-body">
            <p><?php the_field('call_us_description'); ?></p>
          </div>
          <div class="card-links">
            <p><?php the_field('call_us_contact_info'); ?></p>
          </div>
        </div>

        <div class="o-col o-col-12 o-col-4@medium card card-visit">
          <h3><?php the_field('visit_us_title'); ?></h3>
          <div class="card-body">
            <p><?php the_field('visit_us_description'); ?></p>
          </div>
          <div class="card-links">
            <p><?php the_field('visit_us_info'); ?></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="c-front-page__reviews">
    <h2><?php the_field('reviews_title'); ?></h2>
    <div class="o-container--full">
      <div class="o-row c-front-page__reviews__card-layout">
        <div class="o-col o-col-12 o-col-3@medium card card-online">
          <h4><?php the_field('reviewer_1_title'); ?></h4>
          <div class="card-body">
            <p><?php the_field('reviewer_1_review'); ?></p>
          </div>
          <div class="card-author">
            <h5><?php the_field('reviewer_1_name'); ?></h5>
            <p><?php the_field('reviewer_1_location'); ?></p>
          </div>
        </div>

        <div class="o-col o-col-12 o-col-3@medium card card-review">
          <h4><?php the_field('reviewer_2_title'); ?></h4>
          <div class="card-body">
            <p><?php the_field('reviewer_2_review'); ?></p>
          </div>
          <div class="card-author">
          <h5><?php the_field('reviewer_2_name'); ?></h5>
            <p><?php the_field('reviewer_2_location'); ?></p>
          </div>
        </div>

        <div class="o-col o-col-12 o-col-3@medium card card-review">
          <h4><?php the_field('reviewer_3_title'); ?></h4>
          <div class="card-body">
            <p><?php the_field('reviewer_3_review'); ?></p>
          </div>
          <div class="card-author">
          <h5><?php the_field('reviewer_3_name'); ?></h5>
            <p><?php the_field('reviewer_3_location'); ?></p>
          </div>
        </div>

        <div class="o-col o-col-12 o-col-3@medium card card-review">
          <h4><?php the_field('reviewer_4_title'); ?></h4>
          <div class="card-body">
            <p><?php the_field('reviewer_4_review'); ?></p>
          </div>
          <div class="card-author">
          <h5><?php the_field('reviewer_4_name'); ?></h5>
            <p><?php the_field('reviewer_4_location'); ?></p>
        </div>
      </div>
    </div>
  </div>
</div>

<?php get_footer(); ?>