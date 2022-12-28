export default function QuoteBlock({className, ...restProps}) {
	return (
		<blockquote
			className={`wp-block-quote${className ? " " + className : ""}`}
			{...restProps}
		>
			<p>
				CSS containment provides a way to isolate parts of a page and declare to
				the browser these parts are independent from the rest of the page in
				terms of styles and layout.
			</p>
			<cite>MDN Web Docs</cite>
		</blockquote>
	);
}
