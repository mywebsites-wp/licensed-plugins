/**
 * WordPress dependencies
 */
import {
	__,
} from '@wordpress/i18n';

import {
	BaseControl,
	Button,
	PanelBody,
	PanelRow,
	Placeholder,
	Spinner,
} from '@wordpress/components';

import {
	render,
	Component,
	Fragment,
} from '@wordpress/element';

import apiFetch from '@wordpress/api-fetch';

class App extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			isTemplateLibraryAPILoaded: false,
			isSyncingLibrary: false,
		};
	}

	componentDidMount() {
		this.setState( {
			isTemplateLibraryAPILoaded: true,
		} );
	}

	render() {
		if ( ! this.state.isTemplateLibraryAPILoaded ) {
			return (
				<Placeholder className="gblocks-settings-placeholder">
					<Spinner />
				</Placeholder>
			);
		}

		return (
			<Fragment>
				<div className="generateblocks-settings-main">
					<PanelBody
						title={ __( 'Template Library' ) }
					>
						<div className="gblocks-dashboard-panel-row-wrapper">
							<PanelRow>
								<BaseControl
									id="gblocks-sync-template-library"
									className="gblocks-sync-template-library"
									help={ __( 'The template library syncs once a day by default. Clicking this button will force it to re-sync.', 'generateblocks-pro' ) }
								>
									<Button
										isSecondary
										onClick={ ( e ) => {
											this.setState( { isSyncingLibrary: true } );
											const message = e.target.nextElementSibling;

											apiFetch( {
												path: '/generateblocks-pro/v1/sync_template_library',
												method: 'POST',
											} ).then( ( result ) => {
												this.setState( { isSyncingLibrary: false } );
												message.classList.add( 'gblocks-action-message--show' );

												if ( ! result.success || ! result.response ) {
													message.classList.add( 'gblocks-action-message--error' );
													message.textContent = result;
												} else {
													message.textContent = __( 'Template library synced.', 'generateblocks' );

													setTimeout( function() {
														message.classList.remove( 'gblocks-action-message--show' );
													}, 3000 );
												}
											} );
										} }
									>
										{ this.state.isSyncingLibrary && <Spinner /> }
										{ ! this.state.isSyncingLibrary && __( 'Sync Library', 'generateblocks' ) }
									</Button>

									<span className="gblocks-action-message"></span>
								</BaseControl>
							</PanelRow>
						</div>
					</PanelBody>
				</div>
			</Fragment>
		);
	}
}

window.addEventListener( 'DOMContentLoaded', () => {
	render(
		<App />,
		document.getElementById( 'gblocks-template-library-settings' )
	);
} );
