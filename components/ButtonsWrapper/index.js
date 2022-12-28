export default function ButtonsWrapper({ children, className, ...restProps }) {
	return (
		<div
			className={`buttons-wrapper${className ? " " + className : ""}`}
			{...restProps}
		>
			{children}
		</div>
	);
}
