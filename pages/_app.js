import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

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
			<Head>
				<title>Portfolio</title>
				<meta
					viewport="width=device-width, initial-scale=1.0"
					name="Portfolio"
					content="Full-stack developer portfolio"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=G-HKM15K0JWR`}
			/>

			<Script id="" strategy="lazyOnload">
				{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HKM15K0JWR', {
              page_path: window.location.pathname,
              });
          `}
			</Script>

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
