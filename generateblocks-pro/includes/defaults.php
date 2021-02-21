<?php
/**
 * This file handles our pro option defaults.
 *
 * @package GenerateBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_filter( 'generateblocks_defaults', 'generateblocks_pro_set_block_defaults' );
/**
 * Set the defaults for our pro options.
 *
 * @since 1.0
 * @param array $defaults The existing defaults.
 */
function generateblocks_pro_set_block_defaults( $defaults ) {
	$defaults['container']['backgroundColorHover'] = '';
	$defaults['container']['backgroundColorHoverOpacity'] = 1;
	$defaults['container']['borderColorHover'] = '';
	$defaults['container']['borderColorHoverOpacity'] = 1;
	$defaults['container']['textColorHover'] = '';
	$defaults['container']['useOpacity'] = false;
	$defaults['container']['opacities'] = array();
	$defaults['container']['useTransition'] = false;
	$defaults['container']['transitions'] = array();
	$defaults['container']['useTransform'] = false;
	$defaults['container']['transforms'] = array();
	$defaults['container']['useFilter'] = false;
	$defaults['container']['filters'] = array();
	$defaults['container']['useBoxShadow'] = false;
	$defaults['container']['boxShadows'] = array();
	$defaults['container']['useTextShadow'] = false;
	$defaults['container']['textShadows'] = array();
	$defaults['container']['useAdvBackgrounds'] = false;
	$defaults['container']['advBackgrounds'] = array();
	$defaults['container']['linkType'] = 'hidden-link';
	$defaults['container']['url'] = '';
	$defaults['container']['hiddenLinkAriaLabel'] = '';
	$defaults['container']['relNoFollow'] = false;
	$defaults['container']['target'] = false;
	$defaults['container']['relSponsored'] = false;
	$defaults['container']['hideOnDesktop'] = false;
	$defaults['container']['hideOnTablet'] = false;
	$defaults['container']['hideOnMobile'] = false;
	$defaults['container']['useGlobalStyle'] = false;
	$defaults['container']['globalStyleId'] = '';

	$defaults['buttonContainer']['hideOnDesktop'] = false;
	$defaults['buttonContainer']['hideOnTablet'] = false;
	$defaults['buttonContainer']['hideOnMobile'] = false;
	$defaults['buttonContainer']['useGlobalStyle'] = false;
	$defaults['buttonContainer']['globalStyleId'] = '';

	$defaults['button']['useOpacity'] = false;
	$defaults['button']['opacities'] = array();
	$defaults['button']['useTransition'] = false;
	$defaults['button']['transitions'] = array();
	$defaults['button']['useTransform'] = false;
	$defaults['button']['transforms'] = array();
	$defaults['button']['useFilter'] = false;
	$defaults['button']['filters'] = array();
	$defaults['button']['useBoxShadow'] = false;
	$defaults['button']['boxShadows'] = array();
	$defaults['button']['useTextShadow'] = false;
	$defaults['button']['textShadows'] = array();
	$defaults['button']['hideOnDesktop'] = false;
	$defaults['button']['hideOnTablet'] = false;
	$defaults['button']['hideOnMobile'] = false;
	$defaults['button']['useGlobalStyle'] = false;
	$defaults['button']['globalStyleId'] = '';

	$defaults['headline']['useOpacity'] = false;
	$defaults['headline']['opacities'] = array();
	$defaults['headline']['useTransition'] = false;
	$defaults['headline']['transitions'] = array();
	$defaults['headline']['useTransform'] = false;
	$defaults['headline']['transforms'] = array();
	$defaults['headline']['useFilter'] = false;
	$defaults['headline']['filters'] = array();
	$defaults['headline']['useBoxShadow'] = false;
	$defaults['headline']['boxShadows'] = array();
	$defaults['headline']['useTextShadow'] = false;
	$defaults['headline']['textShadows'] = array();
	$defaults['headline']['hideOnDesktop'] = false;
	$defaults['headline']['hideOnTablet'] = false;
	$defaults['headline']['hideOnMobile'] = false;
	$defaults['headline']['useGlobalStyle'] = false;
	$defaults['headline']['globalStyleId'] = '';

	$defaults['gridContainer']['hideOnDesktop'] = false;
	$defaults['gridContainer']['hideOnTablet'] = false;
	$defaults['gridContainer']['hideOnMobile'] = false;
	$defaults['gridContainer']['useGlobalStyle'] = false;
	$defaults['gridContainer']['globalStyleId'] = '';

	return $defaults;
}

/**
 * Get defaults for our general options.
 *
 * @since 0.1
 */
function generateblocks_pro_get_license_defaults() {
	return apply_filters(
		'generateblocks_license_defaults',
		array(
			'key' => '',
			'status' => '',
			'beta' => false,
		)
	);
}
