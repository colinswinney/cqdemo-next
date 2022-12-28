export default function CodeBlock({ children, className, lang, ...restProps }) {
	const language = lang ? "language-" + lang : "language-css";
	return (
		<pre
			className={`wp-block-code${className ? " " + className : ""}`}
		>
			<code className={language} {...restProps}>
				{children}
			</code>
		</pre>
	);
}