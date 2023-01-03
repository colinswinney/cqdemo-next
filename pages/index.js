import Layout from '../components/Layout';
import Button from '../components/Button';
import ButtonsWrapper from '../components/ButtonsWrapper';
import CodeBlock from '../components/CodeBlock';
import ColumnsBlock from '../components/ColumnsBlock';
import ColumnBlock from '../components/ColumnBlock';
import GroupBlock from '../components/GroupBlock'
import QuoteBlock from '../components/QuoteBlock';
import ImageBlock from '../components/ImageBlock';
import SpacerBlock from '../components/SpacerBlock';

export default function Home() {



	return (
		<>
			<Layout
				metaDescription="A demo for container queries"
				metaTitle="Home"
				title="Container Queries 🤩"
			>
				<h2>Words of Warning</h2>
				<p>
					This site has only been designed for desktop use and tested with the
					latest verison of Chrome (<strong>108</strong> at the time of this
					writing). Please see{" "}
					<a href="https://caniuse.com/css-container-queries">caniuse.com</a>{" "}
					for latest browser compatibilty.
				</p>
				<p>
					Though this demo is built with Next.js, I have used markup and class
					names from WordPress core blocks to hopefully give a better sense of
					how container queries can be used in a common environment.
				</p>
				<p>Finally, I will often be using the words <strong>width</strong> and <strong>height</strong> when it would be more appropriate to use <strong>inline axis</strong> and <strong>block axis</strong>.  Those axes can flip directions depending on the <code>writing-mode</code> property, so do keep that in mind.</p>
				<h2>What Will We Be Demoing?</h2>
				<p>
					This demo will focus on two examples, Quote and Image blocks. Whenever
					you see one of these elements in use, know that they are wrapped in a
					Group block, which is what we are using for setting containment
					properties.
				</p>
				<CodeBlock lang="html">
					{`<div class="wp-block-group is-inline-size">
	<blockquote class="wp-block-quote">
		...
	</blockquote>
</div>

<div class="wp-block-group is-size">
	<figure class="wp-block-image">
		...
	</figure>

	<!-- ignore <pre> in DevTools -->
</div>`}
				</CodeBlock>
				<h3>Quote Block</h3>
				<p>
					The Quote Block will be focused on the <strong>inline-size</strong>{" "}
					container-type. We will only be applying styles based on the{" "}
					<strong>width</strong> of its parent (a Group block).
				</p>

				<h3>Image Block</h3>
				<p>
					The Image Block will be focused on the <strong>size</strong>{" "}
					container-type. We will mostly be applying styles based on the{" "}
					<strong>height</strong> of its parent (a Group block).
				</p>

				<p>
					Below you can toggle the <code>alignfull</code> class on the Columns
					block or resize the <code>height</code> of the Image&apos;s parent block
					in the lower right corner.
				</p>
				<p>
					You can also resize your browser along either axis to see the
					queries take effect.
				</p>

				<SpacerBlock height={24}/>

				<ButtonsWrapper>
					<Button
						label="Toggle Alignfull"
						target="alignfull-target"
						clickHandler="alignfull"
					/>
				</ButtonsWrapper>
				<SpacerBlock height={48} />
				<ColumnsBlock className="has-two-columns" id="alignfull-target">
					<ColumnBlock>
						<GroupBlock className="is-inline-size">
							<QuoteBlock />
						</GroupBlock>
					</ColumnBlock>
					<ColumnBlock>
						<GroupBlock className="is-size resizable">
							<ImageBlock />
						</GroupBlock>
					</ColumnBlock>
				</ColumnsBlock>
				<SpacerBlock height={300} />
			</Layout>
		</>
	);
}
