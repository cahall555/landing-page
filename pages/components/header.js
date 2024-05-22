import React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<div>
			<div className="flex flex-col sm:flex-row px-16 sm:px-32 pt-16 gap-4 z-0 justify-center sm:justify-between text-brown">
				<h1 className="font-cinzel pl-4 sm:pl-0 text-2xl sm:text-5xl">
					<Link className="no-underline" href="/"> Courtney Elsner</Link>
				</h1>
				<div className="flex flex-row gap-8 sm:gap-11 px-8 sm:px-12 text-sm sm:text-xl">
					<h2 className="font-bebasneue border-t-2 border-dark-green pt-4">
						<Link className="no-underline" href="/projects">
							{" "}
							Projects
						</Link>
					</h2>
					<h2 className="font-bebasneue border-t-2 border-dark-green pt-4">
						<Link className="no-underline" href="/resume">
							{" "}
							Resume
						</Link>
					</h2>
					<h2 className="font-bebasneue border-t-2 border-dark-green pt-4">
						<Link className="no-underline" href="/blog">Logic Layer</Link>
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
