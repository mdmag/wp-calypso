/**
 * Internal dependencies
 */
import 'calypso/state/inline-support-article/init';

/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * @param {object} state Global app state
 * @returns {object} ...
 */
export default ( state ) => get( state, 'inlineSupportArticle.postId' );
