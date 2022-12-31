export default function SpacerBlock(props) {
	const { height, className, ...restProps } = props;

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