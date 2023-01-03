export default function CodeBlock({ children, className, editable, lang, ...restProps }) {
	const language = lang ? "language-" + lang : "language-css";
	return (
		<pre className={`wp-block-code${className ? " " + className : ""}`}>
			<code className={language} contenteditable={editable} {...restProps}>
				{children}
			</code>
		</pre>
	);
}