/**
 * Wordpress dependencies
 */
const { InnerBlocks } = wp.editor;
const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;

/*
 * Internal dependencies
 */
import CustomInspector from './inspector.js'

/*
 * Editor component
 */
class Editor extends Component  {
    constructor( props ) {
        super( props );
    }

    render() {
        // Destruct important props
        const { attributes, isSelected, clientId } = this.props;

        return (
            <Fragment>
                <CustomInspector />
                <InnerBlocks />
            </Fragment>
        )
    }
}

export default Editor;
