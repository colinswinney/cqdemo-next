export default function QuoteBlock({className, paragraph, cite, ...restProps}) {

	const paragraphInnerHTML = paragraph
						? paragraph
						: "CSS containment provides a way to isolate parts of a page and declare to the browser these parts are independent from the rest of the page in terms of styles and layout.";

	const citInnerHTML = !paragraph ? "MDN Web Docs" : cite ? cite : "";

	return (
		<blockquote
			className={`wp-block-quote${className ? " " + className : ""}`}
			{...restProps}
		>

			<p dangerouslySetInnerHTML={{ __html: paragraphInnerHTML }} />

			{paragraph && !cite ? null : <cite dangerouslySetInnerHTML={{ __html: citInnerHTML }} />}

		</blockquote>
	);
}
