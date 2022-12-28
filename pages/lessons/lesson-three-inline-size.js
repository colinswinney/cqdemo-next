import Layout from "../../components/Layout";
import CodeBlock from "../../components/CodeBlock";
import ColumnsBlock from "../../components/ColumnsBlock";
import ColumnBlock from "../../components/ColumnBlock";
import GroupBlock from "../../components/GroupBlock";
import QuoteBlock from "../../components/QuoteBlock";
import SpacerBlock from "../../components/SpacerBlock";

export default function LessonThree() {
	const handleClick = (e) => {
		const target = e.target;
		const groups = document.querySelectorAll(".wp-block-group");
		target.setAttribute(
			"aria-pressed",
			target.getAttribute("aria-pressed") === "true" ? "false" : "true"
		);
		target.style.color =
			target.getAttribute("aria-pressed") === "true"
				? "var(--c-green)"
				: "var(--c-primary)";
		groups.forEach((group) => {
			group.classList.toggle("is-inline-size");
		});
	};

	return (
		<>
			<Layout
				metaDescription="A demo for container queries"
				metaTitle="Lesson Three"
				title="<span>Lesson Three </span>Inline Size ↔️"
			>
				<h2>The Basics</h2>
				<p>
					Establishes a query container for dimensional queries on the inline
					axis of the container. Usually this is the width of the container but
					it can be the height if the writing-mode is vertical.
				</p>

				<CodeBlock>
					{`.wp-block-group {
	container-name: wp-block-group;
	container-type: inline-size;
}

@container wp-block-group (min-width: 30em) {

	.wp-block-quote {
		background-position: center 2.5em;
		border: none;
		padding: 3rem;
		text-align: center;
	}
}

`}
				</CodeBlock>
				<SpacerBlock />

				<h3>Example One</h3>
				<GroupBlock>
					<button onClick={handleClick} aria-pressed="false">
						Toggle Inline Size
					</button>
				</GroupBlock>
				<ColumnsBlock className="has-two-columns has-uneven-columns">
					<ColumnBlock>
						<GroupBlock>
							<QuoteBlock />
						</GroupBlock>
					</ColumnBlock>
					<ColumnBlock>
						<GroupBlock>
							<QuoteBlock />
						</GroupBlock>
					</ColumnBlock>
				</ColumnsBlock>
			</Layout>
		</>
	);
}
