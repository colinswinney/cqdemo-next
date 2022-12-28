import { useState } from "react";

export default function Button(props) {

	const {
		alignfull,
		alignwide,
		className,
		label,
		maxHeight,
		target,
		...restProps
	} = props;

	const [isAriaPressed, setIsAriaPressed] = useState(false);

	function handleToggleClass(element, className, height) {
		if (className) {
			element.classList.toggle(className);
		}

		if (height) {
			element.style.maxHeight = isAriaPressed ? "none" : height + "px";
		}
	}

	function handleClick(e) {
		setIsAriaPressed(!isAriaPressed);

		const clickedBtn = e.target;
		const targetEl = document.getElementById(target);
		const alignClass = alignwide ? "alignwide" : alignfull ? "alignfull" : null;

		// button styles
		clickedBtn.style.color = isAriaPressed
			? `var(--c-primary)`
			: `var(--c-white)`;
		clickedBtn.style.backgroundColor = isAriaPressed
			? `transparent`
			: `var(--c-green)`;
		clickedBtn.style.borderColor = isAriaPressed
			? `currentColor`
			: `var(--c-green)`;

		if (!targetEl) {
			return;
		}

		if (alignwide && alignfull) {
			console.error('Button Component error - Must use only one align prop, alignwide OR alignfull')
			return;
		}

		handleToggleClass(targetEl, alignClass, maxHeight);

		return console.log(isAriaPressed);
	}

	return (
		<button
			className={`button${className ? " " + className : ""}`}
			{...restProps}
			onClick={handleClick}
			aria-pressed={isAriaPressed}
		>
			{label}
		</button>
	);
}
