import react from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData: allPostsData.map((x) => ({
				...x,
				date: x.date
					? new Intl.DateTimeFormat("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
					  }).format(new Date(x.date))
					: "invalid date",
			})),
		},
	};
}

export default function Blog({ allPostsData }) {
	return (
		<>
			<div className="h-full w-full mx-auto bg-background">
				<Head>
					<title>Courtney Elsner | Blog</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<meta
						name="description"
						content="Documentation, thoughts, and musings."
					/>
					<link
						rel="canonical"
						href="https://courtney.elsner.dev/blog"
					/>
				</Head>

				<div className="relative">
					{/* Horizontal Lines */}
					<div className="absolute top-32 left-0 w-full md:border-t-2 border-dark-green"></div>
					<div className="absolute top-36 left-0 w-full md:border-t-2 border-light-green"></div>
					{/* Vertical Lines */}
					<div className="absolute right-16 top-0 h-full md:border-r-2 border-dark-green"></div>
					<div className="absolute right-20 top-0 h-full md:border-r-2 border-light-green"></div>

					<Header />
					<div className="flex flex-col bg-background">
						<h2 className="font-bebasneue text-6xl text-dark-green mt-16 text-center">
							Logical Musings
						</h2>
						<div className="flex flex-col md:flex-row text-brown font-cinzel text-5xl mt-16 gap-16 px-12 md:px-32 pb-32">
							<section>
								<div className="justify-left">
									{allPostsData.map(
										({
											id,
											date,
											title,
											hero,
											excerpt,
										}) => {
											return (
												<div
													className="flex flex-col md:flex-row gap-8 mt-8 justify-left drop-shadow-lg"
													key={
														id
													}
												>
													<Image
														className="z-0"
														loading="eager"
														src={
															hero
														}
														alt={
															title
														}
														width={
															200
														}
														height={
															200
														}
													/>
													<div className="flex flex-col gap-4">
														<Link
															className="font-cinzel font-semibold no-underline text-light-green text-2xl mt-6"
															href={
																"/posts/[id]"
															}
															as={`/posts/${id}`}
														>
															{
																title
															}
														</Link>
														<h2 className="font-bebasneue text-xl text-rose">
															{" "}
															{
																date
															}{" "}
														</h2>
														<p className="font-arapey text-lg text-brown mt-4">
															{" "}
															{
																excerpt
															}{" "}
														</p>
													</div>
												</div>
											);
										}
									)}
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		<Footer />
		</>
	);
}
