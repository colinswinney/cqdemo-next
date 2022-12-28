export default function SpacerBlock({ height, className, ...restProps}) {
	return (
		<div
			className={`wp-block-spacer${className ? " " + className : ""}`}
			style={{
				height: height ? height + "px" : "72px",
			}}
			{...restProps}
		></div>
	);
}