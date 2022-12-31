import { useState, useLayoutEffect } from "react";
import useResizeObserver from "@react-hook/resize-observer";

export function useSize(target) {
	const [size, setSize] = useState();

	useLayoutEffect(() => {
		target && setSize(target.getBoundingClientRect());
	}, [target]);

	// Where the magic happens
	useResizeObserver(target, (entry) => setSize(entry.contentRect));
	return size;
}
