import { useEffect, useState } from "react";
import { useSize } from "../../utilities/useSize";
import { getScrollbarWidth } from "../../utilities/getScrollbarWidth";

export default function GroupBlock({ children, className, ...restProps }) {

	const [target, setTarget] = useState();
	const [scrollbarWidth, setScrollbarWidth] = useState();
	const size = useSize(target);

	useEffect(() => {
		setScrollbarWidth(getScrollbarWidth());
	},[])

	return (
		<div
			className={`wp-block-group${className ? " " + className : ""}`}
			{...restProps}
			ref={setTarget}
		>
			{children}
			<pre
				className="dimensions"
				dangerouslySetInnerHTML={{
					__html: `<strong>${Math.round(
						size?.width + scrollbarWidth
					)}</strong>x<strong>${Math.round(
						size?.height + scrollbarWidth
					)}</strong>`,
				}}
			/>
		</div>
	);
}
