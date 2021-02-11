<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <header role="banner" class="c-header__main">
    <div class="c-header o-container--full u-flex u-align-justify u-align-middle">

      <div class="c-header__logo o-col o-col-6@xsmall o-col-4@large">
        <?php if (has_custom_logo()) {
          the_custom_logo();
        } else { ?>
          <a class="c-header__blogname" href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html(bloginfo('name')); ?></a>
        <?php } ?>
      </div>

      <div class="c-header__nav o-col o-col-6@xsmall o-col-4@large">

        <div class="c-header__nav--mobile">
          <a class="openbtn"><i class="fas fa-bars"></i></a>
          <div id="myNav" class="overlay">
            <a href="javascript:void(0)" class="closebtn"><i class="fas fa-times"></i></a>
            <div class="overlay-content">
              <nav>
                <?php if (has_nav_menu('primary')) {
                  wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'nav-menu'
                  ));
                }
                ?>
              </nav>
            </div>
          </div>
        </div>

        <div class="c-header__nav--desktop">
          <?php if (has_nav_menu('primary')) {
            wp_nav_menu(array(
              'theme_location' => 'primary',
              'menu_class' => 'nav-menu--desktop'
            ));
          }
          ?>
        </div>

      </div>
      <div class="c-header__orders-container o-col o-col-0 o-col-4@large">
        <div class="c-header__orders">
          <div class="c-header__orders-phone">
            <div class="c-header__orders-phone-message"><?php the_field('telephone_message', 6) ?><span><a href="tel: <?php echo the_field('telephone_number_link', 6) ?>"><?php the_field('telephone_number', 6) ?></a></span></div>
          </div>
          <div class="c-header__orders-online">
            <div class="c-header__orders-online-message"><?php the_field('header_order_text', 6) ?><span> <?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]') ?></span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="c-header__orders--mobile">
      <div class="c-header__orders-phone c-header__orders-phone--mobile">
        <div class="c-header__orders-phone-message"><?php the_field('telephone_message',6) ?><span><a href="tel: <?php echo the_field('telephone_number_link', 6) ?>"><?php the_field('telephone_number', 6) ?></a></span></div>
      </div>
      <div class="c-header__orders-online">
        <div class="c-header__orders-online-message"><?php the_field('header_order_text',6) ?><span> <?php echo do_shortcode('[restaurant-menu-and-ordering class="glf-btn-basic" ruid="1750f287-d944-4c01-8f21-68c91ed10d5c"]') ?></span></div>
      </div>
    </div>
  </header>
  <div class="c-component-nav o-container">
    <?php if (has_nav_menu('components')) {
      wp_nav_menu(array(
        'theme_location' => 'components'
      ));
    }
    ?>
  </div>

  <main id="content" role="main">