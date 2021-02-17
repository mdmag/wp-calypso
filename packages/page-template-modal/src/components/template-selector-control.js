/**
 * External dependencies
 */
import { isEmpty, isArray, noop, map } from 'lodash';

/**
 * WordPress dependencies
 */
import { BaseControl } from '@wordpress/components';
import { memo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import TemplateSelectorItem from './template-selector-item';
import replacePlaceholders from '../utils/replace-placeholders';

export const TemplateSelectorControl = ( {
	label,
	legendLabel,
	templates = [],
	theme = 'maywood',
	locale = 'en',
	onTemplateSelect = noop,
	siteInformation = {},
} ) => {
	if ( isEmpty( templates ) || ! isArray( templates ) ) {
		return null;
	}

	return (
		<BaseControl label={ label } className="template-selector-control">
			<ul
				className="template-selector-control__options"
				data-testid="template-selector-control-options"
				aria-label={ legendLabel }
			>
				{ map( templates, ( { ID, name, title, description } ) => (
					<li
						key={ `${ ID }-${ name }-${ legendLabel }` }
						className="template-selector-control__template"
					>
						<TemplateSelectorItem
							value={ name }
							title={ replacePlaceholders( title, siteInformation ) }
							description={ description }
							onSelect={ onTemplateSelect }
							templatePostID={ ID }
							theme={ theme }
							locale={ locale }
						/>
					</li>
				) ) }
			</ul>
		</BaseControl>
	);
};

export default memo( TemplateSelectorControl );
