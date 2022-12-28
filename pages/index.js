import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock'
import GroupBlock from '../components/GroupBlock'
import QuoteBlock from '../components/QuoteBlock';
import ImageBlock from '../components/ImageBlock';

export default function Home() {
	return (
		<>
			<Layout
				metaDescription="A demo for container queries"
				metaTitle="Home"
				title="Container Queries"
			>
				<CodeBlock>
{`.wp-block-group {
	/* must have a type - size, inline-size, normal */
	container-type: inline-size;

	/* name is optional */
	container-name: wp-block-group;

	/* shorthand for the above - name / type */
	container: wp-block-group / inline-size;
}`}
				</CodeBlock>
				<GroupBlock>
					<QuoteBlock />
				</GroupBlock>

				<GroupBlock>
					<ImageBlock />
				</GroupBlock>
			</Layout>
		</>
	);
}
