<?php get_header(); ?>
<div class="c-front-page">

  <div style="background: url('<?php the_field('home_hero_image'); ?>') center center; background-size: cover; background-repeat: no-repeat;" class="c-hero">
    <div class="c-hero__overlay">
      <div class="c-hero__text">
        <h1 class="c-hero__text-top"><?php the_field('home_hero_text_top'); ?></h1>
        <p class="c-hero__text-middle"><?php the_field('home_hero_text_middle'); ?></p>
        <div class="c-hero__text-btn"><?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]'); ?></div>
      </div>
    </div>
  </div>

  <div class="c-front-page__welcome u-flex u-flex-direction-column u-align-middle">
    <h2><?php the_field('welcome_title'); ?></h2>
    <p><?php the_field('welcome_paragraph_top'); ?></p>
    <p><?php the_field('welcome_paragraph_bottom'); ?></p>
    <div class="c-front-page__welcome-btn"><?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]'); ?></div>
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

  <div class="our-food">
    <div class="our-food__title">
      <h2><?php the_field('our_food_title') ?></h2>
    </div>

    <div class="our-food__dishes">
      <div class="our-food-card our-food__dishes-main">
        <?php
        $image = get_field('main_dishes_image');
        $size = 'full'; // (thumbnail, medium, large, full or custom size)
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
        <div class="our-food-overlay">
          <div class="our-food-overlay-text">
            <h3 class="our-food-overlay-text-title food-main"><?php the_field('main_dishes_title') ?></h3>
            <div class="our-food-overlay-text-btn food-main-btn"><?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]'); ?></div>
          </div>
        </div>
      </div>

      <div class="our-food-card our-food__dishes-dim-sum">
        <?php
        $image = get_field('dim_sum_image');
        $size = 'full'; // (thumbnail, medium, large, full or custom size)
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
        <div class="our-food-overlay">
          <div class="our-food-overlay-text">
            <h3 class="our-food-overlay-text-title"><?php the_field('dim_sum_title') ?></h3>
            <div class="our-food-overlay-text-btn c-front-page__our-food__card-btn"><?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]'); ?></div>
          </div>
        </div>
      </div>

      <div class="our-food-card our-food__dishes-thai">
        <?php
        $image = get_field('thai_dishes_image');
        $size = 'full'; // (thumbnail, medium, large, full or custom size)
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
        <div class="our-food-overlay">
          <div class="our-food-overlay-text">
            <h3 class="our-food-overlay-text-title"><?php the_field('thai_dishes_title') ?></h3>
            <div class="our-food-overlay-text-btn c-front-page__our-food__card-btn"><?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]'); ?></div>
          </div>
        </div>
      </div>

      <div class="our-food-card our-food__dishes-appetisers">
        <?php if (wp_is_mobile()) : ?>
          <?php
        $image = get_field('appetisers_image_mobile');
        $size = 'full'; // (thumbnail, medium, large, full or custom size)
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      <?php else : ?>
        <?php
        $image = get_field('appetisers_image');
        $size = 'full'; // (thumbnail, medium, large, full or custom size)
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      <?php endif; ?>
        <div class="our-food-overlay">
          <div class="our-food-overlay-text">
            <h3 class="our-food-overlay-text-title"><?php the_field('appetisers_title') ?></h3>
            <div class="our-food-overlay-text-btn c-front-page__our-food__card-btn"><?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]'); ?></div>
          </div>
        </div>
      </div>
    </div>
    <div class="our-food-card our-food__dishes-noodles">
      <?php if (wp_is_mobile()) : ?>
        <?php
        $image = get_field('noodle_dishes_image_mobile');
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      <?php else : ?>
        <?php
        $image = get_field('noodle_dishes_image');
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      <?php endif; ?>

      <div class="our-food-overlay">
        <div class="our-food-overlay-text">
          <h3 class="our-food-overlay-text-title"><?php the_field('noodle_dishes_title') ?></h3>
          <div class="our-food-overlay-text-btn c-front-page__our-food__card-btn"><?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]'); ?></div>
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

  <div class="c-front-page__footer-order">
  <div class="c-front-page__footer-order-btn"><?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]'); ?></div>
  </div>

  <?php get_footer(); ?>