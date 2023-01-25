import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import SpacerBlock from "../SpacerBlock"


export default function Layout({ children, metaDescription, metaTitle, title }) {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>{`Container Queries | ${metaTitle}`}</title>
				<meta name="description" content={metaDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="banner">
				<Link href="/" className="logo">
					Container Queries
				</Link>
			</header>
			<main className="main">
				<div className="content-container">
					<div className="page-header alignwide">
						<h1 dangerouslySetInnerHTML={{ __html: title }} />
					</div>
					{children}
				</div>
			</main>
			<footer className="content-info">
				<div className="content-info__container content-container">
					<h3>Lessons</h3>
					<nav aria-label="Lessons">
						<Link href="/" className={router.pathname == "/" ? "active" : ""}>
							Home
						</Link>
						<ol>
							<li>
								<Link
									href="/lessons/1-what-do-they-look-like"
									className={
										router.pathname == "/lessons/1-what-do-they-look-like"
											? "active"
											: ""
									}
								>
									What Do They Look Like?
								</Link>
							</li>
							<li>
								<Link
									href="/lessons/2-inline-size"
									className={
										router.pathname == "/lessons/2-inline-size" ? "active" : ""
									}
								>
									Inline Size
								</Link>
							</li>
							<li>
								<Link
									href="/lessons/3-inline-size-vs-size"
									className={
										router.pathname == "/lessons/3-inline-size-vs-size"
											? "active"
											: ""
									}
								>
									Inline Size vs Size
								</Link>
							</li>
							<li>
								<Link
									href="/lessons/4-size"
									className={
										router.pathname == "/lessons/4-size" ? "active" : ""
									}
								>
									Size
								</Link>
							</li>
							<li>
								<Link
									href="/lessons/5-descriptors"
									className={
										router.pathname == "/lessons/5-descriptors" ? "active" : ""
									}
								>
									Descriptors
								</Link>
							</li>
							<li>
								<Link
									href="/lessons/6-new-length-units"
									className={
										router.pathname == "/lessons/6-new-length-units"
											? "active"
											: ""
									}
								>
									New Length Units
								</Link>
							</li>
							<li>
								<Link
									href="/lessons/7-with-fluid-typography"
									className={
										router.pathname == "/lessons/7-with-fluid-typography"
											? "active"
											: ""
									}
								>
									With Fluid Typography
								</Link>
							</li>
							<li>
								<Link
									href="/lessons/8-the-future"
									className={
										router.pathname == "/lessons/8-the-future" ? "active" : ""
									}
								>
									The Future
								</Link>
							</li>
							<li>
								<Link
									href="/lessons/9-wordpress-snippet"
									className={
										router.pathname == "/lessons/9-wordpress-snippet"
											? "active"
											: ""
									}
								>
									WordPress Snippet
								</Link>
							</li>
							<li>
								<Link
									href="/lessons/10-a-little-clarification"
									className={
										router.pathname == "/lessons/10-a-little-clarification"
											? "active"
											: ""
									}
								>
									A Little Clarification
								</Link>
							</li>
						</ol>
					</nav>
				</div>
			</footer>
		</>
	);
}
