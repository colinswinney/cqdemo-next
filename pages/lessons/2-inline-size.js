import { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import ButtonsWrapper from "../../components/ButtonsWrapper";
import Button from "../../components/Button";
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

				<ColumnsBlock className={`has-two-columns ${LESSON_SLUG}-example`}>
					<ColumnBlock id="column-one">
						<GroupBlock className="is-inline-size">
							<QuoteBlock paragraph="Should I use lorem ipsum?" />
						</GroupBlock>
					</ColumnBlock>
					<ColumnBlock>
						<GroupBlock className="is-inline-size">
							<QuoteBlock paragraph="Let's just keep it short." />
						</GroupBlock>
					</ColumnBlock>
				</ColumnsBlock>

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
@container wp-block-group (width >= 18.75em) {

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
					<Button
						label="Toggle Alignfull"
						target="alignfull-target"
						clickHandler="alignfull"
					/>
				</ButtonsWrapper>

				<SpacerBlock height={48} />
				<ColumnsBlock
					id="alignfull-target"
					className={`has-two-columns ${LESSON_SLUG}-example`}
				>
					<ColumnBlock id="column-one">
						<GroupBlock className="is-inline-size">
							<QuoteBlock paragraph="Should I use lorem ipsum?" />
						</GroupBlock>
					</ColumnBlock>
					<ColumnBlock>
						<GroupBlock className="is-inline-size">
							<QuoteBlock paragraph="Let's just keep it short." />
						</GroupBlock>
					</ColumnBlock>
				</ColumnsBlock>
			</Layout>
		</>
	);
}
