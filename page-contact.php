<?php get_header(); ?>

<div class="c-contact">
  <div style="background: #0D0A08 url('<?php the_field('contact_hero_image'); ?>') center center; background-size: cover; background-repeat: no-repeat;" class="c-hero c-hero-contact">
    <div class="c-hero__overlay c-hero__overlay--contact">
      <div class="c-hero__text">
        <h1 class="c-hero__text-top"><?php the_field('contact_hero_text_top'); ?></h1>
        <p class="c-hero__text-middle"><?php the_field('contact_hero_text_middle'); ?></p>
      </div>
    </div>
  </div>

  <div class="c-contact__heading">
    <h2><?php the_field('contact_title'); ?></h2>
  </div>

  <div class="c-contact__info">
    <div class="u-flex c-contact__info-container">
      <div class="c-contact__map">
        <?php echo do_shortcode('[wpgmza id="1"]') ?>
      </div>

      <div class="c-contact__details u-flex u-align-middle">
        <div class="c-contact__details-container u-flex u-flex-direction-column u-align-middle u-justify-middle">
          <div class="c-contact__details-address">
            <h2><?php the_field('address_title') ?></h2>
            <p><?php the_field('address_line_1') ?></p>
            <p><?php the_field('address_line_2') ?></p>
            <p><?php the_field('address_line_3') ?></p>
            <p><?php the_field('address_line_4') ?></p>
          </div>

          <div class="c-contact__details-phone">
            <h3>Telephone</h3>
            <p><?php the_field('phone_text') ?><a href="<?php the_field('phone_link') ?>"> <?php the_field('phone_number') ?></a></p>
          </div>

          <div class="c-contact__details-social">
            <h3>Social Media</h3>
            <p><?php the_field('social_text') ?> <a href="<?php the_field('social_link') ?>"><?php the_field('social_link_text') ?></a></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="c-contact__form">
    <div class="c-contact__heading c-contact__heading--form">
      <h4>Contact us using the form and we’ll get back to you as soon as possible</h4>
    </div>

    <div class="c-contact-form">
      <div class="o-container">
        <!-- Disabled submit button in main.js -->
        <?php echo do_shortcode('[contact-form-7 id="45" title="Contact form 1"]') ?>
      </div>
    </div>
  </div>

  <?php get_footer(); ?>