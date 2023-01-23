import Layout from "../../components/Layout";
import CodeBlock from "../../components/CodeBlock";
import SpacerBlock from "../../components/SpacerBlock";

const LESSON_TEXT = "Lesson Nine";
const LESSON_SLUG = "lesson-nine";

export default function LessonNine() {

	return (
		<>
			<Layout
				metaDescription="A snippet to add a custom container to WordPress blocks"
				metaTitle={LESSON_TEXT}
				title={`<span class="eyebrow">${LESSON_TEXT} </span>WordPress Snippet<br/><span style="margin-top: 0.25em;display: block">✂️</span>`}
			>
				<h2>Get Started in WordPress</h2>
				<p>
					We&apos;ve been using a Group Block as a quick way to show these
					concepts, however, on a real project, you may
					wish to leave that block alone for other purposes. One alternative we
					could do is filter our target blocks and wrap them in a container.
				</p>
				<code>block-filters/my-container.js</code>

				<CodeBlock
					style={{ fontSize: "0.8em" }}
					lang="javascript"
				>{`import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

const BLOCK_ARRAY = ['core/image', 'core/quote'];

/**
 * Wrap our chosen blocks in a container in the editor
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blocklistblock
 * @param {object} BlockListBlock The element to be wrapped.
 * @returns {object} The element wrapped in a div.
 */

const wrapBlockInContainerEdit = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {

		const { name } = props;

		// only apply to our chosen blocks
		if (!BLOCK_ARRAY.includes(name)) {
			return <BlockListBlock {...props} />;
		}

		// return the element wrapped in a container
		return (
			<div className={\`my-container my-container--\${name.replace("/", "-")}\`}>
				<BlockListBlock {...props} />
			</div>
		);
	};
}, 'withClientIdClassName');

wp.hooks.addFilter(
	'editor.BlockListBlock',
	'your-text-domain/wrap-block-in-container-edit',
	wrapBlockInContainerEdit,
);

/**
 * Wrap our chosen blocks in a container on the front end
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-getsaveelement
 *
 * @param {object} element   The element to be wrapped.
 * @param {object} blockType The block type.
 * @returns {object} The element wrapped in a div.
 */

function wrapBlockInContainerSave(element, blockType) {

	const { name } = blockType;

	// skip if element is undefined
	if (!element) {
		return null;
	}

	// only apply to our chosen blocks
	if (!BLOCK_ARRAY.includes(name)) {
		return element;
	}

	// return the element wrapped in a container
	return <div className={\`my-container my-container--\${name.replace('/', '-')}\`}>{element}</div>;
}

addFilter(
	'blocks.getSaveElement',
	'your-text-domain/wrap-block-in-container-save',
	wrapBlockInContainerSave,
);`}</CodeBlock>
				<SpacerBlock />
				<code>my-container.css</code>
				<CodeBlock>
					{`.my-container {
	container: my-container / inline-size;
}

@container my-container (min-width: 600px) {

	.wp-block-quote {
		...
	}

	.wp-block-image {
		...
	}
}`}
				</CodeBlock>
				<h2>Output</h2>
				<CodeBlock lang="html">
					{`<div class="my-container my-container--core-quote">
	<blockquote class="wp-block-quote">
		...
	</blockquote>
</div>

<div class="my-container my-container--core-image">
	<figure class="wp-block-image">
		...
	</figure>
</div>`}
				</CodeBlock>
			</Layout>
		</>
	);
}
