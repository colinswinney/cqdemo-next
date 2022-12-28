import { useEffect } from "react";
import prism from "prismjs";

// styles
import "prismjs/themes/prism-okaidia.css";
import "../styles/index.scss";


export default function App({ Component, pageProps }) {
	useEffect(() => {
		prism.highlightAll();
	}, []);

	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
