import React from "react";
import Header from "./components/header";

export default function Home() {
	return (
		<>
			<div className="h-screen w-full mx-auto bg-background">
				<Header />
				<div className="flex flex-col">
					<div className="flex flex-row text-brown font-cinzel text-5xl mt-16 justify-center gap-16 px-12 sm:px-32">
						<div className="h-96 basis-1/4 bg-light-green rounded-xl drop-shadow-2xl"></div>
						<div className="basis-3/4 flex flex-col justify-center">
							<h1>Headline</h1>
							<p className="font-arapey text-lg">
								Lorem ipsum
								dolor sit amet,
								consectetur
								adipiscing elit,
								sed do eiusmod
								tempor
								incididunt ut
								labore et dolore
								magna aliqua. Ut
								enim ad minim
								veniam, quis
								nostrud
								exercitation
								ullamco laboris
								nisi ut aliquip
								ex ea commodo
								consequat. Duis
								aute irure dolor
								in reprehenderit
								in voluptate
								velit esse
								cillum dolore eu
								fugiat nulla
								pariatur.
								Excepteur sint
								occaecat
								cupidatat non
								proident, sunt
								in culpa qui
								officia deserunt
								mollit anim id
								est laborum.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
