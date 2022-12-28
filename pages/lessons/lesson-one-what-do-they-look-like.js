import Layout from "../../components/Layout";
import CodeBlock from "../../components/CodeBlock";
import SpacerBlock from "../../components/SpacerBlock";

export default function LessonOne() {

	return (
		<>
			<Layout
				metaDescription="Lesson one, what do container queries look like?"
				metaTitle="Lesson One"
				title="<span>Lesson One </span>What Do They Look Like? 🧐"
			>
				<SpacerBlock />
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
					{`@container sidebar (min-width: 20em) {

	.wp-block-quote {
		...
	}

}`}
				</CodeBlock>

				<SpacerBlock />
				<h3>Unnamed</h3>
				<p>
					Will look for the closet parent element that has a container context. If
					no parent has a container-type set, no changes will be applied.
				</p>
				<CodeBlock>
					{`@container (min-width: 20em) {

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
				<p>
					In this example, imagine registering styles for setting a
					container context on the Group block. Any blocks placed inside could take
					on a different look at various dimensions.
				</p>
				<CodeBlock>
					{`.wp-block-group.is-style-inline-size {
	container-name: group--inline-size;
	container-type: inline-size;
}

@container group--inline-size (min-width: 400px) {

	.wp-block-quote,
	.wp-block-image figcaption {
		font-size: 1.5em;
	}
}

`}
				</CodeBlock>
				<CodeBlock>
					{`.wp-block-group.is-style-size {
	container-name: group--size;
	container-type: size;
	height: 50vh;
}

@container group--size (max-height: 300px) {

	.wp-block-image figcaption {
		bottom: 0;
		position: absolute;
		...
	}
}

`}
				</CodeBlock>
			</Layout>
		</>
	);
}
