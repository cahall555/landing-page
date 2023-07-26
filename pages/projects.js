import React from "react";
import Header from "./components/header";

export default function Projects() {
	return (
		<>
			<div className="h-screen w-full mx-auto bg-background">
				<Header />
				<div className="flex flex-col items-center w-full px-12 sm:px-32 pt-16 bg-background">
					<h1 className="font-bebasneue text-2xl">
						Blog
					</h1>
					<div className="flex flex-col sm:flex-row gap-11 mt-2">
						<div className="flex flex-row gap-2">
							<h3 className="font-bebasneue text-xl">
								Website:
							</h3>
							<p className="font-bebasneue text-brown text-xl">
								<a
									href="https://robandcourtney.com"
									target="_blank"
								>
									USVI
									Homestead
								</a>
							</p>
						</div>
					</div>
					<p className="font-arapey mt-8 text-left">
						This is a personal blog built in
						Metalsmith using Tailwind CSS.
						It is a static site that uses
						markdown files to create the
						pages. The site is hosted on in
						an S3 bucket, and the contact us
						form uses firebase. This is an
						ongoing work in progress and
						updated monthly with personal
						experiences.
					</p>
				</div>
				<div className="flex flex-col items-center w-full px-12 sm:px-32 pt-16 bg-background">
					<h1 className="font-bebasneue text-2xl">
						Document Manager
					</h1>
					<div className="flex flex-col sm:flex-row gap-11 mt-2">
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
									href="#"
									target="_blank"
								>
									TBD
								</a>
							</p>
						</div>
					</div>
					<p className="font-arapey mt-8 text-left">
						This application is built using
						next js and tailwind css. It is
						a document management system
						that allows users to upload
						documents and view them in a
						list. The documents are stored
						using amplify. The application
						is still in development and will
						be updated as I add more
						features.
					</p>
				</div>
				<div className="flex flex-col items-center w-full px-12 sm:px-32 pt-16 bg-background">
					<h1 className="font-bebasneue text-2xl">
						Company Website
					</h1>
					<div className="flex flex-col sm:flex-row gap-11 mt-2">
						<div className="flex flex-row gap-2">
							<h3 className="font-bebasneue text-xl">
								Website:
							</h3>
							<p className="font-bebasneue text-brown text-xl">
								<a
									href="https://connectivehorizons.com"
									target="_blank"
								>
									Connective
									Horizons
								</a>
							</p>
						</div>
					</div>
					<p className="font-arapey mt-8 text-left">
						This is a company website built
						using NextJS, Tailwind CSS, and
						Amplify. It is a static site
						that uses markdown files to
						create the pages. The site is
						hosted on in an S3 bucket. This
						is an active company website
						that caters to small businesses
						in the Carribean.
					</p>
				</div>
			</div>
		</>
	);
}
