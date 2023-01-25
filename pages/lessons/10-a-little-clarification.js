import Layout from "../../components/Layout";
import CodeBlock from "../../components/CodeBlock";
import QuoteBlock from "../../components/QuoteBlock";
import SpacerBlock from "../../components/SpacerBlock";
import { SP } from "next/dist/shared/lib/utils";

const LESSON_TEXT = "Lesson Ten";
const LESSON_SLUG = "lesson-ten";

export default function LessonTen() {

	return (
		<>
			<Layout
				metaDescription="Clarifying some container concepts"
				metaTitle={LESSON_TEXT}
				title={`<span className="eyebrow">${LESSON_TEXT} </span>A Little Clarification<br/><span style="margin-top: 0.25em;display: block">🤦🏻‍♂️</span>`}
			>
				<h2>No Need for Parents</h2>
				<p>
					Throughout these demos, I may have given the impression that the
					element you wish to apply new styles to <em>requires</em> a direct
					wrapping element. It does not.
				</p>
				<p>
					I used the Group block in these demos so that our Quotes and Images
					will always have a direct parent to query against, but they do not{" "}
					<em>need</em> a direct parent to query against.
				</p>
				<h3>Part One</h3>
				<p>
					Let&apos;s look at a simplified Quote that we&apos;ll want to alter at
					450px. We&apos;ll get rid of the <code>wp-block</code> classes and use
					a BEM prefix of <code>ten</code> to target just this lesson and our
					new styles.
				</p>

				<style>
					{`
					.ten {
						display: grid;
						grid-template-columns: 1fr 3fr;
						margin-bottom: 0;
					}

					.ten + .ten {
						margin-bottom: 2em;
					}

					.ten__red {
						color: var(--c-primary);
					}

					.ten__aside {
						background-color: rgba(0, 0, 255, 0.1);
						padding: 10px;
					}

					.ten__main {
						background-color: rgba(255, 0, 0, 0.05);
						padding: 10px;
					}

					.ten__main > p {
						color: rgba( 66, 66, 66, 0.25);
						margin-bottom: 1.5em;
					}

					.ten__quote {
						border-left: 5px solid black;
						background: white;
						font-size: 0.66em;
						padding: 1em;
					}

					.ten__quote cite {
						font-size: 0.8em;
					}

					.alignright {
						float: right;
						margin-left: 1em;
						width: 300px;
					}

					@media (max-width: 700px) {
						.ten {
							grid-template-columns: 1fr;
						}
					`}
				</style>
				<CodeBlock lang="html">
					{`<blockquote class="ten__quote">...</blockquote>`}
				</CodeBlock>
				<CodeBlock>
					{`.ten__quote {
	border-left: 5px solid black;
	background: white;
	font-size: 0.66em;
	padding: 1em;
}
`}
				</CodeBlock>
				<SpacerBlock height={24} />
				<blockquote className="ten__quote">
					<p>A clear conscience is usually the sign of a bad memory.</p>
					<cite>Steven Wright</cite>
				</blockquote>
				<SpacerBlock />
				<p>
					Here is our demo without any <code>container</code> context or
					queries.
				</p>
				<div className="ten" id="part-one">
					<aside className="ten__aside">
						<blockquote className="ten__quote">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
					</aside>
					<main className="ten__main">
						<blockquote className="ten__quote alignright">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
						<p>
							Nam consectetur, libero vel iaculis ultrices, risus orci hendrerit
							ligula, pharetra fringilla leo velit vel magna. Fusce maximus ut
							arcu ac scelerisque. Nulla facilisi. Etiam non hendrerit velit,
							sed molestie magna.
						</p>
						<blockquote className="ten__quote">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
					</main>
				</div>
				<div className="ten">
					<p className="ten__red">225px</p>
					<p style={{ color: "var(--c-primary)" }}>675px</p>
				</div>
				<CodeBlock lang="html">
					{`<div class="ten">
	<aside class="ten__aside">
		<blockquote class="ten__quote">...</blockquote>
	</aside>
	<main class="ten__main">
		<blockquote class="ten__quote alignright">...</blockquote>
		<p>...</p>
		<blockquote class="ten__quote">...</blockquote>
	</main>
</div>`}
				</CodeBlock>

				<SpacerBlock height={96} />
				<h3>Part Two</h3>
				<p>
					Now let&apos;s give the top level wrapper, <code>.ten</code>, a{" "}
					<code>container</code> property and write an <em>unnamed</em> query to
					change our Quotes styles.
				</p>
				<style>
					{`#part-two.ten {
						container: ten / inline-size;
					}

					@container (min-width: 450px) {
						.ten__quote {
							border: none;
							font-size: 1em;
							text-align: center;
						}
					}`}
				</style>
				<CodeBlock>
					{`.ten {
	container: ten / inline-size;
}

@container (min-width: 450px) {
	.ten__quote {
		border: none;
		font-size: 1em;
		text-align: center;
	}
}`}
				</CodeBlock>
				<div className="ten" id="part-two">
					<aside className="ten__aside">
						<blockquote className="ten__quote">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
					</aside>
					<main className="ten__main">
						<blockquote className="ten__quote alignright">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
						<p>
							Nam consectetur, libero vel iaculis ultrices, risus orci hendrerit
							ligula, pharetra fringilla leo velit vel magna. Fusce maximus ut
							arcu ac scelerisque. Nulla facilisi. Etiam non hendrerit velit,
							sed molestie magna.
						</p>
						<blockquote className="ten__quote">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
					</main>
				</div>
				<div className="ten">
					<p className="ten__red">225px</p>
					<p style={{ color: "var(--c-primary)" }}>675px</p>
				</div>
				<SpacerBlock height={48} />
				<p>
					We can see that our styles are getting applied across the board but
					that&apos;s not what we were hoping for, 450px and above is our
					target. It&apos;s being applied because <code>.ten</code> is 900px and
					our query is just looking for the first element with a{" "}
					<code>container</code> property. Let&apos;s get more specific.
				</p>
				<h3>Part Three</h3>
				<p>
					Now let&apos;s add <code>container</code> properties to our aside and
					main.
				</p>
				<style>
					{`#part-three .ten__aside {
						container: aside / inline-size;
					}

					#part-three .ten__main {
						container: main / inline-size;
					}`}
				</style>
				<CodeBlock>{`.ten__aside {
	container: aside / inline-size;
}

.ten__main {
	container: main / inline-size;
}

/* same unnamed query as before */
@container (min-width: 450px) {
	.ten__quote {
		border: none;
		font-size: 1em;
		text-align: center;
	}
}`}</CodeBlock>
				<div className="ten" id="part-three">
					<aside className="ten__aside">
						<blockquote className="ten__quote">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
					</aside>
					<main className="ten__main">
						<blockquote className="ten__quote alignright">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
						<p>
							Nam consectetur, libero vel iaculis ultrices, risus orci hendrerit
							ligula, pharetra fringilla leo velit vel magna. Fusce maximus ut
							arcu ac scelerisque. Nulla facilisi. Etiam non hendrerit velit,
							sed molestie magna.
						</p>
						<blockquote className="ten__quote">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
					</main>
				</div>
				<div className="ten">
					<p className="ten__red">225px</p>
					<p style={{ color: "var(--c-primary)" }}>675px</p>
				</div>
				<SpacerBlock height={48} />
				<p>
					Alright, we&apos;re halfway there! Our aside&apos;s Quote is no longer
					changing because <code>.ten__aside</code> was the first parent found
					with a <code>container</code> property and it&apos;s only 225px.
				</p>
				<p>
					But now our <code>.ten__main</code> elements Quote blocks are both
					getting styles applied, even though the <code>.alignright</code> class
					is set at 300px and should remain as originally styled.
				</p>
				<p>
					This is because the <code>.ten__main</code> element is the first
					parent found with a <code>container</code> property and it&apos;s
					width is 675px. We have to get <em>more</em> specific to keep those
					original styles under 450px.
				</p>
				<h3>Part Four</h3>
				<p>
					Because of the rules of how <strong>@container</strong> queries work,
					we cannot simply give the <code>.ten__quote</code> selector a{" "}
					<code>container</code> property and query that elements own
					dimensions, you can only target a container&apos;s children.
				</p>
				<p>
					It is called a{" "}
					<strong>
						<em>container</em>
					</strong>{" "}
					query, not an{" "}
					<strong>
						<em>element</em>
					</strong>{" "}
					query for a reason I guess. 🤷🏻‍♂️
				</p>
				<p>Follow along by reading these two code blocks comments.</p>

				<CodeBlock>{`/*****
* This code will do nothing
*****/

.ten__quote {
	container: quote / inline-size;
}

/* same unnamed query as before */
@container (min-width: 450px) {

	/* it's trying to target itself */
	.ten__quote {
		border: none;
		font-size: 1em;
		text-align: center;
	}
}`}</CodeBlock>
				<style>{`#part-four .ten__quote {
							container: quote / inline-size;
						}`}</style>
				<div className="ten" id="part-four">
					<aside className="ten__aside">
						<blockquote className="ten__quote">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
					</aside>
					<main className="ten__main">
						<blockquote className="ten__quote alignright">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
						<p>
							Nam consectetur, libero vel iaculis ultrices, risus orci hendrerit
							ligula, pharetra fringilla leo velit vel magna. Fusce maximus ut
							arcu ac scelerisque. Nulla facilisi. Etiam non hendrerit velit,
							sed molestie magna.
						</p>
						<blockquote className="ten__quote">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
					</main>
				</div>
				<div className="ten">
					<p className="ten__red">225px</p>
					<p style={{ color: "var(--c-primary)" }}>675px</p>
				</div>
				<SpacerBlock height={48} />
				<CodeBlock>{`/*****
* This code works because now we are
* targeting the container's children
*****/

.ten__quote {
	container: quote / inline-size;
}

/* same unnamed query as before */
@container (min-width: 450px) {

	/* we can only target a child, in this case p */
	.ten__quote p {
		color: var(--c-blue);
	}
}`}</CodeBlock>
				<style>{`#part-four-two .ten__quote {
							container: quote / inline-size;
						}
						@container (min-width: 450px) {

	/* we can only target a child, in this case p */
	#part-four-two .ten__quote p {
		color: var(--c-blue);
	}
}`}</style>
				<div className="ten" id="part-four-two">
					<aside className="ten__aside">
						<blockquote className="ten__quote">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
					</aside>
					<main className="ten__main">
						<blockquote className="ten__quote alignright">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
						<p>
							Nam consectetur, libero vel iaculis ultrices, risus orci hendrerit
							ligula, pharetra fringilla leo velit vel magna. Fusce maximus ut
							arcu ac scelerisque. Nulla facilisi. Etiam non hendrerit velit,
							sed molestie magna.
						</p>
						<blockquote className="ten__quote">
							<p>This Quote should only change styles when it is over 450px.</p>
							<cite>The Author</cite>
						</blockquote>
					</main>
				</div>
				<div className="ten">
					<p className="ten__red">225px</p>
					<p style={{ color: "var(--c-primary)" }}>675px</p>
				</div>
				<SpacerBlock height={48} />
				<h3>Part Five</h3>
				<p>
					So <em>this</em> is where the idea to wrap our elements we know we
					wish to componentize for use in <strong>@container</strong> queries
					comes in.
				</p>
				<p>
					By applying a direct parent to our Quote we now know we&apos;ll have
					something we can target with a <code>container</code> property. It no
					longer matters <em>where</em> it&apos;s used, we&apos;re basically
					querying itself now because it&apos;s parent has just the one job, to
					be a <code>container</code> with no additional properties or
					requirements.
				</p>
				<p>
					Let&apos;s wrap our blockquote tag in a <code>.my-container</code>{" "}
					classed div from the last lesson. We will also now apply the{" "}
					<code>.alignright</code> class to <em>that</em> instead of the
					original blockquote.
				</p>
				<CodeBlock lang="html">
					{`<div class="ten">
	<aside class="ten__aside">
		<div class="my-container">
			<blockquote class="ten__quote">...</blockquote>
		</div>
	</aside>
	<main class="ten__main">
		<div class="my-container alignright">
			<blockquote class="ten__quote">...</blockquote>
		</div>
		<p>...</p>
		<div class="my-container">
			<blockquote class="ten__quote">...</blockquote>
		</div>
	</main>
</div>`}
				</CodeBlock>
				<SpacerBlock height={48} />
				<p>
					Now, let&apos;s give our new wrapper a <code>container</code>{" "}
					property.
				</p>
				<style>{`#part-five .my-container {
							container: my-container / inline-size;
						}`}</style>
				<CodeBlock>{`.my-container {
	container: my-container / inline-size;
}

/* same unnamed query as before */
@container (min-width: 450px) {
	.ten__quote {
		border: none;
		font-size: 1em;
		text-align: center;
	}
}`}</CodeBlock>
				<div className="ten" id="part-five">
					<aside className="ten__aside">
						<div className="my-container">
							<blockquote className="ten__quote">
								<p>
									This Quote should only change styles when it is over 450px.
								</p>
								<cite>The Author</cite>
							</blockquote>
						</div>
					</aside>
					<main className="ten__main">
						<div className="my-container alignright">
							<blockquote className="ten__quote">
								<p>
									This Quote should only change styles when it is over 450px.
								</p>
								<cite>The Author</cite>
							</blockquote>
						</div>
						<p>
							Nam consectetur, libero vel iaculis ultrices, risus orci hendrerit
							ligula, pharetra fringilla leo velit vel magna. Fusce maximus ut
							arcu ac scelerisque. Nulla facilisi. Etiam non hendrerit velit,
							sed molestie magna.
						</p>
						<div className="my-container">
							<blockquote className="ten__quote">
								<p>
									This Quote should only change styles when it is over 450px.
								</p>
								<cite>The Author</cite>
							</blockquote>
						</div>
					</main>
				</div>
				<div className="ten">
					<p className="ten__red">225px</p>
					<p style={{ color: "var(--c-primary)" }}>675px</p>
				</div>
				<SpacerBlock height={48} />
				<p>
					<em>Finally</em> we have achieved our desired outcome! Only the one Quote over 450px is affected.
				</p>
				<p>
					You can fluidly resize your browser from 0-700px to see the aside and main stack, noting how the full width ones respond and change styles based on the <strong>@container</strong> query, while the{" "}
					<code>.alignright</code> classed one remains as is.
				</p>
				<h2>Wrapping Up</h2>
				<p>
					Remember, you can generically query without a name as we&apos;ve seen here,
					or use a named one like{" "}
					<code>{`@container aside (min-width: 450px) {...}`}</code> for more
					specifc use cases. You can also apply multiple{" "}
					<code>container-name</code>s to a selector to assist with named targeting as well.
				</p>
				<p>
					I hope this shed a little light on <em>why</em> I was using the Group block in
					the first place. As you can see, you have plenty of options for
					applying <strong>@container</strong> styles to your elements without a
					direct parent.
				</p>
			</Layout>
		</>
	);
}
