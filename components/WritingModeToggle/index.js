import { useState } from "react";

export default function WritingModeToggle(props) {
	const [ isClicked, setIsClicked ] = useState(false);
	const { label, target, } =
		props;

	function handleClick() {
		setIsClicked(!isClicked);
		const targetEl = document.getElementById(target);
		targetEl.classList.toggle("vertical-rl");
	}

	return (
		<>
			<label>
				<input
					type="checkbox"
					value={isClicked}
					onClick={handleClick}
				/>
				<span
					style={{
						display: "inline-block",
						marginLeft: "0.33em",
						lineHeight: "1",
					}}
					dangerouslySetInnerHTML={{
						__html: label,
					}}
				></span>
			</label>
		</>
	);
}
