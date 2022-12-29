import { useState } from "react";
import Check from "../SVG/Check";
import Close from "../SVG/Close";
import { buttonStyles } from "../../utilities/buttonStyles";

export default function ButtonAlignfull(props) {
	const { className, clickHandler, label, maxHeight, target, ...restProps } = props;

	const [isAriaPressed, setIsAriaPressed] = useState(false);

	function handleClick(e) {
		const clickedBtn = e.target;
		const targetEl = document.getElementById(target);
		setIsAriaPressed(!isAriaPressed);
		buttonStyles(clickedBtn, isAriaPressed);

		if (clickHandler === 'alignfull' && targetEl) {
			targetEl.classList.toggle("alignfull");
		}

		if (clickHandler === 'maxHeight' && targetEl && maxHeight) {
			targetEl.style.maxHeight = isAriaPressed ? "none" : maxHeight + "px";
		}
	}

	return (
		<button
			aria-pressed={isAriaPressed}
			className={`button${className ? " " + className : ""}`}
			onClick={handleClick}
			{...restProps}
		>
			{label}
			{isAriaPressed ? <Check /> : <Close />}
		</button>
	);
}
