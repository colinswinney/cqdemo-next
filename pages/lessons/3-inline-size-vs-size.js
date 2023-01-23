import { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import ButtonsWrapper from "../../components/ButtonsWrapper";
import CodeBlock from "../../components/CodeBlock";
import GroupBlock from "../../components/GroupBlock";
import QuoteBlock from "../../components/QuoteBlock";

const LESSON_TEXT = 'Lesson Three';
const LESSON_SLUG = 'lesson-three';

export default function LessonThree() {

	const [checked, setChecked] = useState("inline-size");

	const handleRadioInlineSize = () => {
		setChecked("inline-size");
	};

	const handleRadioSize = () => {
		setChecked("size");
	};

	useEffect(() => {
		const targetEl = document.getElementById("group-to-toggle");
		targetEl.style.containerType = checked;
	}, [checked])

	return (
		<>
			<Layout
				metaDescription="The differences between an inline-size and size container-type"
				metaTitle={LESSON_TEXT}
				title={`<span>${LESSON_TEXT} </span>Inline Size vs Size 🤼`}
			>
				<h2>The Basics</h2>
				<p>
					With a container-type of <strong>inline-size</strong>, you are only
					able to query the inline axis of the container.
				</p>
				<p>
					A container-type of <strong>size</strong>, allows for querying along
					both the inline axis and the block axis of the container. There is no
					container-type for querying stricty the block axis.
				</p>

				<h3>What Happens When You Switch Types?</h3>
				<p>
					Just like every block level element, unless otherwise declared, a
					container has a default of <code>height: auto</code>. This works as
					expected on an <strong>inline-size</strong> container-type where the
					height will calculate based on the elements contents.
				</p>
				<p>
					When using a container-type of <strong>size</strong> though, that{" "}
					<code>height: auto</code> calculates to <strong>0</strong>. The inner
					contents are essentially ignored and some kind of height must be
					explicity given (<code>height</code>, <code>min-height</code>, or even
					just <code>padding</code>).
				</p>
				<p>
					Select a <strong>container-type</strong> below to see how switching
					types can affect layout.
				</p>
				<CodeBlock>{`.wp-block-group { container-type: ... }`}</CodeBlock>
				<ButtonsWrapper className="space-between">
					<div>
						<p>
							<strong>container-type</strong>
						</p>
						<input
							type="radio"
							id="inline-size"
							name="container-type"
							value="inline-size"
							checked={checked === "inline-size"}
							onChange={handleRadioInlineSize}
						/>
						<label htmlFor="inline-size">inline-size</label>
						<br />
						<input
							type="radio"
							id="size"
							name="container-type"
							value="size"
							checked={checked === "size"}
							onChange={handleRadioSize}
						/>
						<label htmlFor="size">size</label>
					</div>
				</ButtonsWrapper>
				<GroupBlock
					style={{ container: "wp-block-group / inline-size" }}
					id="group-to-toggle"
				>
					<QuoteBlock
						paragraph="If it's a penny for your thoughts and you put in your two cents worth, then someone, somewhere is making a penny."
						cite="Steven Wright"
					/>
				</GroupBlock>
				<section
					aria-label="An example banner ad"
					className="alignfull content-container"
					style={{
						backgroundColor: "rgb(200 0 0 / 5%)",
						display: "grid",
						padding: "3em 0",
						placeItems: "center",
					}}
				>
					<h2
						style={{
							color: "var(--c-primary)",
							marginTop: 0,
							maxWidth: "15ch",
							textAlign: "center",
						}}
					>
						The Worlds Most Legible Website
					</h2>
					<ButtonsWrapper>
						<button disabled className="button">
							Learn More
						</button>
					</ButtonsWrapper>
				</section>
			</Layout>
		</>
	);
}
