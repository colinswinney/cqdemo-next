import Layout from "../../components/Layout";
import ButtonsWrapper from "../../components/ButtonsWrapper";
import Button from "../../components/Button";
import CodeBlock from "../../components/CodeBlock";
import ColumnsBlock from "../../components/ColumnsBlock";
import ColumnBlock from "../../components/ColumnBlock";
import GroupBlock from "../../components/GroupBlock";
import QuoteBlock from "../../components/QuoteBlock";
import ImageBlock from "../../components/ImageBlock";

const LESSON_TEXT = "Lesson Six";
const LESSON_SLUG = "lesson-six";

export default function LessonSix() {

	const [sliderValue, setSliderValue] = useState(50);

	useEffect(() => {
		const columnOne = document.getElementById("alignfull-target");
		columnOne.style.gridTemplateColumns = `${sliderValue}% auto`;
	}, [sliderValue]);

	const handleSlider = (event) => {
		setSliderValue(event.target.value);
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

				<h2>Aspect Ratio</h2>
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
