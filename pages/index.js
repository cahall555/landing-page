import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Head from "next/head";

export default function Home() {
	const schema = {
		"@context": "http://schema.org",
		"@type": "Person",
		address: {
			"@type": "PostalAddress",
			addressLocality: "",
			addressRegion: "VI",
			postalCode: "00841",
			streetAddress: "",
			addressCountry: "USA",
		},
		email: "courtney@elsner.dev",
		name: "Courtney Elsner",
		jobTitle: "Full Stack Developer",
		telephone: "",
		url: "https://courtney.elsner.dev",
		sameAs: [
			"https://www.github.com/cahall555",
			"https://www.linkedin.com/in/courtneyelsner",
		],
	};

	return (
		<>
			<div className="h-screen w-full mx-auto bg-background">
				<Head>
					<title>
						Courtney Elsner | Full Stack
						Developer
					</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<meta
						name="description"
						content="Hey! My name is Courtney, I am a full stack developer living in the US territory of St. Croix. I have experience in accounting, product management, and software development. I enjoy building software that makes processes more efficient."
					/>
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(
								schema
							),
						}}
					/>
					<link
						rel="canonical"
						href="https://courtney.elsner.dev/"
					/>
				</Head>
				<div className="relative">
					{/* Horizontal Lines */}
					<div className="absolute top-32 left-0 w-full md:border-t-2 border-dark-green"></div>
					<div className="absolute top-36 left-0 w-full md:border-t-2 border-light-green"></div>
					{/* Vertical Lines */}
					<div className="absolute right-16 top-0 h-screen md:border-r-2 border-dark-green"></div>
					<div className="absolute right-20 top-0 h-screen md:border-r-2 border-light-green"></div>

					<Header />
					<div className="flex flex-col bg-background">
						<div className="flex flex-col md:flex-row text-rose font-bebasneue text-6xl mt-16 justify-center gap-16 px-12 md:px-32 pb-20">
							<div className="h-96 md:basis-1/4 bg-center bg-cover bg-[url('/picture.jpg')] rounded-[50%] drop-shadow-2xl"></div>
							<div className="md:basis-3/4 flex flex-col justify-center">
								<h1>
									Let me
									introduce
									myself
								</h1>
								<p className="font-arapey text-brown text-lg mt-2">
									My name
									is
									Courtney,
									I am
									originally
									from
									Colorado,
									and
									currently
									live in
									the US
									territory
									of St.
									Croix. I
									have a
									background
									in
									accounting,
									product
									management,
									and I am
									currently
									working
									as a
									software
									developer.
									I have a
									passion
									for
									learning
									and
									problem
									solving,
									and I am
									always
									looking
									for ways
									to
									improve
									my
									skills
									and
									knowledge.
									My
									career
									path has
									allowed
									me to
									work in
									a wide
									range of
									positions.
									These
									opportunities
									have
									provided
									me with
									hands on
									experience
									with
									challenges
									and
									needs of
									different
									verticals
									within
									an
									organization.
									I enjoy
									bringing
									this
									experience
									with me
									as a
									build
									software
									that
									makes
									process
									more
									efficient.
								</p>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
