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
							<h1>About me</h1>
							<p className="font-arapey text-lg">
								My career path
								has allowed me
								to work in a
								wide range of
								positions from
								accounting to
								product
								management, and
								now software
								development.
								These
								opportunities
								have provided me
								with hands on
								experience with
								challenges and
								needs of
								different
								verticals within
								an organization.
								I enjoy bringing
								this experience
								with me as a
								build software
								that makes
								process more
								efficient.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
