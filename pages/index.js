import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import Link from "next/link";
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
		jobTitle: "Software Engineer",
		telephone: "",
		url: "https://courtney.elsner.dev",
		sameAs: [
			"https://www.github.com/cahall555",
			"https://www.linkedin.com/in/courtneyelsner",
		],
	};

	const [zoomedImage, setZoomedImage] = useState({
		url: null,
		index: null,
	});

	const openZoomedImage = (imageUrl, index) => {
		setZoomedImage({ url: imageUrl, index });
	};

	const closeZoomedImage = () => {
		setZoomedImage({ url: null, index: null });
	};

	const images = [
		{
			id: 1,
			imageUrl: "/blog/garden_db.png",
			alt: "Garden Database",
		},
		{
			id: 2,
			imageUrl: "/blog/waterscheduleform.png",
			alt: "Water Schedule Form",
		},
		{
			id: 3,
			imageUrl: "/blog/gardenlist.png",
			alt: "List of Gardens",
		},
	];
	return (
		<>
			<div className="h-screen w-full mx-auto bg-background">
				<Head>
					<title>
						Courtney Elsner | Software
						Engineer
					</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<meta
						name="description"
						content="Hey! My name is Courtney, I am a full-stack software engineer living in the US territory of St. Croix. I have experience in accounting, product management, and software development. I enjoy building software that makes processes more efficient."
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
					<div className="absolute right-16 top-0 h-full md:border-r-2 border-dark-green"></div>
					<div className="absolute right-20 top-0 h-full md:border-r-2 border-light-green"></div>

					<Header />
					<div className="flex flex-col bg-background">
						<div className="flex flex-col md:flex-row font-bebasneue text-6xl mt-16 justify-center gap-16 px-12 md:px-32 pb-20">
							<div className="flex flex-col justify-center">
								<h1 class="text-center text-light-green">
									Software
									Engineer
								</h1>
								<p className="font-cinzel text-center text-brown text-2xl mt-2">
									Full-Stack
									| App
									Development
									| Web
									Development
								</p>
								<h1 class="text-center text-rose">
									Current
									Passion
									Project
								</h1>
								<p className="font-arapey text-left text-brown text-lg mt-2">
									I am
									currently
									working
									on a
									project
									that is
									designed
									to help
									people
									manage
									their
									farm or
									garden.
									This
									project
									excites
									me
									because
									creating
									a tool
									that
									will
									help
									people
									grow
									their
									own food
									on a
									large or
									small
									scale
									has so
									many
									benefits.
									Growing
									food
									creates
									a deeper
									connection
									with
									food and
									where it
									comes
									from, it
									can lead
									to a
									healthier
									lifestyle
									and
									eating
									habits,
									reduce
									the
									carbon
									footprint,
									save
									money,
									and in
									some
									cases,
									help
									those
									facing
									food
									shortages
									gain
									access
									to food.
									I am
									currently
									working
									on my
									first
									verison
									of this
									project
									which is
									to
									publish
									a
									working
									garden
									journal
									to the
									Android
									and Ios
									app
									stores.
									From
									there I
									want to
									make
									this a
									data
									first
									application
									that
									allows
									people
									make
									data
									driven
									decisions
									about
									their
									garden.
								</p>
								<div className="flex flex-col md:flex-row gap-4 sm:gap-8 items-center justify-center mb-4">
									{images.map(
										(
											item,
											index
										) => (
											<div
												key={
													item.id
												}
												onClick={() =>
													openZoomedImage(
														item.imageUrl,
														index
													)
												}
											>
												<Image
													className="z-0"
													loading="eager"
													src={
														item.imageUrl
													}
													alt={
														item.alt
													}
													width={
														index ===
														0
															? 400
															: 200
													}
													height={
														index ===
														0
															? 400
															: 200
													}
												/>
											</div>
										)
									)}
									{zoomedImage &&
										zoomedImage.url && (
											<div
												className="zoomed-image-container"
												onClick={
													closeZoomedImage
												}
											>
												{console.log(
													"Zoomed Image Index:",
													zoomedImage.index
												)}
												<Image
													className="z-0"
													loading="eager"
													src={
														zoomedImage.url
													}
													alt="Zoomed Image"
													width={
														zoomedImage.index ===
														0
															? 800
															: 400
													}
													height={
														zoomedImage.index ===
														0
															? 800
															: 400
													}
												/>
											</div>
										)}
								</div>

								<div className="flex flex-col items-center justify-center my-4">
									<Link
										className="no-underline"
										href="/projects"
									>
										<button className="flex flex-col bg-transparent text-brown font-cinzel text-center w-56 text-2xl py-2 px-4 border-2 border-dark-green hover:bg-dark-green hover:text-background">
											More
											Projects
										</button>
									</Link>
								</div>

								<h1 className="text-center text-dark-green">
									I&apos;m
									interested
									in
									working
									with you
								</h1>
								<p className="font-arapey text-brown text-lg mt-2">
									I find a
									great
									deal of
									satisfaction
									in
									learning,
									problem
									solving,
									and
									exporing
									new
									ideas.
									If you
									have an
									idea,
									are
									stuck on
									a
									problem,
									or need
									help
									with an
									ongoing
									project
									let me
									know. I
									would
									welcome
									the
									opptotuity
									to bring
									this
									enthusiasm
									to your
									project.
									I am
									open to
									working
									freelance
									or w-2.
									The
									easiest
									way to
									reach me
									is via
									LinkedIn.
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
