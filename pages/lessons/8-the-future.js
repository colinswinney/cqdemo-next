import { useState } from "react";

import Layout from "../../components/Layout";
import ButtonsWrapper from "../../components/ButtonsWrapper";
import CodeBlock from "../../components/CodeBlock";
import GroupBlock from "../../components/GroupBlock";
import QuoteBlock from "../../components/QuoteBlock";

const LESSON_TEXT = "Lesson Eight";
const LESSON_SLUG = "lesson-eight";

export default function LessonEight() {
	// fluid typography
	const [textAlignment, setTextAlignment] = useState({
		align: "center",
	});

	function handleTextAlignment(event) {
		const { name, value, type, checked } = event.target;
		setTextAlignment((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === "checkbox" ? checked : value,
			};
		});
	}

	return (
		<>
			<Layout
				metaDescription="The future of container queries"
				metaTitle={LESSON_TEXT}
				title={`<span class="eyebrow">${LESSON_TEXT} </span>The Future<br/><span style="display: block">🔮</span>`}
			>
				<h2>Style Queries</h2>
				<p>
					Though still experimental and therefore subject to change, we can try
					out style container queries right now (
					<em>note that you may only query custom properties</em>).
				</p>
				<p>
					To see how they work, you&apos;ll need to view this page in Canary
					using the steps below.
				</p>
				<ul>
					<li>
						Download either{" "}
						<a href="https://www.google.com/chrome/canary/">Chrome Canary</a> or{" "}
						<a href="https://www.microsoftedgeinsider.com/en-us/download">
							Edge Canary
						</a>
						.
					</li>
					<li>
						Head to{" "}
						<code>
							about://flags/#enable-experimental-web-platform-features
						</code>
						.
					</li>
					<li>
						Set <strong>Experimental Web Platform Features </strong> to{" "}
						<em>Enabled</em>.
					</li>
					<li>Restart the Browser.</li>
				</ul>

				<CodeBlock>{`/* Add a variable to our Group */
.wp-block-group {
	--text-align: center;
	text-align: var(--text-align);
}

/* Do things when that variable changes to... */

/* ...anything but the original value */
@container wp-block-group not style(--text-align: center) {

	.wp-block-quote {
		padding: 1em;
		...
	}
}

/* ...or a specific value */
@container wp-block-group style(--text-align: left) {

	.wp-block-quote {
		border-left: 1cqw solid var(--c-primary);
		...
	}
}

@container wp-block-group style(--text-align: right) {

	.wp-block-quote {
		border-right: 1cqw solid var(--c-primary);
		...
	}
}`}</CodeBlock>

				<ButtonsWrapper className="space-between">
					<div style={{ display: "flex", flexDirection: "column" }}>
						<code>--text-align: {textAlignment.align}</code>
						<label htmlFor="left">
							<input
								type="radio"
								id="left"
								name="align"
								value="left"
								checked={textAlignment.align === "left" ? true : false}
								onChange={handleTextAlignment}
							/>
							Left
						</label>

						<label htmlFor="center">
							<input
								type="radio"
								id="center"
								name="align"
								value="center"
								checked={textAlignment.align === "center" ? true : false}
								onChange={handleTextAlignment}
							/>
							Center
						</label>

						<label htmlFor="right">
							<input
								type="radio"
								id="right"
								name="align"
								value="right"
								checked={textAlignment.align === "right" ? true : false}
								onChange={handleTextAlignment}
							/>
							Right
						</label>
					</div>
				</ButtonsWrapper>
				<GroupBlock className={`is-inline-size ft-group`}>
					<QuoteBlock
						paragraph="My roommate got a pet elephant. Then it got lost. It's in the apartment somewhere."
						cite="Steven Wright"
					/>
					<style>{`
					.wp-block-group {
						--text-align: ${textAlignment.align};
						text-align: var(--text-align);

					@container wp-block-group not style(--text-align: center) {

						.wp-block-quote {
							background-position: 0.5em 0.25em;
							max-width: var(--container-max) !important;
							padding: 1em !important;
						}

						.wp-block-quote p {
							max-width: 50ch !important;
						}
					}

					@container wp-block-group style(--text-align: left) {

						.wp-block-quote {
							border-left: 1cqw solid var(--c-primary) !important;
						}

						.wp-block-quote p {
							margin-left: 0;
							margin-right: auto;
						}
					}

					@container wp-block-group style(--text-align: right) {

						.wp-block-quote {
							background-position: calc(100% - 0.5em) 0.25em;
							border-right: 1cqw solid var(--c-primary) !important;
						}

						.wp-block-quote p {
							margin-left: auto;
							margin-right: 0;
						}
					}
					`}</style>
				</GroupBlock>

				<h2>Full Browser Support</h2>
				<p>
					Container Queries are already supported in Chrome, Edge, and Safari
					and should land in Firefox in version 110, set for release on February
					14th, 2023.
				</p>
				<p>
					There is also{" "}
					<a href="https://github.com/GoogleChromeLabs/container-query-polyfill">
						a polyfill available
					</a>{" "}
					if you need to support older browser versions in your project.
				</p>
			</Layout>
		</>
	);
}
