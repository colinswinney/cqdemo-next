import { useState, useEffect } from "react";

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
		console.log(targetEl)
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
					able to query the inline axis (usually the width) of the container.
				</p>
				<p>
					A container-type of <strong>size</strong>, allows for querying along
					both the inline axis and block axis of the container. There is no
					container type for stricty the block axis.
				</p>

				<h3>What Happens When You Switch Types?</h3>
				<p>
					Just like every block level element, unless otherwise declared, a
					container has <code>height: auto</code> and will be as tall its
					contents. This works as expected on an <strong>inline-size</strong>{" "}
					container-type.
				</p>
				<p>
					When using a container-type of <strong>size</strong> though, that{" "}
					<code>height: auto</code> calculates to <strong>0</strong>. The inner
					contents are essentially ignored and some kind of height must be
					explicity given (height, min-height, or even just padding).
				</p>
				<p>Select a Type below to see this behavior.</p>
				<CodeBlock>{`.wp-block-group { container-type: ... }`}</CodeBlock>
				<ButtonsWrapper className="space-between">
					<div>
						<p>Container Type</p>
						<input
							type="radio"
							id="inline-size"
							name="container-type"
							value="Inline Size"
							checked={checked === "inline-size"}
							onChange={handleRadioInlineSize}
						/>
						<label htmlFor="inline-size">Inline Size</label>
						<br />
						<input
							type="radio"
							id="size"
							name="container-type"
							value="Size"
							checked={checked === "size"}
							onChange={handleRadioSize}
						/>
						<label htmlFor="size">Size</label>
					</div>
				</ButtonsWrapper>

				<SpacerBlock height={48} />
				<GroupBlock className="is-inline-size" id="group-to-toggle">
					<QuoteBlock />
				</GroupBlock>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lectus
					justo, varius lacinia mauris pellentesque, malesuada tempor felis.
					Nulla vulputate pretium venenatis. Phasellus et ante magna. Sed
					faucibus consequat congue. Morbi molestie ut purus quis convallis.
					Morbi vitae molestie est. Phasellus at finibus tortor. Fusce at
					consequat ipsum, at maximus quam. Nulla pellentesque nibh ut justo
					accumsan blandit.
				</p>
			</Layout>
		</>
	);
}
