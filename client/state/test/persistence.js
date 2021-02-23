/**
 * External dependencies
 */
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import { createReduxStore } from 'calypso/state';
import reducer from 'calypso/state/reducer';
import { serialize, deserialize } from 'calypso/state/utils';

describe( 'persistence', () => {
	test( 'initial state should serialize and deserialize without errors or warnings', () => {
		const consoleErrorSpy = jest.spyOn( global.console, 'error' ).mockImplementation( noop );
		const consoleWarnSpy = jest.spyOn( global.console, 'warn' ).mockImplementation( noop );

		const initialState = createReduxStore().getState();
		deserialize( reducer, serialize( reducer, initialState ).root() );

		expect( consoleErrorSpy ).not.toHaveBeenCalled();
		expect( consoleWarnSpy ).not.toHaveBeenCalled();
	} );
} );
