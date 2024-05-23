import React from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "../components/header";
import Footer from "../components/footer";
const matter = require("gray-matter");

export default function Post({ content, postData, id }) {
	const cononicalLink = `https://courtney.elsner.dev/posts/${id}`;
	return (
		<>
			<div className="h-full bg-background">
				<Head>
					<title>{postData.title}</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<meta
						name="description"
						content={postData.excerpt}
					/>
					<link
						rel="canonical"
						href={cononicalLink}
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
					<div className="flex flex-col font-cinzel text-5xl mt-16 justify-center gap-16 px-12 md:px-32">
						<div className="md:basis-3/4 flex flex-col text-center">
							<h1 className="text-dark-green">
								{postData.title}
							</h1>
							<h2 className="font-bebasneue text-2xl mt-8 text-rose">
								{postData.date}
							</h2>

							<div
								className="h-96 mt-8 bg-cover bg-center bg-no-repeat"
								style={{
									backgroundImage: `url(${postData.hero})`,
								}}
							></div>
						</div>
					</div>

					<div className="text-dark-green font-arapey text-md md:text-2xl justify-center px-12 md:px-32 pb-20">
						<ReactMarkdown
							remarkPlugins={[
								remarkGfm,
							]}
						>
							{content}
						</ReactMarkdown>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));

	const paths = files.map((filename) => ({
		params: {
			id: filename.replace(".md", ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { id } }) {
	const markdownWithMetadata = fs
		.readFileSync(path.join("posts", id + ".md"))
		.toString();

	const { data, content } = matter(markdownWithMetadata);

	const dateObject = new Date(data.date);
	const options = { year: "numeric", month: "long", day: "numeric" };
	const formattedDate = dateObject.toLocaleDateString("en-US", options);

	const postData = {
		...data,
		date: formattedDate,
	};

	return {
		props: {
			content: `${content}`,
			postData,
			id,
		},
	};
}
