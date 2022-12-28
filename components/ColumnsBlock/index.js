export default function ColumnsBlock({children, className, ...restProps}) {
	return (
		<div
			className={`wp-block-columns${className ? " " + className : ""}`}
			{...restProps}
		>
			{children}
		</div>
	);
}
