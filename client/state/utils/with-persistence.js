export function withPersistence( reducer, { serialize, deserialize } = {} ) {
	const wrappedReducer = reducer.bind( null );
	wrappedReducer.serialize = serialize || reducer.serialize || ( ( state ) => state );
	wrappedReducer.deserialize = deserialize || reducer.deserialize || ( ( persisted ) => persisted );
	return wrappedReducer;
}
