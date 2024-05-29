import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Head from "next/head";

export default function Resume() {
	return (
		<>
			<div className="h-screen w-full mx-auto bg-background">
				<Head>
					<title>Courtney Elsner | Resume</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<meta
						name="description"
						content="Full-stack developer resume"
					/>
					<link
						rel="canonical"
						href="https://courtney.elsner.dev/resume"
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
					<div className="flex flex-col justify-center text-brown text-center pb-8 px-12">
						<h1 className="font-bebasneue text-6xl mt-12 text-rose">
							Software Engineer
						</h1>
						<h2 className="font-arapey text-lg sm:text-xl sm:font-semibold">
							3 years Software
							Development
						</h2>
						<h2 className="font-arapey text-lg sm:text-xl sm:font-semibold">
							8+ years of experience
							in IT Management |
							Project Management |
							Accounting Controls &
							Auditing
						</h2>
					</div>
					<div className="flex flex-col sm:flex-row justify-items-center text-dark-green bg-background pb-20">
						<div className="flex flex-col mt-8 px-12 sm:px-32">
							<h2 className="font-bebasneue text-2xl border-b-2">
								Objective
							</h2>
							<p className="font-arapey mt-4">
								Technically-minded
								professional
								with diverse
								experience in
								full-stack web
								development,
								specializing in
								designing,
								implementing,
								and optimizing
								scalable
								software
								solutions.
								Exceptional
								talent for
								collaborating
								effectively with
								cross-functional
								teams to deliver
								high-quality
								software
								products.
								Skilled at
								database
								management,
								using SQL and
								NoSQL
								technologies.
								Adept at
								optimizing
								system
								performance,
								debugging
								issues, and
								ensuring
								scalability of
								applications.
								Dedicated to
								staying updated
								with emerging
								technologies and
								best practices
								in software
								engineering.{" "}
							</p>
							<h1 className="font-bebasneue text-2xl border-b-2 mt-8">
								Work Experience
							</h1>
							<h2 className="font-bebasneue text-lg mt-8">
								CONNECTIVE
								HORIZONS
							</h2>
							<div className="flex flex-col md:flex-row justify-between font-bebasneue text-lg">
								<h2>
									Software
									Developer
									| Owner
								</h2>
								<h2>
									2023 -
									Present
								</h2>
							</div>
							<p className="font-arapey mt-4">
								Consult with
								customers to
								assess needs and
								propose optimal
								solutions while
								managing
								day-to-day
								business
								operations to
								ensure smooth
								and efficient
								functioning{" "}
							</p>
							<div className="ml-8">
								<ul className="font-arapey mt-4 list-disc list-outside">
									<li>
										Designing
										and
										implementing
										a
										custom
										mobile
										application
										utilizing
										Flutter
										and
										Golang.
									</li>
									<li>
										Work
										one-on-one
										with
										clients
										to
										build,
										deploy
										and
										manage
										custom
										web
										pages.
									</li>

									<li>
										Perform
										comprehensive
										technical
										SEO
										audits
										for
										prospective
										clients,
										enhancing
										their
										online
										visibility
										and
										driving
										increased
										exposure
										in
										digital
										spaces.{" "}
									</li>
								</ul>
							</div>
							<h2 className="font-bebasneue text-lg mt-8">
								ENGRAIN
							</h2>
							<div className="flex flex-col md:flex-row justify-between font-bebasneue text-lg">
								<h2>
									Product
									Manager
									| Data
									Integrations
									Manager
								</h2>
								<h2>
									2019 -
									2022
								</h2>
							</div>
							<p className="font-arapey mt-4">
								Conducted
								research on
								third-party
								APIs, drafted
								specification
								documents, and
								collaborated
								with software
								developers to
								implement new
								integration
								features. Led
								project planning
								and execution by
								coordinating
								with team
								members and
								leads,
								prioritizing
								roadmap to
								attain product
								goals and
								metrics.
							</p>
							<div className="ml-8">
								<ul className="font-arapey mt-4 list-disc list-outside">
									<li>
										Designed
										and
										implemented
										efficient
										ETL
										processes
										for
										retrieving
										pricing
										and
										availability
										data
										from
										external
										APIs,
										integrating
										with
										Engrain
										SightMaps,
										using
										Kubernetes,
										Laravel,
										PHP,
										and
										scheduled
										cron
										jobs
										for
										seamless
										implementation.{" "}
									</li>
									<li>
										Developed
										PHP
										and
										Laravel
										software
										to
										retrieve
										and
										manage
										API
										data,
										aiding
										account
										managers
										and
										support
										teams
										with
										troubleshooting.{" "}
									</li>
									<li>
										Researched
										and
										identified
										third-party
										data
										for
										new
										features,
										including
										creation
										of
										a
										parking
										map.
										Developed
										initial
										custom
										integrations
										for
										parkables
										product,
										actively
										contributing
										to
										its
										V1.{" "}
									</li>
									<li>
										Collaborated
										one-on-one
										with
										clients
										to
										create
										custom
										maps
										for
										Power
										BI
										dashboards,
										addressing
										business
										challenges
										and
										automating
										data
										integration
										for
										overlay
										on
										the
										maps.
										Liaised
										with
										the
										software
										development
										team
										to
										implement
										client-specific
										feature
										requests{" "}
									</li>
								</ul>
							</div>
							<h2 className="font-bebasneue text-lg mt-8">
								UCOMM, LLC
							</h2>
							<div className="flex flex-col md:flex-row justify-between font-bebasneue text-lg">
								<h2>
									Senior
									IT
									Specialist
								</h2>
								<h2>
									2012 -
									2018
								</h2>
							</div>
							<p className="font-arapey mt-4">
								Sole internal IT
								staff member for
								a privately held
								multifamily
								housing company
								with 200 staff,
								27 properties
								and 3000 leased
								units. Report to
								Chief Operating
								Officer and
								Chief Accounting
								Officer.
							</p>
							<div className="ml-8">
								<ul className="font-arapey mt-4 list-disc list-outside">
									<li>
										Oversaw
										outsourced
										technology
										solution
										providers
										including
										PC
										hardware,
										SaaS,
										VoIP
										telecommunications,
										satellite
										internet
										service,
										network
										management,
										and
										ISPs
										for
										27
										locations
										nationwide.
									</li>
									<li>
										Served
										as
										Network
										Administrator,
										assuring
										security
										and
										uptime
										of
										65
										LANs,
										200
										workstations,
										and
										numerous
										peripheral
										devices.
									</li>
									<li>
										Anticipated,
										tested,
										and
										addressed
										security
										concerns
										to
										protect
										and
										maintain
										network
										integrity.
										Created
										policies/set
										guidelines
										for
										vendor
										network
										access,
										evaluated
										network
										peripherals
										for
										known
										security
										vulnerabilities,
										and
										defined
										geographic
										location
										of
										network
										equipment.
									</li>
									<li>
										Directed
										system
										migrations,
										including
										Yardi
										to
										RealPage
										Leasing
										and
										Rents
										at
										18
										locations,
										and
										email
										servers
										from
										on-premises
										Microsoft
										Exchange
										Server
										to
										Microsoft
										Office
										365.
									</li>
									<li>
										Initiated
										and
										tracked{" "}
										{
											">"
										}
										$2M
										in
										wire
										payments
										monthly.
										Supported
										treasury
										operations
										as
										needed.
									</li>
									<li>
										Created
										IT
										expense
										projection
										and
										track
										performance
										to
										budget.
									</li>
									<li>
										Led
										planning
										and
										implementation
										of
										seamless
										technology
										and
										accounting
										integrations
										for
										13
										property
										acquisitions,
										assuring
										positive
										tenant
										relations
										and
										operational
										continuity
										during
										transition
										phase.
									</li>
									<li>
										Developed
										procedures
										to
										complement
										migration
										to
										a
										new
										accounting
										system.
									</li>
								</ul>
							</div>
							<h2 className="font-bebasneue text-lg mt-8">
								GRAEBEL
								COMPANIES, INC.
							</h2>
							<div className="flex flex-col md:flex-row justify-between font-bebasneue text-lg">
								<h2>
									Accounting
									Specialist
									|
									Internal
									Auditor
								</h2>
								<h2>
									2008 -
									2011
								</h2>
							</div>
							<p className="font-arapey mt-4">
								Supported a team
								of 75
								consultants in
								serving a
								portfolio of up
								to 800 clients
								in expat work
								assignments
								worldwide,
								processing a
								large volume of
								electronic
								banking / ACH
								transfers, {">"}
								$2M per day in
								housing and
								moving expenses.
							</p>
							<div className="ml-8">
								<ul className="font-arapey mt-4 list-disc list-outside">
									<li>
										Initiated
										a
										program
										to
										schedule
										and
										consolidate
										vendor
										payments,
										significantly
										improving
										cash
										flow
										and
										reducing
										wire
										fees
										by
										$25K
										annually.
									</li>
									<li>
										Identified
										need
										to
										tighten
										communication
										processes
										between
										International
										Relocation
										Services,
										Operations,
										and
										Finance
										teams.
										Developed
										a
										SharePoint
										site
										to
										serve
										as
										an
										ad
										hoc
										trouble
										ticketing
										system,
										creating
										a
										centralized
										point
										of
										communication,
										eliminating
										email
										chains
										with
										a
										live
										discussion
										option.
									</li>
									<li>
										Conducted
										live
										and
										WebEx
										training
										for{" "}
										{
											">"
										}
										100
										Operations
										and
										Finance
										staff
										in
										Denver,
										Atlanta,
										Singapore,
										and
										Prague
										on
										effective
										domestic
										and
										international
										EFT
										transactions.
									</li>
									<li>
										Supported
										complex
										internal
										audit
										processes
										for
										international
										real
										estate
										holdings.
									</li>
								</ul>
							</div>
						</div>

						<div className="flex flex-col mt-8 px-12 sm:px-32">
							<div>
								<h1 className="font-bebasneue text-2xl border-b-2">
									Education
								</h1>
								<div className="flex flex-col mt-8">
									<h2 className="font-bebasneue text-lg">
										BS
										in
										Computer
										Science
										-
										2023
									</h2>
									<p className="font-arapey">
										Magna
										Cum
										Laude
									</p>
									<p className="font-arapey mt-4">
										Colorado
										State
										University
										Global
										Campus
										-
										Aurora,
										CO
									</p>
								</div>
								<div className="flex flex-col mt-8 gap-4">
									<h2 className="font-bebasneue text-lg">
										BA
										in
										International
										Studies
										&
										Political
										Science
										-
										2007
									</h2>
									<p className="font-arapey mt-4">
										Allegheny
										College
										-
										Meadville,
										PA
									</p>
								</div>
							</div>
							<h1 className="font-bebasneue text-2xl border-b-2 mt-12">
								Skills
							</h1>
							<div className="flex flex-row mt-8 gap-4">
								<h2 className="font-bebasneue text-lg">
									Javascript
								</h2>
								<div className="h-4 w-48 bg-gray rounded-full">
									<div className="h-4 w-32 bg-light-green rounded-full"></div>
								</div>
							</div>
							<div className="flex flex-row mt-8 gap-4">
								<h2 className="font-bebasneue text-lg">
									Docker
								</h2>
								<div className="h-4 w-48 bg-gray rounded-full">
									<div className="h-4 w-20 bg-rose rounded-full"></div>
								</div>
							</div>
							<div className="flex flex-row mt-8 gap-4">
								<h2 className="font-bebasneue text-lg">
									PHP
								</h2>
								<div className="h-4 w-48 bg-gray rounded-full">
									<div className="h-4 w-40 bg-dark-green rounded-full"></div>
								</div>
							</div>
							<div className="flex flex-row mt-8 gap-4">
								<h2 className="font-bebasneue text-lg">
									Git
								</h2>
								<div className="h-4 w-48 bg-gray rounded-full">
									<div className="h-4 w-40 bg-rose rounded-full"></div>
								</div>
							</div>
							<div className="flex flex-row mt-8 gap-4">
								<h2 className="font-bebasneue text-lg">
									Java
								</h2>
								<div className="h-4 w-48 bg-gray rounded-full">
									<div className="h-4 w-40 bg-light-green rounded-full"></div>
								</div>
							</div>
							<div className="flex flex-row mt-8 gap-4">
								<h2 className="font-bebasneue text-lg">
									Python
								</h2>
								<div className="h-4 w-48 bg-gray rounded-full">
									<div className="h-4 w-20 bg-rose rounded-full"></div>
								</div>
							</div>

							<div className="flex flex-row mt-8 gap-4">
								<h2 className="font-bebasneue text-lg">
									Jira
								</h2>
								<div className="h-4 w-48 bg-gray rounded-full">
									<div className="h-4 w-40 bg-dark-green rounded-full"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
