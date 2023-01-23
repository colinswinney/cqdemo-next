import Layout from "../../components/Layout";
import ButtonsWrapper from "../../components/ButtonsWrapper";
import CodeBlock from "../../components/CodeBlock";
import GroupBlock from "../../components/GroupBlock";
import ImageBlock from "../../components/ImageBlock";
import WritingModeToggle from "../../components/WritingModeToggle";

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
				#wp-block-group-aspect-ratio {
					container: aspect-ratio / size;
					height: 50vh;
				}
				#wp-block-group-aspect-ratio .wp-block-image span:nth-of-type(1) {
					display: none
				}

				@container aspect-ratio (min-aspect-ratio: 16 / 9) {
					#wp-block-group-aspect-ratio .wp-block-image::after {
						background-color: var(--c-blue);
					}

					#wp-block-group-aspect-ratio .wp-block-image span:nth-of-type(1) {
						display: inline-block;
					}

					#wp-block-group-aspect-ratio .wp-block-image span:nth-of-type(2) {
						display: none;
					}
				}
				`}</style>
					<GroupBlock className="resizable" id="wp-block-group-aspect-ratio">
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
						{`/* fun fact: a perfect square is portrait */
@container (orientation: landscape) {
	...
}`}
					</CodeBlock>
					<style>{`
				#wp-block-group-orientaion {
					container: orientation / size;
					height: 50vh;
				}
				#wp-block-group-orientaion .wp-block-image span:nth-of-type(1) {
					display: none
				}

				@container orientation (orientation: landscape) {
					#wp-block-group-orientaion .wp-block-image::after {
						background-color: var(--c-blue);
					}

					#wp-block-group-orientaion .wp-block-image span:nth-of-type(1) {
						display: inline-block;
					}

					#wp-block-group-orientaion .wp-block-image span:nth-of-type(2) {
						display: none;
					}
				}
				`}</style>
					<GroupBlock className="resizable" id="wp-block-group-orientaion">
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
				#wp-block-group-block-size {
					container: block-size / size;
					height: 50vh;
				}
				#wp-block-group-block-size .wp-block-image span:nth-of-type(1) {
					display: none
				}

				@container block-size (min-block-size: 300px) {
					#wp-block-group-block-size .wp-block-image::after {
						background-color: var(--c-blue);
					}

					#wp-block-group-block-size .wp-block-image span:nth-of-type(1) {
						display: inline-block;
					}

					#wp-block-group-block-size .wp-block-image span:nth-of-type(2) {
						display: none;
					}
				}
				`}</style>
					<ButtonsWrapper>
						<WritingModeToggle
							label="Toggle <code>writing-mode: vertical-rl</code>"
							target="wp-block-group-block-size"
						/>
					</ButtonsWrapper>
					<GroupBlock className="resizable" id="wp-block-group-block-size">
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
				#wp-block-group-inline-size {
					container: inline-size / size;
					height: 50vh;
				}
				#wp-block-group-inline-size .wp-block-image span:nth-of-type(1) {
					display: none
				}

				@container inline-size (min-inline-size: 300px) {
					#wp-block-group-inline-size .wp-block-image::after {
						background-color: var(--c-blue);
					}

					#wp-block-group-inline-size .wp-block-image span:nth-of-type(1) {
						display: inline-block;
					}

					#wp-block-group-inline-size .wp-block-image span:nth-of-type(2) {
						display: none;
					}
				}
				`}</style>
					<ButtonsWrapper>
						<WritingModeToggle
							label="Toggle <code>writing-mode: vertical-rl</code>"
							target="wp-block-group-inline-size"
						/>
					</ButtonsWrapper>
					<GroupBlock className="resizable" id="wp-block-group-inline-size">
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