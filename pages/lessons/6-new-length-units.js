import { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import ButtonsWrapper from "../../components/ButtonsWrapper";
import CodeBlock from "../../components/CodeBlock";
import GroupBlock from "../../components/GroupBlock";
import QuoteBlock from "../../components/QuoteBlock";
import SpacerBlock from "../../components/SpacerBlock";
import WritingModeToggle from "../../components/WritingModeToggle";

const LESSON_TEXT = "Lesson Six";
const LESSON_SLUG = "lesson-six";

export default function LessonSix() {
	// width
	const [sliderValueCQW, setSliderValueCQW] = useState(1);
	const [sliderComputedValueCQW, setSliderComputedValueCQW] = useState();

	useEffect(() => {
		const cqw = document.getElementById("cqw-quote");
		cqw.style.setProperty(`--cqw-width`, sliderValueCQW + `cqw`);
		const cqwStyle = getComputedStyle(cqw);

		const borderWidthCQW = cqwStyle.borderLeftWidth;

		setSliderComputedValueCQW(borderWidthCQW);
	}, [sliderValueCQW]);

	const handleSliderCQW = (event) => {
		setSliderValueCQW(event.target.value);
	};

	// height
	const [sliderValueCQH, setSliderValueCQH] = useState(1);
	const [sliderComputedValueCQH, setSliderComputedValueCQH] = useState();

	useEffect(() => {
		const cqh = document.getElementById("cqh-quote");
		cqh.style.setProperty(`--cqh-height`, sliderValueCQH + `cqh`);
		const cqhStyle = getComputedStyle(cqh);

		const fontSizeCQH = cqhStyle.fontSize;

		setSliderComputedValueCQH(fontSizeCQH);
	}, [sliderValueCQH]);

	const handleSliderCQH = (event) => {
		setSliderValueCQH(event.target.value);
	};

	// height 2
	const [sliderValueCQH2, setSliderValueCQH2] = useState(10);
	const [sliderComputedValueCQH2, setSliderComputedValueCQH2] = useState();

	useEffect(() => {
		const cqh2 = document.getElementById("cqh2-quote");
		cqh2.style.setProperty(`--cqh2-height`, sliderValueCQH2 + `cqh`);
		const cqh2Style = getComputedStyle(cqh2);

		const fontSizeCQH2 = cqh2Style.fontSize;

		setSliderComputedValueCQH2(fontSizeCQH2);
	}, [sliderValueCQH2]);

	const handleSliderCQH2 = (event) => {
		setSliderValueCQH2(event.target.value);
	};

	// cqi
	const [sliderValueCQI, setSliderValueCQI] = useState(5);
	const [sliderComputedValueCQI, setSliderComputedValueCQI] = useState();

	useEffect(() => {
		const cqi = document.getElementById("cqi-quote");
		cqi.style.setProperty(`--cqi-size`, sliderValueCQI + `cqi`);
		const cqiStyle = getComputedStyle(cqi);

		const fontSizeCQI = cqiStyle.fontSize;

		setSliderComputedValueCQI(fontSizeCQI);
	}, [sliderValueCQI]);

	const handleSliderCQI = (event) => {
		setSliderValueCQI(event.target.value);
	};

	// cqb
	const [sliderValueCQB, setSliderValueCQB] = useState(5);
	const [sliderComputedValueCQB, setSliderComputedValueCQB] = useState();

	useEffect(() => {
		const cqb = document.getElementById("cqb-quote");
		cqb.style.setProperty(`--cqb-size`, sliderValueCQB + `cqb`);
		const cqbStyle = getComputedStyle(cqb);

		const fontSizeCQB = cqbStyle.fontSize;

		setSliderComputedValueCQB(fontSizeCQB);
	}, [sliderValueCQB]);

	const handleSliderCQB = (event) => {
		setSliderValueCQB(event.target.value);
	};

	// cqmin and cqmax
	const [sliderValueCQMIN, setSliderValueCQMIN] = useState(5);
	const [sliderComputedValueCQMIN, setSliderComputedValueCQMIN] = useState();
	const [useCQMIN, setUseCQMIN] = useState(false);
	const handleSetUseCQMIN = () => {
		setUseCQMIN(!useCQMIN);
		const targetEl = document.getElementById("cqmin-quote");
		targetEl.classList.toggle("use-cqmin");
	};
	useEffect(() => {
		const cqmin = document.getElementById("cqmin-quote");
		cqmin.style.setProperty(
			`--cqmin-size`,
			useCQMIN ? sliderValueCQMIN + `cqmax` : sliderValueCQMIN + `cqmin`
		);
		const cqminStyle = getComputedStyle(cqmin);

		const fontSizeCQMIN = cqminStyle.fontSize;

		setSliderComputedValueCQMIN(fontSizeCQMIN);
	}, [sliderValueCQMIN, useCQMIN]);

	const handleSliderCQMIN = (event) => {
		setSliderValueCQMIN(event.target.value);
	};


	return (
		<>
			<Layout
				metaDescription="New container query length units"
				metaTitle={LESSON_TEXT}
				title={`<span class="eyebrow">${LESSON_TEXT} </span>New Length Units<br/>👐`}
			>
				<h2>The Basics</h2>
				<ul>
					<li>
						<code>cqw</code> 1% of a query container&apos;s width
					</li>
					<li>
						<code>cqh</code> 1% of a query container&apos;s height
					</li>
					<li>
						<code>cqi</code> 1% of a query container&apos;s inline size
					</li>
					<li>
						<code>cqb</code> 1% of a query container&apos;s block size
					</li>
					<li>
						<code>cqmin</code> The smaller value of either <code>cqi</code> or
						<code>cqb</code>
					</li>
					<li>
						<code>cqmax</code> The larger value of either <code>cqi</code> or
						<code>cqb</code>
					</li>
				</ul>

				<section
					className="content-container content-container--level-2"
					aria-label="cqw"
				>
					<h2>
						<code>cqw</code>
					</h2>
					<p>
						<em>1% of a query container&apos;s width</em>
					</p>
					<p>
						Let&apos;s set the <code>border-left-width</code> property of our
						Quote block using <code>cqw</code>. This could be a nice use case
						for percentage based borders since those aren&apos;t supported.
					</p>
					<p>
						Resize the Group block and watch as the Quote&apos;s border reacts
						to it&apos;s parents dimensions. Note there are no{" "}
						<strong>@container</strong> styles, we&apos;re just looking at the
						unit.
					</p>
					<CodeBlock>
						{`.wp-block-quote {
	border-left-width: 1cqw;
}`}
					</CodeBlock>
					<style>{`
					#cqw-quote {
						border-left-width: var(--cqw-width);
					}
					`}</style>
					<ButtonsWrapper className="space-between">
						<div className="slider-wrapper">
							<label htmlFor="cqw-width">
								<code>border-left-width: {sliderValueCQW + "cqw"}</code>
								<span style={{ fontStyle: "italic" }}>
									({sliderComputedValueCQW})
								</span>
							</label>
							<input
								type="range"
								min="1"
								max="50"
								value={sliderValueCQW}
								className="slider"
								id="cqw-width"
								onChange={handleSliderCQW}
							></input>
						</div>
					</ButtonsWrapper>
					<GroupBlock className="is-inline-size resizable" id="cqw-group">
						<QuoteBlock
							id="cqw-quote"
							paragraph="Whenever I think of the past, it brings back so many memories."
							cite="Steven Wright"
							className="no-container-styles"
						/>
					</GroupBlock>
				</section>

				<SpacerBlock />
				<section
					className="content-container content-container--level-2"
					aria-label="cqh"
				>
					<h2>
						<code>cqh</code>
					</h2>
					<p>
						<em>1% of a query container&apos;s height</em>
					</p>
					<p>
						Now let&apos;s set the <code>font-size</code> property of our Quote
						block using <code>cqh</code>.
					</p>
					<CodeBlock>
						{`.wp-block-quote {
	font-size: 1cqh;
}`}
					</CodeBlock>
					<style>{`
					#cqh-quote {
						font-size: var(--cqh-height);
					}
					`}</style>
					<ButtonsWrapper className="space-between">
						<div className="slider-wrapper">
							<label htmlFor="cqh-height">
								<code>font-size: {sliderValueCQH + "cqh"}</code>
								<span style={{ fontStyle: "italic" }}>
									({sliderComputedValueCQH})
								</span>
							</label>
							<input
								type="range"
								min="1"
								max="10"
								value={sliderValueCQH}
								className="slider"
								id="cqh-height"
								onChange={handleSliderCQH}
							></input>
						</div>
					</ButtonsWrapper>
					<GroupBlock className="is-inline-size resizable" id="cqh-group">
						<QuoteBlock
							id="cqh-quote"
							paragraph="A lot of people are afraid of heights. Not me, I'm afraid of widths."
							cite="Steven Wright"
							className="no-container-styles"
						/>
					</GroupBlock>

					<h3>Something is Off Here...</h3>
					<p>
						Note how <code>cqh</code> is a valid <code>font-size</code> and it
						updates when changing our slider value, however the computed value
						is not what we&apos;d expect by looking at the Group dimensions. So
						what&apos;s up?
					</p>
					<p>
						Because our <code>container-type</code> is set to{" "}
						<strong>inline-size</strong> which does not query against{" "}
						<em>block</em> size, it&apos;s defaulting to the height of our
						browser window and ignoring the height of the Group.
					</p>
					<p>
						Keep this in mind while using the <code>cqh</code> unit that it must
						be used in conjunction with <code>container-type: size</code> for
						the expected values to work.
					</p>
					<p>
						Let&apos;s use the same code as above, but set our Group to a{" "}
						<strong>size</strong> type.
					</p>

					<CodeBlock>
						{`.wp-block-group {
	container-type: size;
	height: 50vh;
}

.wp-block-quote {
	font-size: 1cqh;
}`}
					</CodeBlock>
					<style>{`
					#cqh2-quote {
						font-size: var(--cqh2-height);
					}
					`}</style>
					<ButtonsWrapper className="space-between">
						<div className="slider-wrapper">
							<label htmlFor="cqh2-height">
								<code>font-size: {sliderValueCQH2 + "cqh"}</code>
								<span style={{ fontStyle: "italic" }}>
									({sliderComputedValueCQH2})
								</span>
							</label>
							<input
								type="range"
								min="1"
								max="10"
								value={sliderValueCQH2}
								className="slider"
								id="cqh2-height"
								onChange={handleSliderCQH2}
							></input>
						</div>
					</ButtonsWrapper>
					<GroupBlock className="is-size resizable" id="cqh2-group">
						<QuoteBlock
							id="cqh2-quote"
							paragraph="I wrote a few children's books... not on purpose."
							cite="Steven Wright"
							className="no-container-styles"
						/>
					</GroupBlock>
				</section>
				<SpacerBlock />
				<section
					className="content-container content-container--level-2"
					aria-label="cqi"
				>
					<h2>
						<code>cqi</code>
					</h2>
					<p>
						<em>1% of a query container&apos;s inline size</em>
					</p>

					<CodeBlock>
						{`.wp-block-quote {
	font-size: 5cqi;
}`}
					</CodeBlock>
					<style>{`
					#cqi-quote {
						font-size: var(--cqi-size);
					}
					`}</style>
					<ButtonsWrapper className="space-between">
						<WritingModeToggle
							label="Toggle <code>writing-mode: vertical-rl</code>"
							target="cqi-quote"
						/>
						<div className="slider-wrapper">
							<label htmlFor="cqi-size">
								<code>font-size: {sliderValueCQI + "cqi"}</code>
								<span style={{ fontStyle: "italic" }}>
									({sliderComputedValueCQI})
								</span>
							</label>
							<input
								type="range"
								min="1"
								max="10"
								value={sliderValueCQI}
								className="slider"
								id="cqi-size"
								onChange={handleSliderCQI}
							></input>
						</div>
					</ButtonsWrapper>
					<GroupBlock className="is-size resizable" id="cqi-group">
						<QuoteBlock
							id="cqi-quote"
							paragraph="I had some eyeglasses. I was walking down the street when suddenly the prescription ran out."
							cite="Steven Wright"
							className="no-container-styles"
						/>
					</GroupBlock>
				</section>
				<SpacerBlock />
				<section
					className="content-container content-container--level-2"
					aria-label="cqb"
				>
					<h2>
						<code>cqb</code>
					</h2>
					<p>
						<em>1% of a query container&apos;s block size</em>
					</p>

					<CodeBlock>
						{`.wp-block-quote {
	font-size: 5cqb;
}`}
					</CodeBlock>
					<style>{`
					#cqb-quote {
						font-size: var(--cqb-size);
					}
					`}</style>
					<ButtonsWrapper className="space-between">
						<WritingModeToggle
							label="Toggle <code>writing-mode: vertical-rl</code>"
							target="cqb-quote"
						/>
						<div className="slider-wrapper">
							<label htmlFor="cqb-size">
								<code>font-size: {sliderValueCQB + "cqb"}</code>
								<span style={{ fontStyle: "italic" }}>
									({sliderComputedValueCQB})
								</span>
							</label>
							<input
								type="range"
								min="1"
								max="10"
								value={sliderValueCQB}
								className="slider"
								id="cqb-size"
								onChange={handleSliderCQB}
							></input>
						</div>
					</ButtonsWrapper>
					<GroupBlock className="is-size resizable" id="cqb-group">
						<QuoteBlock
							id="cqb-quote"
							paragraph="I was a peripheral visionary. I could see the future, but only way off to the side."
							cite="Steven Wright"
							className="no-container-styles"
						/>
					</GroupBlock>
				</section>

				<SpacerBlock />
				<section
					className="content-container content-container--level-2"
					aria-label="cqmin and cqmax"
				>
					<h2>
						<code>cqmin</code> & <code>cqmax</code>
					</h2>
					<p>
						<em>The smaller / larger value of either cqi or cqb</em>
					</p>
					<CodeBlock>
						{`.wp-block-quote {
	font-size: 5cqmin;
}`}
					</CodeBlock>
					<style>{`
					#cqmin-quote {
						font-size: var(--cqmin-size);
					}
					`}</style>
					<ButtonsWrapper className="space-between">
						<label>
							<input
								type="checkbox"
								value={useCQMIN}
								onClick={handleSetUseCQMIN}
							/>
							<span
								style={{
									display: "inline-block",
									marginLeft: "0.33em",
									lineHeight: "1",
								}}
							>
								Use <code>cqmax</code>
							</span>
						</label>
						<div className="slider-wrapper">
							<label htmlFor="cqmin-size">
								<code>font-size: {sliderValueCQMIN + "cqmin"}</code>
								<span style={{ fontStyle: "italic" }}>
									({sliderComputedValueCQMIN})
								</span>
							</label>
							<input
								type="range"
								min="1"
								max="10"
								value={sliderValueCQMIN}
								className="slider"
								id="cqmin-size"
								onChange={handleSliderCQMIN}
							></input>
						</div>
					</ButtonsWrapper>
					<GroupBlock className="is-size resizable" id="cqmin-group">
						<QuoteBlock
							id="cqmin-quote"
							paragraph="Cross country skiing is great if you live in a small country."
							cite="Steven Wright"
							className="no-container-styles"
						/>
					</GroupBlock>
				</section>
			</Layout>
		</>
	);
}
