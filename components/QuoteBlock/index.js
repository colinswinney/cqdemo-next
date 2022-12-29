export default function QuoteBlock({className, paragraph, cite, ...restProps}) {
	return (
		<blockquote
			className={`wp-block-quote${className ? " " + className : ""}`}
			{...restProps}
		>
			<p
				dangerouslySetInnerHTML={{
					__html: paragraph
						? paragraph
						: "CSS containment provides a way to isolate parts of a page and declare to the browser these parts are independent from the rest of the page in terms of styles and layout.",
				}}
			/>
			{ paragraph && !cite
				? ""
				: <cite
					dangerouslySetInnerHTML={{
						__html: !paragraph
							? "MDN Web Docs"
							: cite
							? cite
							: "",
					}}
				/>
			}
		</blockquote>
	);
}
