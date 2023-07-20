import React from "react";
import Header from "./components/header";

export default function Resume() {
	return (
		<>
			<div className="h-screen w-full mx-auto bg-background">
				<Header />
				<div className="flex flex-col sm:flex-row justify-items-center bg-background">
					<div className="flex flex-col mt-16 px-12 sm:px-32">
						<h2 className="font-bebasneue text-2xl border-b-2">
							Objective
						</h2>
						<p className="font-arapey mt-4">
							Detail-oriented,
							organized and meticulous
							employee. Works at fast
							pace to meet tight
							deadlines. Enthusiastic
							team player ready to
							contribute to company
							success.
						</p>
						<h1 className="font-bebasneue text-2xl border-b-2 mt-8">
							Work Experience
						</h1>
						<h3 className="font-bebasneue text-lg mt-8">
							Developer/Owner: June
							2022 - Present
						</h3>
						<p className="font-arapey mt-4">
							Saas based company
							working to help small
							businesses in the
							Carribean expand their
							online presence.
						</p>
						<ul className="font-arapey mt-4 list-disc indent-8">
							<li>
								Consulted with
								customers to
								assess needs and
								propose optimal
								solutions.
							</li>
							<li>
								Enhanced
								operational
								efficiency and
								productivity by
								managing
								budgets,
								accounts, and
								costs.
							</li>
							<li>
								Managed
								day-to-day
								business
								operations.
							</li>
						</ul>

						<h3 className="font-bebasneue text-lg mt-8">
							Product Manager | Data
							Integrations Manager:
							January 2019 - June 2022
						</h3>
						<p className="font-arapey mt-4">
							Product Manager for SaaS
							based company. Report to
							Chief Executive Officer
							and Chief Technology
							Officer.
						</p>
						<ul className="font-arapey mt-4 list-disc indent-8">
							<li>
								Coordinated
								project planning
								and execution
								with team
								members and team
								leads.
							</li>
							<li>
								Reviewed sales,
								customer
								concerns, and
								new
								opportunities to
								drive business
								strategy at
								weekly planning
								sessions.
							</li>
							<li>
								Prioritized
								roadmap in order
								to achieve
								product goals
								and metrics.
							</li>
							<li>
								Collaborated
								with sales,
								marketing, and
								support teams to
								launch products
								on time and
								within budget.
							</li>
						</ul>

						<h3 className="font-bebasneue text-lg mt-8">
							Senior IT Specialist:
							January 2012 - December
							2018
						</h3>
						<p className="font-arapey mt-4">
							Internal IT staff member
							for a privately held
							multifamily housing
							company with 200 staff,
							27 properties and 3000
							leased units. Report to
							Chief Operating Officer
							and Chief Accounting
							Officer.
						</p>
						<ul className="font-arapey mt-4 list-disc indent-8">
							<li>
								Organized system
								operating
								procedures to
								strengthen
								controls.
							</li>
							<li>
								Improved systems
								with addition of
								new features and
								infrastructure.
							</li>
							<li>
								Participated in
								internal audits
								regarding
								quality
								management
								system.
							</li>
							<li>
								Educated
								stakeholders on
								data protection
								tactics to
								reduce breaches.
							</li>
						</ul>
					</div>
					<div className="flex flex-col mt-16 px-12 sm:px-32">
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
									Colorado
									State
									University
									Global
									Campus -
									Aurora,
									CO
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
									Allegheny
									College
									-
									Meadville,
									PA
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
