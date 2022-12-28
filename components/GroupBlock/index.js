export default function GroupBlock({ children, className, ...restProps }) {
	return (
		<div
			className={`wp-block-group${className ? " " + className : ""}`}
			{...restProps}
		>
			{children}
		</div>
	);
}
