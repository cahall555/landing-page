import "../styles/globals.css";
import { Cinzel, Arapey, Bebas_Neue } from "next/font/google";

const cinzel = Cinzel({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-cinzel",
});

const arapey = Arapey({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-arapey",
});

const bebasneue = Bebas_Neue({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-bebasneue",
});

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<div className={`${cinzel.variable} font-cinzel`}>
				<div
					className={`${arapey.variable} font-arapey`}
				>
					<div
						className={`${bebasneue.variable} font-bebasneue`}
					>
						<Component {...pageProps} />
					</div>
				</div>
			</div>
		</>
	);
}
