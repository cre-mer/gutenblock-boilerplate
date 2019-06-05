/**
* Wordpress dependencies
*/
const { InnerBlocks } = wp.editor;
const { Fragment } = wp.element;


const Renderer = ( props ) => {
  return (
    <Fragment>
    {console.log(props)}
      <InnerBlocks.Content />
    </Fragment>
  )
}

export default Renderer;
