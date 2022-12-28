export default function ColumnBlock({ children, className, ...restProps }) {
	return (
		<div
			className={`wp-block-column${className ? " " + className : ""}`}
			{...restProps}
		>
			{children}
		</div>
	);
}
