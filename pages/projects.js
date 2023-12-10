import React from "react";
import Header from "./components/header";

export default function Projects() {
	return (
		<>
			<div className="h-screen w-full mx-auto bg-background">
				<Header />
				<div className="flex flex-col items-center w-full px-12 sm:px-32 pt-16 bg-background">
					<h1 className="font-bebasneue text-2xl">
						AI Documentation Chatbot
					</h1>
					<h3 className="font-arapey text-center text-lg">
						OpenAI API | LangChain |
						Pinecone | Astro | Docker
					</h3>

					<div className="flex flex-col sm:flex-row gap-11 mt-2">
						<div className="flex flex-row gap-2">
							<h3 className="font-bebasneue text-xl">
								GitHub:
							</h3>
							<p className="font-bebasneue text-brown text-xl">
								<a
									href="https://github.com/cahall555/documentation-cipher"
									target="_blank"
								>
									https://github.com/cahall555/documentation-cipher
								</a>
							</p>
						</div>
					</div>
					<p className="font-arapey mt-8 text-left">
						This tool is designed to allow
						employees to query company
						documentation as they would a
						co-worker. The intent is to
						improve compliance of reviewing
						and updating company
						documentation, creating
						consistency and standardization
						across an organization.
					</p>
				</div>

				<div className="flex flex-col items-center w-full px-12 sm:px-32 pt-16 bg-background">
					<h1 className="font-bebasneue text-2xl">
						Blog
					</h1>
					<h3 className="font-arapey text-center text-lg">
						Metalsmith | Tailwind CSS |
						Amazon S3 | Firebase
					</h3>

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
						This blog was created to
						document ongoing experiences
						living in the U.S. Virgin
						Islands.
					</p>
				</div>
				<div className="flex flex-col items-center w-full px-12 sm:px-32 pt-16 bg-background">
					<h1 className="font-bebasneue text-2xl">
						Document Manager
					</h1>
					<h3 className="font-arapey text-center text-lg">
						Next JS | Tailwind CSS | Amplify
					</h3>

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
						Current work in progress
						inspired by nonprofits needing
						to collect and track a variety
						of documents from different
						people. Information collected
						can be confidential and time
						sensitive.
					</p>
				</div>
				<div className="flex flex-col items-center w-full px-12 sm:px-32 pt-16 bg-background">
					<h1 className="font-bebasneue text-2xl">
						Company Website
					</h1>
					<h3 className="font-arapey text-center text-lg">
						Next JS | Tailwind CSS | Amplify
					</h3>

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
					<p className="font-arapey mt-8 text-left pb-8">
						This is an active company
						website that caters to small
						businesses in the Caribbean.
					</p>
				</div>
			</div>
		</>
	);
}
