/**
 * External dependencies
 */
import classNames from 'classnames';
import React from 'react';

/**
 * Internal dependencies
 */
import Button from 'components/button';

const PurchaseDetail = ( { additionalClass, buttonText, description, isPlaceholder, onButtonClick, title } ) => {
	const classes = classNames( 'checkout__purchase-detail', additionalClass, {
		'is-placeholder': isPlaceholder
	} );

	return (
		<li className={ classes }>
			<div className="checkout__purchase-detail-text">
				<h3 className="checkout__purchase-detail-title">{ title }</h3>
				<p className="checkout__purchase-detail-description">{ description }</p>
			</div>
			<Button className="checkout__purchase-detail-button" onClick={ onButtonClick } primary>
				{ buttonText }
			</Button>
		</li>
	);
};

PurchaseDetail.propTypes = {
	additionalClass: React.PropTypes.string,
	buttonText: React.PropTypes.string,
	description: React.PropTypes.string,
	isPlaceholder: React.PropTypes.bool,
	onButtonClick: React.PropTypes.func,
	title: React.PropTypes.string
};

export default PurchaseDetail;
