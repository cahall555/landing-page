import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Head from "next/head";

export default function Projects() {
	return (
		<>
			<div className="h-screen w-full mx-auto bg-background">
				<Head>
					<title>
						Courtney Elsner | Projects
					</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<meta
						name="description"
						content="Projects completed or being worked on."
					/>
					<link
						rel="canonical"
						href="https://courtney.elsner.dev/projects"
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

					<h1 className="font-bebasneue text-center text-6xl mt-12 text-light-green">
						Projects
					</h1>

					<div className="flex flex-col items-center w-full px-12 sm:px-32 pt-16 bg-background">
						<h1 className="font-bebasneue text-2xl">
							AI Documentation Chatbot
						</h1>
						<h2 className="font-arapey text-center text-lg">
							OpenAI API | LangChain |
							Pinecone | Astro |
							Docker
						</h2>

						<div className="flex flex-col sm:flex-row gap-11 mt-2">
							<div className="flex flex-row gap-2">
								<h2 className="font-bebasneue text-md sm:text-xl">
									GitHub:
								</h2>
								<div className="font-bebasneue text-brown text-md sm:text-xl">
									<a className="no-underline"
										href="https://github.com/cahall555/documentation-cipher"
										target="_blank"
									>
										https://github.com/cahall555/documentation-cipher
									</a>
								</div>
							</div>
						</div>
						<p className="font-arapey mt-4 text-left">
							This tool is designed to
							allow employees to query
							company documentation as
							they would a co-worker.
							The intent is to improve
							compliance of reviewing
							and updating company
							documentation, creating
							consistency and
							standardization across
							an organization.
						</p>
					</div>
					<div className="flex flex-col items-center w-full px-12 sm:px-32 pt-16 bg-background">
						<h1 className="font-bebasneue text-2xl">
							Company Website
						</h1>
						<h2 className="font-arapey text-center text-lg">
							Next JS | Tailwind CSS |
							Amplify
						</h2>

						<div className="flex flex-col sm:flex-row gap-11 mt-2">
							<div className="flex flex-row gap-2">
								<h2 className="font-bebasneue text-md sm:text-xl">
									Website:
								</h2>
								<div className="font-bebasneue text-brown text-md sm:text-xl">
									<a className="no-underline"
										href="https://connectivehorizons.com"
										target="_blank"
									>
										Connective
										Horizons
									</a>
								</div>
							</div>
						</div>
						<p className="font-arapey mt-4 text-left">
							This is an active
							company website that
							caters to small
							businesses in the
							Caribbean.
						</p>
					</div>

					<div className="flex flex-col items-center w-full px-12 sm:px-32 pt-16 bg-background">
						<h1 className="font-bebasneue text-2xl">
							Blog
						</h1>
						<h2 className="font-arapey text-center text-lg">
							Metalsmith | Tailwind
							CSS | Amazon S3 |
							Firebase
						</h2>

						<div className="flex flex-col sm:flex-row gap-11 mt-2">
							<div className="flex flex-row gap-2">
								<h2 className="font-bebasneue text-md sm:text-xl">
									Website:
								</h2>
								<div className="font-bebasneue text-brown text-md sm:text-xl">
									<a className="no-underline"
										href="https://robandcourtney.com"
										target="_blank"
									>
										Infinite
										Sunsets
									</a>
								</div>
							</div>
						</div>
						<p className="font-arapey mt-4 text-left">
							This blog was created to
							document ongoing
							experiences living in
							the U.S. Virgin Islands.
						</p>
					</div>
					<div className="flex flex-col items-center w-full px-12 sm:px-32 pt-16 bg-background pb-16">
						<h1 className="font-bebasneue text-2xl">
							Document Manager
						</h1>
						<h2 className="font-arapey text-center text-lg">
							Next JS | Tailwind CSS |
							Amplify
						</h2>

						<div className="flex flex-col sm:flex-row gap-11 mt-2">
							<div className="flex flex-row gap-2">
								<h2 className="font-bebasneue text-md sm:text-xl">
									GitHub:
								</h2>
								<div className="font-bebasneue text-brown text- md sm:text-xl">
									<a className="no-underline"
										href="https://github.com/cahall555/document-management"
										target="_blank"
									>
										https://github.com/cahall555/document-management
									</a>
								</div>
							</div>
						</div>
						<p className="font-arapey mt-4 text-left">
							Current work in progress
							inspired by nonprofits
							needing to collect and
							track a variety of
							documents from different
							people. Information
							collected can be
							confidential and time
							sensitive.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
