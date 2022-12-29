import Layout from "../../components/Layout";
import CodeBlock from "../../components/CodeBlock";
import SpacerBlock from "../../components/SpacerBlock";
import ColumnsBlock from "../../components/ColumnsBlock";
import ColumnBlock from "../../components/ColumnBlock";
import GroupBlock from "../../components/GroupBlock";
import QuoteBlock from "../../components/QuoteBlock";
import ButtonsWrapper from "../../components/ButtonsWrapper";
import Button from "../../components/Button";

const LESSON_TEXT = "Lesson One";
const LESSON_SLUG = "lesson-one";

export default function LessonOne() {

	return (
		<>
			<Layout
				metaDescription={`${LESSON_TEXT}, what do container queries look like?`}
				metaTitle={LESSON_TEXT}
				title={`<span>${LESSON_TEXT} </span>What Do They Look Like? 🧐`}
			>
				<h2>The Basics</h2>
				<p>
					A <strong>@container</strong> query looks just like a{" "}
					<strong>@media</strong> query. It can either be named or unnamed.
				</p>
				<SpacerBlock />

				<h3>Named</h3>
				<p>
					Will look for a specific element that has the specified container
					context.
				</p>
				<CodeBlock>
					{`@container sidebar (width > 22.5em) {

	.wp-block-quote {
		...
	}

}`}
				</CodeBlock>

				<SpacerBlock />
				<h3>Unnamed</h3>
				<p>
					Will look for the closet parent element that has a container context.
					If no parent has a container-type set, no changes will be applied.
				</p>
				<CodeBlock>
					{`@container (width > 22.5em) {

	.wp-block-quote {
		...
	}

}`}
				</CodeBlock>

				<SpacerBlock />
				<h3>How to Declare a Container Context</h3>
				<p>
					There are three properties related to setting containment context on
					an element.
				</p>
				<ul>
					<li>
						<strong>container-name:</strong> you can optionally declare a name.
					</li>
					<li>
						<strong>container-type:</strong> you must always declare a type.
					</li>
					<li>
						<strong>container:</strong> shorthand for the above.
					</li>
				</ul>
				<CodeBlock>
					{`.wp-block-group {

	/* OPTIONAL - accepts multiples - wp-block-group aside */
	container-name: wp-block-group;

	/* REQUIRED - size, inline-size, normal */
	container-type: inline-size;

	/* SHORTHAND - name / type */
	container: wp-block-group / inline-size;
}`}
				</CodeBlock>

				<SpacerBlock />
				<h3>All Together</h3>
				<CodeBlock>
					{`.wp-block-group {
	container-name: wp-block-group;
	container-type: inline-size;
}

@container wp-block-group (min-width: 400px) {

	.wp-block-quote {
		text-align: center;
		...
	}
}
`}
				</CodeBlock>
			</Layout>
		</>
	);
}
