import ColorPicker from '../../../components/color-picker';
import getIcon from '../../../utils/get-icon';
import hexToRGBA from '../../../utils/hex-to-rgba';
import addToCSS from '../../../utils/add-to-css';

/**
 * WordPress Dependencies
 */
import {
	__,
} from '@wordpress/i18n';

import {
	addFilter,
	applyFilters,
} from '@wordpress/hooks';

import {
	Fragment,
} from '@wordpress/element';

import {
	TabPanel,
	PanelBody,
} from '@wordpress/components';

/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes( settings ) {
	if ( typeof settings.attributes !== 'undefined' && 'generateblocks/container' === settings.name ) {
		settings.attributes = Object.assign( settings.attributes, {
			backgroundColorHover: {
				type: 'string',
				default: '',
			},
			backgroundColorHoverOpacity: {
				type: 'number',
				default: 1,
			},
			textColorHover: {
				type: 'string',
				default: '',
			},
			borderColorHover: {
				type: 'string',
				default: '',
			},
			borderColorHoverOpacity: {
				type: 'number',
				default: 1,
			},
		} );
	}

	return settings;
}

function addControls( output, data ) {
	const {
		attributes,
		setAttributes,
	} = data.props;

	const {
		backgroundColor,
		backgroundColorOpacity,
		backgroundColorHover,
		backgroundColorHoverOpacity,
		textColor,
		textColorHover,
		linkColor,
		linkColorHover,
		borderColor,
		borderColorOpacity,
		borderColorHover,
		borderColorHoverOpacity,
	} = attributes;

	const getDeviceType = () => {
		return data.props.deviceType ? data.props.deviceType : data.state.selectedDevice;
	};

	return (
		<Fragment>
			{ 'Desktop' === getDeviceType() &&
				<PanelBody
					title={ __( 'Colors', 'generateblocks' ) }
					initialOpen={ false }
					icon={ getIcon( 'colors' ) }
					className={ 'gblocks-panel-label' }
				>
					<Fragment>
						<TabPanel className="layout-tab-panel gblocks-control-tabs"
							activeClass="active-tab"
							tabs={ [
								{
									name: 'button-colors',
									title: __( 'Normal', 'generateblocks' ),
									className: 'button-colors',
								},
								{
									name: 'button-colors-hover',
									title: __( 'Hover', 'generateblocks' ),
									className: 'button-colors-hover',
								},
							] }>
							{
								( tab ) => {
									const isNormal = tab.name === 'button-colors';

									return (
										<div>
											{ isNormal ? (
												<Fragment>
													<ColorPicker
														label={ __( 'Background Color', 'generateblocks' ) }
														value={ backgroundColor }
														alpha={ true }
														valueOpacity={ backgroundColorOpacity }
														attrOpacity={ 'backgroundColorOpacity' }
														key={ 'buttonBackgroundColor' }
														onChange={ ( nextBackgroundColor ) =>
															setAttributes( {
																backgroundColor: nextBackgroundColor,
															} )
														}
														onOpacityChange={ ( value ) =>
															setAttributes( {
																backgroundColorOpacity: value,
															} )
														}
													/>

													<ColorPicker
														label={ __( 'Text Color', 'generateblocks' ) }
														value={ textColor }
														alpha={ false }
														key={ 'buttonTextColor' }
														onChange={ ( nextTextColor ) =>
															setAttributes( {
																textColor: nextTextColor,
															} )
														}
													/>

													<ColorPicker
														label={ __( 'Link Color', 'generateblocks' ) }
														value={ linkColor }
														alpha={ false }
														onChange={ ( nextLinkColor ) =>
															setAttributes( {
																linkColor: nextLinkColor,
															} )
														}
													/>

													<ColorPicker
														label={ __( 'Border Color', 'generateblocks' ) }
														value={ borderColor }
														alpha={ true }
														valueOpacity={ borderColorOpacity }
														attrOpacity={ 'borderColorOpacity' }
														key={ 'buttonBorderColor' }
														onChange={ ( value ) =>
															setAttributes( {
																borderColor: value,
															} )
														}
														onOpacityChange={ ( value ) =>
															setAttributes( {
																borderColorOpacity: value,
															} )
														}
													/>
												</Fragment>

											) : (

												<Fragment>
													<ColorPicker
														label={ __( 'Background Color', 'generateblocks' ) }
														value={ backgroundColorHover }
														alpha={ true }
														valueOpacity={ backgroundColorHoverOpacity }
														attrOpacity={ 'backgroundColorHoverOpacity' }
														key={ 'buttonBackgroundColorHover' }
														onChange={ ( nextBackgroundColorHover ) =>
															setAttributes( {
																backgroundColorHover: nextBackgroundColorHover,
															} )
														}
														onOpacityChange={ ( value ) =>
															setAttributes( {
																backgroundColorHoverOpacity: value,
															} )
														}
													/>

													<ColorPicker
														label={ __( 'Text Color', 'generateblocks' ) }
														value={ textColorHover }
														alpha={ false }
														key={ 'buttonTextColorHover' }
														onChange={ ( nextTextColorHover ) =>
															setAttributes( {
																textColorHover: nextTextColorHover,
															} )
														}
													/>

													<ColorPicker
														label={ __( 'Link Color', 'generateblocks' ) }
														value={ linkColorHover }
														alpha={ false }
														onChange={ ( nextLinkColorHover ) =>
															setAttributes( {
																linkColorHover: nextLinkColorHover,
															} )
														}
													/>

													<ColorPicker
														label={ __( 'Border Color', 'generateblocks' ) }
														value={ borderColorHover }
														alpha={ true }
														valueOpacity={ borderColorHoverOpacity }
														attrOpacity={ 'borderColorHoverOpacity' }
														key={ 'buttonBorderColorHover' }
														onChange={ ( value ) =>
															setAttributes( {
																borderColorHover: value,
															} )
														}
														onOpacityChange={ ( value ) =>
															setAttributes( {
																borderColorHoverOpacity: value,
															} )
														}
													/>
												</Fragment>
											) }
										</div>
									);
								}
							}
						</TabPanel>
					</Fragment>
				</PanelBody>
			}
		</Fragment>
	);
}

function addMainCSS( css, props, name ) {
	const attributes = applyFilters( 'generateblocks.editor.cssAttrs', props.attributes, props );

	const {
		uniqueId,
		backgroundColorHover,
		backgroundColorHoverOpacity,
		textColorHover,
		borderColorHover,
		borderColorHoverOpacity,
	} = attributes;

	if ( 'container' === name ) {
		addToCSS( css, '.gb-container-' + uniqueId + ':hover', {
			'background-color': hexToRGBA( backgroundColorHover, backgroundColorHoverOpacity ),
			'border-color': hexToRGBA( borderColorHover, borderColorHoverOpacity ),
			color: textColorHover,
		} );
	}

	return css;
}

addFilter(
	'blocks.registerBlockType',
	'generateblocks-pro/container-colors/add-attributes',
	addAttributes
);

addFilter(
	'generateblocks.panel.containerColors',
	'generateblocks-pro/container-colors/add-controls',
	addControls
);

addFilter(
	'generateblocks.editor.mainCSS',
	'generateblocks-pro/container-colors/add-main-css',
	addMainCSS
);
