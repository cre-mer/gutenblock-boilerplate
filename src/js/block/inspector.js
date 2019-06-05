/**
 * Wordpress dependencies
 */
const { Panel, PanelBody, PanelRow } = wp.components;
const { InspectorControls } = wp.editor;
const { Component } = wp.element;

/*
* Editor component
*/
class CustomInspector extends Component  {
    constructor( props ) {
        super( props );
    }
	render() {
		return (
			<InspectorControls>
				<Panel header="My Panel">
					<PanelBody
						title="My Block Settings"
						icon="welcome-widgets-menus"
						initialOpen={ true }
					>
						<PanelRow>
							My Panel Inputs and Labels
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
		)
	}
};

export default CustomInspector;
