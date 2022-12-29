export function buttonStyles(clickedBtn, isAriaPressed) {
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
}