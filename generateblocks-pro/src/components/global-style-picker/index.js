/**
 * Internal dependencies
 */
import './editor.scss';
import getIcon from '../../utils/get-icon';

/**
 * WordPress dependencies
 */
import {
	__,
} from '@wordpress/i18n';

import {
	Component,
	Fragment,
} from '@wordpress/element';

import {
	BaseControl,
	ToggleControl,
	TextControl,
	PanelBody,
	SelectControl,
} from '@wordpress/components';

/**
 * Typography Component
 */
class GlobalStylePicker extends Component {
	componentDidMount() {
		if ( generateBlocksPro.isGlobalStyle && ! this.props.attributes.isGlobalStyle ) {
			this.props.setAttributes( {
				isGlobalStyle: true,
			} );
		}

		if ( ! generateBlocksPro.isGlobalStyle && this.props.attributes.isGlobalStyle ) {
			this.props.setAttributes( {
				isGlobalStyle: false,
			} );
		}
	}

	render() {
		const {
			name,
			attributes,
			setAttributes,
			options,
		} = this.props;

		const {
			uniqueId,
			useGlobalStyle,
			globalStyleId,
		} = attributes;

		let idPrefix = '';

		if ( 'generateblocks/button' === name ) {
			idPrefix = 'gb-button-';
		}

		if ( 'generateblocks/container' === name ) {
			idPrefix = 'gb-container-';
		}

		if ( 'generateblocks/headline' === name ) {
			idPrefix = 'gb-headline-';
		}

		if ( 'generateblocks/button-container' === name ) {
			idPrefix = 'gb-button-wrapper-';
		}

		if ( 'generateblocks/grid' === name ) {
			idPrefix = 'gb-grid-wrapper-';
		}

		return (
			<Fragment>
				{ !! generateBlocksPro.isGlobalStyle &&
					<PanelBody
						title={ __( 'Global Style', 'generateblocks-pro' ) }
						initialOpen={ true }
						icon={ getIcon( 'globe' ) }
						className="gblocks-panel-label"
					>
						<BaseControl
							id="gblocks-global-style-id-field"
							help={ __( 'Name your global style something short, easy to remember, and unique to this type of block.', 'generateblocks-pro' ) }
						>
							<div className="gblocks-global-style-id-field">
								<span className="gblocks-global-style-id-prefix">
									{ idPrefix }
								</span>

								<TextControl
									type="text"
									value={ uniqueId }
									onChange={ ( value ) => {
										setAttributes( {
											uniqueId: value,
										} );
									} }
								/>
							</div>
						</BaseControl>
					</PanelBody>
				}

				{ ! generateBlocksPro.isGlobalStyle &&
					<PanelBody>
						<ToggleControl
							className="gblocks-use-global-style"
							label={ __( 'Use Global Style', 'generateblocks' ) }
							checked={ !! useGlobalStyle }
							onChange={ ( value ) => {
								setAttributes( {
									useGlobalStyle: value,
								} );
							} }
						/>

						{ !! useGlobalStyle &&
							<Fragment>
								<SelectControl
									className="gblocks-choose-global-style"
									value={ globalStyleId }
									options={ options }
									onChange={ ( value ) => {
										setAttributes( {
											globalStyleId: value,
										} );

										// Clear some common style values so the new style can be noticed.
										if ( 'generateblocks/button' === name ) {
											let backgroundColor = '',
												textColor = '',
												backgroundColorHover = '',
												textColorHover = '',
												paddingTop = '',
												paddingRight = '',
												paddingBottom = '',
												paddingLeft = '';

											if ( '' === value ) {
												backgroundColor = generateBlocksStyling.button.backgroundColor;
												textColor = generateBlocksStyling.button.textColor;
												backgroundColorHover = generateBlocksStyling.button.backgroundColorHover;
												textColorHover = generateBlocksStyling.button.textColorHover;
												paddingTop = generateBlocksStyling.button.paddingTop;
												paddingRight = generateBlocksStyling.button.paddingRight;
												paddingBottom = generateBlocksStyling.button.paddingBottom;
												paddingLeft = generateBlocksStyling.button.paddingLeft;
											}

											setAttributes( {
												backgroundColor,
												textColor,
												backgroundColorHover,
												textColorHover,
												paddingTop,
												paddingRight,
												paddingBottom,
												paddingLeft,
											} );
										}

										if ( 'generateblocks/container' === name ) {
											let paddingTop = '';
											let paddingRight = '';
											let paddingBottom = '';
											let paddingLeft = '';

											if ( '' === value ) {
												paddingTop = generateBlocksDefaults.container.paddingTop;
												paddingRight = generateBlocksDefaults.container.paddingRight;
												paddingBottom = generateBlocksDefaults.container.paddingBottom;
												paddingLeft = generateBlocksDefaults.container.paddingLeft;
											}

											setAttributes( {
												paddingTop,
												paddingRight,
												paddingBottom,
												paddingLeft,
											} );
										}
									} }
								/>
							</Fragment>
						}
					</PanelBody>
				}
			</Fragment>
		);
	}
}

export default GlobalStylePicker;
