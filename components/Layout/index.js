import Head from "next/head";
import Link from "next/link";
import SpacerBlock from "../SpacerBlock"

export default function Layout({ children, metaDescription, metaTitle, title }) {
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
				<div className="main-container">
					<div className="page-header">
						<h1 dangerouslySetInnerHTML={{ __html: title }} />
					</div>
					{children}
				</div>
			</main>
			<footer className="content-info">
				<nav>
					<ul>
						<li>
							<Link href="/lessons/lesson-one-what-do-they-look-like">
								Lesson One - What Do They Look Like?
							</Link>
						</li>
					</ul>
				</nav>
			</footer>
		</>
	);
}
