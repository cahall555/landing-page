import React from "react";
import {LinkedinIcon, GithubIcon} from "next-share";

const Footer = () => {
	return (
		<div className="flex flex-col sm:flex-row justify-end pr-20 bg-gradient-to-r from-light-green to-dark-green fixed bottom-0 w-full drop-shadow-xl">
			<div className="flex flex-row gap-2 m-2 sm:m-4">
				<a
					href="https://www.github.com/cahall555"
					target="_blank"
					rel="noopener"
					aria-label="Courtney Elsner on Github"
					alt="Courtney Elsner on Github"
				>
					<GithubIcon size={40} round={true} iconFillColor={'background'} bgStyle={{fill: '#545E56'}}/>
				</a>
				<a
					href="https://www.linkedin.com/in/courtneyelsner"
					target="_blank"
					rel="noopener"
					aria-label="Courtney Elsner on Linkedin"
					alt="Courtney Elsner on Linkedin"
				>
					<LinkedinIcon size={40} round={true} iconFillColor={'background'} bgStyle={{fill: '#545E56'}}/>
				</a>
			</div>
		</div>
	);
};
export default Footer;
