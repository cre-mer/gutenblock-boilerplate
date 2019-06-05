<?php
/**
 * Plugin Name:     Gutenberg Boilerplate
 * Description:     A WordPress Gutenberg Block Boilerplate
 * Author:          Jonas Merhej
 * Author URL:		https://github.com/cre-mer
 * Text Domain:     gutenberg-boilerplate
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         cre_mer/gutenberg-boilerplate
 */

namespace cre_mer\GutenbergBoilerplate;

//  Exit if accessed directly.
defined('ABSPATH') || exit;


/**
 * Enqueue block script and backend stylesheet.
 */
add_action( 'enqueue_block_editor_assets', function() {
	wp_register_style( 'gutenberg-boilerplate-style', plugins_url( '/dist/css/style.css', __FILE__ ), [], time() );
	wp_register_style( 'gutenberg-boilerplate-editor', plugins_url( '/dist/css/editor.css', __FILE__ ), [], time() );
	wp_register_script( 'gutenberg-boilerplate-script', plugins_url( '/dist/js/block.js', __FILE__ ), [], time(), TRUE );

	register_block_type( 'cre-mer/block', [
		'style' => 'gutenberg-boilerplate-style',
		'editor_style' => 'gutenberg-boilerplate-editor',
		'editor_script' => 'gutenberg-boilerplate-script',
	] );
} );

/**
 * Load translation
 */
add_action( 'plugins_loaded', function(){
	load_plugin_textdomain( 'gutenberg-boilerplate', false, plugin_dir_path( __FILE__ ) . 'languages' );
});
