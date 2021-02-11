<?php get_header(); ?>
<div class="o-container u-margin-bottom-40">
  <div class="o-row">
    <div class="o-col o-col-12">
      <header>
        <?php the_archive_title('<h1>', '</h1>'); ?>
        <?php the_archive_description('<p>', '</p>') ?>
      </header>
    </div>

    <div
      class="o-col o-col-12 o-col-<?php echo is_active_sidebar( 'primary-sidebar' ) ? '8' : '12'; ?>@small">
      <main role="main">
        <?php get_template_part('loop', 'index') ?>
      </main>
    </div>
    <?php if(is_active_sidebar( 'primary-sidebar' )) { ?>
    <div class="o-col o-col-12 o-col-4@small">
      <?php get_sidebar() ?>
    </div>
    <?php } ?>
  </div>
</div>
<?php get_footer(); ?>