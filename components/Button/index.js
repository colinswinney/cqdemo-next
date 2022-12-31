import { useState } from "react";
import Check from "../SVG/Check";
import Close from "../SVG/Close";
import { buttonStyles } from "../../utilities/buttonStyles";

export default function ButtonAlignfull(props) {
	const { className, clickHandler, label, height, target, ...restProps } = props;

	const [isAriaPressed, setIsAriaPressed] = useState(false);

	function handleClick(e) {
		const clickedBtn = e.target;
		const targetEl = document.getElementById(target);
		setIsAriaPressed(!isAriaPressed);
		buttonStyles(clickedBtn, isAriaPressed);

		if (clickHandler === 'alignfull' && targetEl) {
			targetEl.classList.toggle("alignfull");
		}

		if (clickHandler === "writing-mode" && targetEl) {
			targetEl.classList.toggle("vertical-rl");
			const code = clickedBtn.querySelector("code");
			code.classList.toggle("invert");
		}
	}

	return (
		<button
			aria-pressed={isAriaPressed}
			className={`button${className ? " " + className : ""}`}
			onClick={handleClick}
			{...restProps}
		>
			<span
				dangerouslySetInnerHTML={{
					__html: label,
				}}
			></span>
			{" "}
			{isAriaPressed ? <Check /> : <Close />}
		</button>
	);
}
