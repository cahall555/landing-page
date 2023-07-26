import React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<div>
			<div className="flex flex-col sm:flex-row px-12 sm:px-32 pt-16 gap-4 justify-between text-brown">
				<h1 className="font-cinzel text-3xl sm:text-5xl">
					<Link href="/"> Courtney Elsner</Link>
				</h1>
				<div className="flex flex-row gap-8 sm:gap-11 px-12 text-sm sm:text-xl">
					<h2 className="font-bebasneue border-t-2 border-dark-green pt-4">
						<Link href="/projects">
							{" "}
							Projects
						</Link>
					</h2>
					<h2 className="font-bebasneue border-t-2 border-dark-green pt-4">
						<Link href="/resume">
							{" "}
							Resume
						</Link>
					</h2>
					<h2 className="hidden font-bebasneue border-t-2 border-dark-green pt-4">
						Contact Me
					</h2>
				</div>
			</div>
		</div>
	);
};
export default Header;
