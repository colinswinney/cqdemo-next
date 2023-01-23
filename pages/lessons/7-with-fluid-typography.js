import { useState } from "react";

import Layout from "../../components/Layout";
import ButtonsWrapper from "../../components/ButtonsWrapper";
import ColumnsBlock from "../../components/ColumnsBlock";
import ColumnBlock from "../../components/ColumnBlock";
import GroupBlock from "../../components/GroupBlock";
import QuoteBlock from "../../components/QuoteBlock";

const LESSON_TEXT = "Lesson Seven";
const LESSON_SLUG = "lesson-seven";

export default function LessonSeven() {

	// fluid typography
	const [useCQW, setUseCQW] = useState(false);
	const handleToggleCQW = () => {
		setUseCQW(!useCQW);
	}

	return (
		<>
			<Layout
				metaDescription="Using new units with fluid typography"
				metaTitle={LESSON_TEXT}
				title={`<span class="eyebrow">${LESSON_TEXT} </span>With Fluid Typography<br/><span style="margin-top: 0.25em;display: block">🧃 🖍</span>`}
			>
				<h2>Replacing VW with CQW</h2>
				<p>
					We can use a tool like <a href="https://utopia.fyi/">Utopia.fyi</a> to
					create fluid typography with the <code>cqw</code> and <code>cqh</code>{" "}
					units, allowing for more exacting constraints.
				</p>
				<p>
					Suppose our Quote block should use fluid typography in one state and
					static in another. It could be used in a design as small as 250px
					wide, but change to a new style if used over 450px.
				</p>
				<p>
					We want our font to stay fluid from 250-450px going from 16-24px, but
					once it changes to its new state, the font should cease being fluid.
				</p>
				<p>
					Let&apos;s{" "}
					<a href="https://utopia.fyi/type/calculator/?c=250,16,1.2,450,24,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=s,l,xl,12">
						visit Utopia and match our designs settings
					</a>
					. To review:
				</p>
				<ul>
					<li>Set your min-width to 250px and it&apos;s font-size to 16px.</li>
					<li>Set your max-width to 450px and it&apos;s font-size to 24px.</li>
					<li>Type scale doesn&apos;t matter for this exercise.</li>
					<li>
						Scroll to the CSS Generator and check <strong>USE CLAMP</strong>.
					</li>
					<li>
						Grab the value from <code>--step-0</code>.
					</li>
				</ul>
				<code>
					{`font-size: clamp(1.00rem, calc(0.38rem + 4${
						useCQW ? `cq` : `v`
					}w), 1.50rem); `}
				</code>
				<style>{`
					.ft-group .wp-block-quote p {
						font-size: clamp(1.00rem, calc(0.38rem + 4vw), 1.50rem);
					}
					.ft-group.use-cqw .wp-block-quote p {
						font-size: clamp(1.00rem, calc(0.38rem + 4cqw), 1.50rem);
					}
					`}</style>
				<ButtonsWrapper className="space-between">
					<label htmlFor="toggle-cqw">
						<input
							type="checkbox"
							id="toggle-cqw"
							value={useCQW}
							onClick={handleToggleCQW}
						/>
						<span
							style={{
								display: "inline-block",
								marginLeft: "0.33em",
								lineHeight: "1",
							}}
						>
							Use <code>cqw</code>
						</span>
					</label>
				</ButtonsWrapper>

				<ColumnsBlock className="alignwide has-two-columns has-two-columns--thirds">
					<ColumnBlock>
						<GroupBlock
							className={`is-inline-size resizable ft-group${
								useCQW ? ` use-cqw` : ``
							}`}
							style={{ maxWidth: "none" }}
						>
							<QuoteBlock
								paragraph="Curiosity killed the cat, but for a while I was a suspect."
								cite="Steven Wright"
							/>
						</GroupBlock>
					</ColumnBlock>
					<ColumnBlock>
						<GroupBlock
							className={`is-inline-size ft-group${useCQW ? ` use-cqw` : ``}`}
						>
							<QuoteBlock
								paragraph="I poured spot remover on my dog. Now he's gone."
								cite="Steven Wright"
							/>
						</GroupBlock>
						<style>{`@container wp-block-quote style(--text-align-var: center) {
							.ft-group .wp-block-quote p {
								color: var(--c-blue);
							}
						`}</style>
					</ColumnBlock>
				</ColumnsBlock>
				<GroupBlock
					className={`is-inline-size alignfull ft-group${
						useCQW ? ` use-cqw` : ``
					}`}
				>
					<QuoteBlock
						paragraph="I used to work in a fire hydrant factory. You couldn't park anywhere near the place."
						cite="Steven Wright"
					/>
				</GroupBlock>
			</Layout>
		</>
	);
}
