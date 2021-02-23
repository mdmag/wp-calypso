/**
 * Remove the `serialize` and `deserialize` properties by re-binding the reducer
 *
 * @param {Function} reducer Reducer to wrap
 */
export function withoutPersistence( reducer ) {
	return reducer.bind( null );
}
