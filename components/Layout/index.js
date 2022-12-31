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
						<ul>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/lessons/1-what-do-they-look-like">
									Lesson One - What Do They Look Like?
								</Link>
							</li>
							<li>
								<Link href="/lessons/2-inline-size">
									Lesson Two - Inline Size
								</Link>
							</li>
							<li>
								<Link href="/lessons/3-inline-size-vs-size">
									Lesson Three - Inline Size vs Size
								</Link>
							</li>
							<li>
								<Link href="/lessons/4-size">Lesson Four - Size</Link>
							</li>
							<li>
								<Link href="/lessons/5-descriptors">Lesson Five - Descriptors</Link>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		</>
	);
}
