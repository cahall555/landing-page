import React from "react";
import Header from "./components/header";

export default function Projects() {
	return (
		<>
			<div className="flex flex-col h-screen w-full mx-auto bg-background">
				<Header />
				<div className="flex flex-col items-center h-screen w-full px-32 pt-16">
					<h1 className="font-bebasneue text-2xl">
						Document Manager
					</h1>
					<div className="flex flex-row gap-11 mt-2">
						<div className="flex flex-row gap-2">
							<h3 className="font-bebasneue text-xl">
								GitHub:
							</h3>
							<p className="font-bebasneue text-brown text-xl">
								<a
									href="https://github.com/cahall555/document-management"
									target="_blank"
								>
									https://github.com/cahall555/document-management
								</a>
							</p>
						</div>
						<div className="flex flex-row gap-2">
							<h3 className="font-bebasneue text-xl">
								Website:
							</h3>
							<p className="font-bebasneue text-brown text-xl">
								<a
									href="https://google.com"
									target="_blank"
								>
									https://google.com
								</a>
							</p>
						</div>
					</div>
					<p className="font-arapey mt-8">
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis
						nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute
						irure dolor in reprehenderit in
						voluptate velit esse cillum
						dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat
						cupidatat non proident, sunt in
						culpa qui officia deserunt
						mollit anim id est laborum.
					</p>
				</div>
			</div>
		</>
	);
}
