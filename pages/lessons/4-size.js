import Layout from "../../components/Layout";
import ButtonsWrapper from "../../components/ButtonsWrapper";
import Button from "../../components/Button";
import CodeBlock from "../../components/CodeBlock";
import ColumnsBlock from "../../components/ColumnsBlock";
import ColumnBlock from "../../components/ColumnBlock";
import GroupBlock from "../../components/GroupBlock";
import ImageBlock from "../../components/ImageBlock";
import QuoteBlock from "../../components/QuoteBlock";
import SpacerBlock from "../../components/SpacerBlock";

const LESSON_TEXT = "Lesson Four";
const LESSON_SLUG = "lesson-four";

export default function LessonFour() {
	return (
		<>
			<Layout
				metaDescription="Using a size contatiner-type"
				metaTitle={LESSON_TEXT}
				title={`<span class="eyebrow">${LESSON_TEXT} </span>Size<br/>↕️ ↔️`}
			>
				<h2>The Basics</h2>
				<p>
					We&apos;ve covered the basics already so I will use this space to
					mention if you&apos;ve never familiarized yourself with CSS
					Containment or the <code>contain</code> property, it might be worthwhile to take a look
					for a deeper understanding of some related concepts behind container
					queries.
				</p>
				<p>
					See{" "}
					<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment">
						MDN - CSS Containment
					</a>{" "}
					or{" "}
					<a href="https://css-tricks.com/almanac/properties/c/contain/">
						CSS Tricks
					</a>{" "}
					for more.
				</p>

				<h2>Example</h2>

				<p>Let&apos;s look at that Image block again.</p>

				<GroupBlock className="is-size resizable">
					<ImageBlock />
				</GroupBlock>

				<h3>Markup</h3>
				<p>
					First let&apos;s review the markup, noting again that we are wrapping
					our target inside of a Group block to query against.
				</p>

				<CodeBlock lang="html">
					{`<div class="wp-block-group is-size resizable-y">
	<div class="wp-block-image">
		...
	</div>
</div>`}
				</CodeBlock>

				<h3>Styles</h3>
				<p>
					Next is our styles, first declaring a container context on the Group
					block, while also explicitly setting <code>height: 50vh</code> to
					query against (remember, <strong>size</strong> types have no intrisic
					height). Then we will write our query for when <code>50vh</code> is
					less than <code>300px</code> .
				</p>
				<CodeBlock>
					{`.wp-block-group.is-size {
	container: wp-block-group / size;
	height: 50vh;
}

@container wp-block-group (height < 300px) {

	.wp-block-image::after {
		background-color: var(--c-blue);
	}
}
`}
				</CodeBlock>

				<GroupBlock className="is-size resizable-y">
					<ImageBlock />
				</GroupBlock>
			</Layout>
		</>
	);
}
