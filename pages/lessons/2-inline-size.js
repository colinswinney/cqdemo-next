import { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import ButtonsWrapper from "../../components/ButtonsWrapper";
import AlignfullToggle from "../../components/AlignfullToggle";
import CodeBlock from "../../components/CodeBlock";
import ColumnsBlock from "../../components/ColumnsBlock";
import ColumnBlock from "../../components/ColumnBlock";
import GroupBlock from "../../components/GroupBlock";
import QuoteBlock from "../../components/QuoteBlock";
import SpacerBlock from "../../components/SpacerBlock";

const LESSON_TEXT = "Lesson Two";
const LESSON_SLUG = "lesson-two";

export default function LessonTwo() {

	const [sliderValue, setSliderValue] = useState(50);

	useEffect(() => {
		const columnOne = document.getElementById("alignfull-target");
		columnOne.style.gridTemplateColumns = `${sliderValue}% auto`;

	}, [sliderValue])

	const handleSlider = (event) => {
		setSliderValue(event.target.value);
	}

	return (
		<>
			<Layout
				metaDescription="Using an inline-size contatiner-type"
				metaTitle={LESSON_TEXT}
				title={`<span class="eyebrow">${LESSON_TEXT} </span>Inline Size<br/>↔️<span class="asterisk">*</span><span class="asterisk asterisk-explain"><span class="asterisk">*</span>Usually</span>`}
			>
				<h2>The Basics</h2>
				<p>
					Establishes a query container for dimensional queries on the inline
					axis of the container.
				</p>
				<p>
					Usually this is the width of the container but again, it can be the
					height if the <code>writing-mode</code> is vertical.
				</p>

				<h2>Example</h2>

				<p>
					Let&apos;s look at a typical Columns setup with two Column blocks each
					containing a Quote.
				</p>

				<h3>Markup</h3>
				<p>
					First let&apos;s review the markup, noting again that we are wrapping
					our targets inside of a Group block to query against.
				</p>

				<CodeBlock lang="html">
					{`<div class="wp-block-columns">
	<div class="wp-block-column">
		<div class="wp-block-group is-inline-size">
			<div class="wp-block-quote">
			...
			</div>
		</div>
	</div>
	<div class="wp-block-column">
		<div class="wp-block-group is-inline-size">
			<div class="wp-block-quote">
			...
			</div>
		</div>
	</div>
</div>`}
				</CodeBlock>

				<ColumnsBlock className={`has-two-columns ${LESSON_SLUG}-example`}>
					<ColumnBlock id="column-one">
						<GroupBlock className="is-inline-size">
							<QuoteBlock
								paragraph="When I woke up this morning my girlfriend asked me, 'Did you sleep good?' I said 'No, I made a few mistakes.'"
								cite="Steven Wright"
							/>
						</GroupBlock>
					</ColumnBlock>
					<ColumnBlock>
						<GroupBlock className="is-inline-size">
							<QuoteBlock
								paragraph="Right now I'm having amnesia and deja vu at the same time... I think I've forgotten this before."
								cite="Steven Wright"
							/>
						</GroupBlock>
					</ColumnBlock>
				</ColumnsBlock>

				<h3>Styles</h3>
				<p>
					Next let&apos;s setup our styles, first declaring a container context
					on the Group block, then writing a query to house our target selector,
					the Quote block.
				</p>

				<CodeBlock>
					{`/* setup the container */
.wp-block-group.is-inline-size {
	container: wp-block-group / inline-size;
}

/* query against it's dimensions */
@container wp-block-group (width > 450px) {

	/* restyle a child of your container */
	.wp-block-quote {
		background-color: var(--c-gray);
		...
	}
}

`}
				</CodeBlock>
				<SpacerBlock />

				<SpacerBlock height={24} />

				<ButtonsWrapper className="space-between">
					<div className="slider-wrapper">
						<label htmlFor="column-one-width">
							Column One Width: <span>{sliderValue + "%"}</span>
						</label>
						<input
							type="range"
							min="25"
							max="75"
							value={sliderValue}
							className="slider"
							id="column-one-width"
							onChange={handleSlider}
						></input>
					</div>
					<AlignfullToggle
						label="Add <code>.alignfull</code> class"
						target="alignfull-target"
					/>
				</ButtonsWrapper>

				<SpacerBlock height={48} />
				<ColumnsBlock
					id="alignfull-target"
					className={`has-two-columns ${LESSON_SLUG}-example`}
				>
					<ColumnBlock id="column-one">
						<GroupBlock className="is-inline-size">
							<QuoteBlock
								paragraph="Everywhere is within walking distance if you have the time."
								cite="Steven Wright"
							/>
						</GroupBlock>
					</ColumnBlock>
					<ColumnBlock>
						<GroupBlock className="is-inline-size">
							<QuoteBlock
								paragraph="I have an existential map. It has 'You are here' written all over it."
								cite="Steven Wright"
							/>
						</GroupBlock>
					</ColumnBlock>
				</ColumnsBlock>
			</Layout>
		</>
	);
}
