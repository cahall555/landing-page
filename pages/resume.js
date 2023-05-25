import React from "react";
import Header from "./components/header";

export default function Resume() {
	return (
		<>
			<div className="flex flex-col h-screen w-full mx-auto bg-background">
				<Header />
				<div className="flex flex-row justify-items-center">
					<div className="flex flex-col mt-16 px-32">
						<h1 className="font-bebasneue text-2xl border-b-2">
							Work Experience
						</h1>
						<h3 className="font-bebasneue text-lg mt-8">
							Developer/Owner: June
							2022 - Present
						</h3>
						<p className="font-arapey mt-4">
							Lorem ipsum dolor sit
							amet, consectetur
							adipiscing elit, sed do
							eiusmod tempor
							incididunt ut labore et
							dolore magna aliqua.
							Erat pellentesque
							adipiscing commodo elit
							at imperdiet dui
							accumsan sit. Est sit
							amet facilisis magna
							etiam tempor. Lectus
							nulla at volutpat diam
							ut venenatis. Orci ac
							auctor augue mauris
							augue. Integer quis
							auctor elit sed.
						</p>
						<h3 className="font-bebasneue text-lg mt-8">
							Product Manager | Data
							Integrations Manager:
							January 2019 - June 2022
						</h3>
						<p className="font-arapey mt-4">
							Lorem ipsum dolor sit
							amet, consectetur
							adipiscing elit, sed do
							eiusmod tempor
							incididunt ut labore et
							dolore magna aliqua.
							Erat pellentesque
							adipiscing commodo elit
							at imperdiet dui
							accumsan sit. Est sit
							amet facilisis magna
							etiam tempor. Lectus
							nulla at volutpat diam
							ut venenatis. Orci ac
							auctor augue mauris
							augue. Integer quis
							auctor elit sed.
						</p>
						<h3 className="font-bebasneue text-lg mt-8">
							Senior IT Specialist:
							January 2012 - December 2018
						</h3>
						<p className="font-arapey mt-4">
							Lorem ipsum dolor sit
							amet, consectetur
							adipiscing elit, sed do
							eiusmod tempor
							incididunt ut labore et
							dolore magna aliqua.
							Erat pellentesque
							adipiscing commodo elit
							at imperdiet dui
							accumsan sit. Est sit
							amet facilisis magna
							etiam tempor. Lectus
							nulla at volutpat diam
							ut venenatis. Orci ac
							auctor augue mauris
							augue. Integer quis
							auctor elit sed.
						</p>
					</div>
					<div className="flex flex-col mt-16 px-32">
						<h1 className="font-bebasneue text-2xl border-b-2">
							Skills
						</h1>
						<div className="flex flex-row mt-8 gap-4">
							<h3 className="font-bebasneue text-lg">
								Javascript
							</h3>
							<div className="h-4 w-48 bg-gray rounded-full">
								<div className="h-4 w-32 bg-light-green rounded-full"></div>
							</div>
						</div>
						<div className="flex flex-row mt-8 gap-4">
							<h3 className="font-bebasneue text-lg">
								Docker
							</h3>
							<div className="h-4 w-48 bg-gray rounded-full">
								<div className="h-4 w-20 bg-rose rounded-full"></div>
							</div>
						</div>
						<div className="flex flex-row mt-8 gap-4">
							<h3 className="font-bebasneue text-lg">
								PHP
							</h3>
							<div className="h-4 w-48 bg-gray rounded-full">
								<div className="h-4 w-40 bg-dark-green rounded-full"></div>
							</div>
						</div>
						<div className="flex flex-row mt-8 gap-4">
							<h3 className="font-bebasneue text-lg">
								Git
							</h3>
							<div className="h-4 w-48 bg-gray rounded-full">
								<div className="h-4 w-40 bg-rose rounded-full"></div>
							</div>
						</div>
						<div className="flex flex-row mt-8 gap-4">
							<h3 className="font-bebasneue text-lg">
								Java
							</h3>
							<div className="h-4 w-48 bg-gray rounded-full">
								<div className="h-4 w-40 bg-light-green rounded-full"></div>
							</div>
						</div>
						<div>
							<h1 className="font-bebasneue text-2xl border-b-2 mt-12">
								Education
							</h1>
							<div className="flex flex-col mt-8 gap-4">
								<h3 className="font-bebasneue text-lg">
									BS in
									Computer
									Science
								</h3>
								<p className="font-arapey mt-4">
									ipsum
									dolor
									sit
									amet,Lorem
									ipsum
									dolor
									sit
									amet,
									consectetur
									adipiscing
									elit,
									sed do
									eiusmod
									tempor
									incididunt
									ut
									labore
									et
									dolore
									magna
									aliqua.
								</p>
							</div>
							<div className="flex flex-col mt-8 gap-4">
								<h3 className="font-bebasneue text-lg">
									BA in
									International
									Studies
									&
									Political
									Science
								</h3>
								<p className="font-arapey mt-4">
									ipsum
									dolor
									sit
									amet,Lorem
									ipsum
									dolor
									sit
									amet,
									consectetur
									adipiscing
									elit,
									sed do
									eiusmod
									tempor
									incididunt
									ut
									labore
									et
									dolore
									magna
									aliqua.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
