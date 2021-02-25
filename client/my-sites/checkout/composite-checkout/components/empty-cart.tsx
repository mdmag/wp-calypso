/**
 * External dependencies
 */
import React from 'react';
import { useTranslate } from 'i18n-calypso';
import { CheckoutStepBody } from '@automattic/composite-checkout';

export default function EmptyCart(): JSX.Element {
	return (
		<CheckoutStepBody
			stepId="empty-cart"
			isStepActive={ false }
			isStepComplete={ true }
			titleContent={ <EmptyCartTitle /> }
			completeStepContent={ <EmptyCartExplanation /> }
		/>
	);
}

function EmptyCartTitle(): JSX.Element {
	const translate = useTranslate();
	return <>{ String( translate( 'You have no items in your cart' ) ) }</>;
}

function EmptyCartExplanation(): JSX.Element {
	const translate = useTranslate();
	return (
		<>
			{ translate(
				'If you were trying to add something to your cart, there may have been a problem. Try adding it again.'
			) }
		</>
	);
}
