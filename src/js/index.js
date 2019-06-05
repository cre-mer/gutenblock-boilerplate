/*
* Internal dependencies
*/
import attributes from './attributes.js';
import icon from './icon.js';
import Editor from './block/editor.js';
import Renderer from './block/renderer.js';

/*
* Import Wordpress dependencies
*/
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/*
* Define settings
*/
let blockSettings = {
  title: __( 'Boilerplate Block' ),

  icon: icon,

  category: 'layout',

  // helper: Uncomment to support ID and alignment
  // supports: {
  //     anchor: true,
  //     align: true
  // },

  keywords: [
      __( 'Boilerplate' ),
      __( 'Test' )
  ],

  attributes: attributes,

  edit: Editor,

  save: Renderer,

}


/**
 * Register block
 */
registerBlockType('cre-mer/block', blockSettings)
