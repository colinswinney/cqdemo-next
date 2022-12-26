import { useEffect } from "react";
import hljs from "highlight.js";

// styles
import "../styles/reset.css";
import "highlight.js/styles/a11y-dark.css";
import "../styles/globals.css";


export default function App({ Component, pageProps }) {
	useEffect(() => {
		hljs.highlightAll();
	}, []);

	return <Component {...pageProps} />;
}
