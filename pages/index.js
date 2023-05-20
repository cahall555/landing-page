import Head from "next/head";
import React from "react";

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio</title>
				<meta
					name="Portfolio"
					content="Full-stack developer portfolio"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-row h-screen w-full mx-auto bg-background px-32 pt-16 justify-between text-brown">
				<h1 className="font-cinzel text-4xl">Courtney Elsner</h1>
				<div className="flex flex-row gap-11 text-xl">
					<h2 className="font-cinzel border-t-2 border-dark-green pt-4">
						Projects
					</h2>
					<h2 className="font-cinzel border-t-2 border-dark-green pt-4">Resume</h2>
					<h2 className="font-bebasneue border-t-2 border-dark-green pt-4">
						Contact Me
					</h2>
				</div>
			</div>
		</>
	);
}
