<?php 

add_action( 'wp_enqueue_scripts', 'chicdressing_enqueue_styles' );
function chicdressing_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' ); 
}

add_filter( 'big_image_size_threshold', '__return_false' );

 
function enqueue_child_theme_styles() {
    // Déchargement des styles du thème parent qui chargent les polices Google Fonts
    wp_dequeue_style('ashe-playfair-font');
    wp_dequeue_style('ashe-opensans-font');
    wp_dequeue_style('ashe-kalam-font');

    // Enregistrement et ajout de mes propres styles pour les polices Google Fonts
    wp_enqueue_style('custom-google-fonts', get_stylesheet_directory_uri() . '/wp-content/themes/chicdressing/style.css');
}
add_action('wp_enqueue_scripts', 'enqueue_child_theme_styles', 11);

remove_action( 'shutdown', 'wp_ob_end_flush_all', 1 );
add_action( 'shutdown', function() {
   while ( @ob_end_flush() );
} );
