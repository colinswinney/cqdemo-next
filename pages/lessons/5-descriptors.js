import Layout from "../../components/Layout";
import ButtonsWrapper from "../../components/ButtonsWrapper";
import Button from "../../components/Button";
import CodeBlock from "../../components/CodeBlock";
import GroupBlock from "../../components/GroupBlock";
import ImageBlock from "../../components/ImageBlock";


const LESSON_TEXT = "Lesson Five";
const LESSON_SLUG = "lesson-five";

export default function LessonFive() {

	return (
		<>
			<Layout
				metaDescription="Container at-rule descriptors"
				metaTitle={LESSON_TEXT}
				title={`<span class="eyebrow">${LESSON_TEXT} </span>@container Descriptors 🗣`}
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
					you see fit, while the <code>not</code> keyword can only be used once
					by itself.
				</p>
				<CodeBlock>
					{`@container (width > 400px) or (orientation: portrait) {
	...
}

@container not (width < 400px) {
	...
}`}
				</CodeBlock>

				<section
					className="content-container content-container--level-2"
					aria-label="Aspect Ratio"
				>
					<h2>Aspect Ratio</h2>
					<ul>
						<li>
							<code>aspect-ratio</code>
						</li>
						<li>
							<code>min-aspect-ratio</code>
						</li>
						<li>
							<code>max-aspect-ratio</code>
						</li>
					</ul>
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
					<GroupBlock className="resizable" id="aspect-ratio">
						<ImageBlock
							caption={`<span>Over 16 / 9</span><span>under 16 / 9</span>`}
						/>
					</GroupBlock>
				</section>

				<section
					className="content-container content-container--level-2"
					aria-label="Orientation"
				>
					<h2>Orientation</h2>
					<ul>
						<li>
							<code>portrait</code>
						</li>
						<li>
							<code>landscape</code>
						</li>
					</ul>
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

				<section
					className="content-container content-container--level-2"
					aria-label="Block Size"
				>
					<h2>Block Size</h2>
					<ul>
						<li>
							<code>block-size</code>
						</li>
						<li>
							<code>min-block-size</code>
						</li>
						<li>
							<code>max-block-size</code>
						</li>
					</ul>
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

				<section
					className="content-container content-container--level-2"
					aria-label="Inline Size"
				>
					<h2>Inline Size</h2>
					<ul>
						<li>
							<code>inline-size</code>
						</li>
						<li>
							<code>min-inline-size</code>
						</li>
						<li>
							<code>max-inline-size</code>
						</li>
					</ul>
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

				<h2>Height & Width</h2>
				<ul>
					<li>
						<code>height</code>
					</li>
					<li>
						<code>min-height</code>
					</li>
					<li>
						<code>max-height</code>
					</li>
					<li>
						<code>width</code>
					</li>
					<li>
						<code>min-width</code>
					</li>
					<li>
						<code>max-width</code>
					</li>
				</ul>
			</Layout>
		</>
	);
}