import { useState, useLayoutEffect, useRef } from "react";
import { useSize } from "../../utilities/useSize";

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


const LESSON_TEXT = "Lesson Five";
const LESSON_SLUG = "lesson-five";

export default function LessonFour() {

	const [target, setTarget] = useState();
	const sizeAspect = useSize(target);

	return (
		<>
			<Layout
				metaDescription="Container at-rule descriptors"
				metaTitle={LESSON_TEXT}
				title={`<span class="eyebrow">${LESSON_TEXT} </span>Container<br/>At-Rule Descriptors 🗣`}
			>
				<h2>The Basics</h2>
				<p>
					The <strong>@container</strong> rule can use the following descriptors
					to query for.
				</p>
				<ul>
					<li>
						<code>aspect-ratio</code>
					</li>
					<li>
						<code>orientation</code>
					</li>
					<li>
						<code>block-size</code>
					</li>
					<li>
						<code>inline-size</code>
					</li>
					<li>
						<code>height</code>
					</li>
					<li>
						<code>width</code>
					</li>
				</ul>
				<p>
					Additionally, you can use <code>and</code>, <code>or</code>, and{" "}
					<code>not</code> to define the query. The first two can be combined as
					you see fit, the <code>not</code> keyword can only be used once by
					itself.
				</p>
				<CodeBlock>
					{`@container (width > 400px) or (orientation: portrait) {
	...
}

@container not (width < 400px) {
	...
}`}
				</CodeBlock>

				<section className="content-container" aria-label="Aspect Ratio">
					<h2>Aspect Ratio</h2>
					<p>
						You can use <code>min-aspect-ratio</code>,{" "}
						<code>max-aspect-ratio</code>, or simply <code>aspect-ratio</code>.
					</p>
					<CodeBlock>
						{`@container (min-aspect-ratio: 16 / 9) {
	...
}`}
					</CodeBlock>
					<style>{`
				#aspect-ratio {
					container: aspect-ratio / size;
					height: 50vh;
				}
				#aspect-ratio .wp-block-image span:nth-of-type(1) {
					display: none
				}

				@container aspect-ratio (min-aspect-ratio: 16 / 9) {
					#aspect-ratio .wp-block-image::after {
						background-color: var(--c-blue);
					}

					#aspect-ratio .wp-block-image span:nth-of-type(1) {
						display: inline-block;
					}

					#aspect-ratio .wp-block-image span:nth-of-type(2) {
						display: none;
					}
				}
				`}</style>
					<div ref={setTarget}>
						<GroupBlock className="resizable" id="aspect-ratio">
							<ImageBlock
								caption={`<span>Over 16 / 9</span><span>under 16 / 9</span>`}
							/>
						</GroupBlock>
					</div>
					<pre>
						{JSON.stringify(
							{
								width: Math.round(sizeAspect?.width),
								height: Math.round(sizeAspect?.height),
							},
							null,
							2
						)}
					</pre>
				</section>

				<section className="content-container" aria-label="Orientation">
					<h2>Orientation</h2>
					<p>
						You can use <code>portrait</code> or <code>landscape</code>.
					</p>
					<CodeBlock>
						{`@container (orientation: landscape) {
	...
}`}
					</CodeBlock>
					<style>{`
				#orientation {
					container: orientation / size;
					height: 50vh;
				}
				#orientation .wp-block-image span:nth-of-type(1) {
					display: none
				}

				@container orientation (orientation: landscape) {
					#orientation .wp-block-image::after {
						background-color: var(--c-blue);
					}

					#orientation .wp-block-image span:nth-of-type(1) {
						display: inline-block;
					}

					#orientation .wp-block-image span:nth-of-type(2) {
						display: none;
					}
				}
				`}</style>
					<GroupBlock className="resizable" id="orientation">
						<ImageBlock
							caption={`<span>Landscape</span><span>Portrait</span>`}
						/>
					</GroupBlock>
				</section>

				<section className="content-container" aria-label="Block Size">
					<h2>Block Size</h2>
					<p>
						You can use <code>min-block-size</code>, <code>max-block-size</code>{" "}
						or simply <code>block-size</code>.
					</p>
					<p>
						Toggle the <code>writing-mode</code> and resize the block.
					</p>
					<CodeBlock>
						{`@container (min-block-size: 300px) {
	...
}`}
					</CodeBlock>
					<style>{`
				#block-size {
					container: block-size / size;
					height: 50vh;
				}
				#block-size .wp-block-image span:nth-of-type(1) {
					display: none
				}

				@container block-size (min-block-size: 300px) {
					#block-size .wp-block-image::after {
						background-color: var(--c-blue);
					}

					#block-size .wp-block-image span:nth-of-type(1) {
						display: inline-block;
					}

					#block-size .wp-block-image span:nth-of-type(2) {
						display: none;
					}
				}
				`}</style>
					<ButtonsWrapper>
						<Button
							label="Toggle <code>writing-mode: vertical-rl</code>"
							target="block-size"
							clickHandler="writing-mode"
						/>
					</ButtonsWrapper>
					<GroupBlock className="resizable" id="block-size">
						<ImageBlock
							caption={`<span>Over 300px</span><span>under 300px</span>`}
						/>
					</GroupBlock>
				</section>

				<section className="content-container" aria-label="Inline Size">
					<h2>Inline Size</h2>
					<p>
						You can use <code>min-inline-size</code>,{" "}
						<code>max-inline-size</code> or simply <code>inline-size</code>.
					</p>
					<p>
						Toggle the <code>writing-mode</code> and resize the block.
					</p>
					<CodeBlock>
						{`@container (min-inline-size: 300px) {
	...
}`}
					</CodeBlock>
					<style>{`
				#inline-size {
					container: inline-size / size;
					height: 50vh;
				}
				#inline-size .wp-block-image span:nth-of-type(1) {
					display: none
				}

				@container inline-size (min-inline-size: 300px) {
					#inline-size .wp-block-image::after {
						background-color: var(--c-blue);
					}

					#inline-size .wp-block-image span:nth-of-type(1) {
						display: inline-block;
					}

					#inline-size .wp-block-image span:nth-of-type(2) {
						display: none;
					}
				}
				`}</style>
					<ButtonsWrapper>
						<Button
							label="Toggle <code>writing-mode: vertical-rl</code>"
							target="inline-size"
							clickHandler="writing-mode"
						/>
					</ButtonsWrapper>
					<GroupBlock className="resizable" id="inline-size">
						<ImageBlock
							caption={`<span>Over 300px</span><span>under 300px</span>`}
						/>
					</GroupBlock>
				</section>
			</Layout>
		</>
	);
}