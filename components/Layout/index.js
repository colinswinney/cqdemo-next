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
				<div className="content-info__container">
					<nav aria-label="Lessons">
						<ul>
							<li>
								<Link href="/">
									Home
								</Link>
							</li>
							<li>
								<Link href="/lessons/lesson-1-what-do-they-look-like">
									Lesson One - What Do They Look Like?
								</Link>
							</li>
							<li>
								<Link href="/lessons/lesson-2-inline-size">
									Lesson Two - Inline Size
								</Link>
							</li>
							<li>
								<Link href="/lessons/lesson-3-inline-size-vs-size">
									Lesson Three - Inline Size vs Size
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		</>
	);
}
