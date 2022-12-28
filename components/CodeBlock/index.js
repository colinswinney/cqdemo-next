export default function CodeBlock({ children, className, ...restProps }) {
	return (
		<pre
			className={`wp-block-code alignwide${className ? " " + className : ""}`}
		>
			<code className="language-css" {...restProps}>
				{children}
			</code>
		</pre>
	);
}