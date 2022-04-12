import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import React from 'react'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <>
       <Head>
        <title>Portfolio</title>
        <meta name="Portfolio" content="Full-stack developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <div className="grid-rows-4" data-theme="cupcake">

        <div className="hero min-h-screen" styles="background-image: url();">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello</h1>
            <p className="mb-5">I am working on my BS in Computer Science. </p>
            <button className="btn btn-primary">See Projects</button>
          </div>
        </div>
      </div>

      <div className="divider"></div> 
        <div className="grid h-200 card bg-base-300 rounded-box place-items-center p-8">
          <div className="grid grid-cols-3 gap-4">
            <h2 className="col-span-1 text-slate-500" >- Work Experience</h2>
            <h3 className="font-bold">Product Manager | Data Integration Manager</h3>
            <h5 className="col-end-4 col-span-2">Engrain / January 2019 - Present</h5>
            <p className="col-end-4 col-span-2">Product Manager for SaaS based company. Report to Chief 
            Executive Officer and Chief Technology Officer.</p>
            <h2 className="col-span-3 text-slate-500" ></h2>
            <h3 className="col-end-4 col-span-2 font-bold">Senior IT Specialist | IT Project Coordinator</h3>
            <h5 className="col-end-4 col-span-2">UCOMM LLC / January 2012 - December 2018</h5>
            <p className="col-end-4 col-span-2">Internal IT staff member for a privately held multifamily housing company 
            with 200 staff, 27 properties and 3000  leased units. Report to Chief Operating Officer and Chief 
            Accounting Officer. </p>
            <h2 className="col-span-3 text-slate-500" ></h2>
            <h2 className="col-span-1 text-slate-500" >- Education</h2>
            <h3 className="font-bold">Colorado State University Global</h3>
            <h5 className="col-end-4 col-span-2">2021 - Present</h5>
            <p className="col-end-4 col-span-2">BS in Computer Science</p>
            <h2 className="col-span-3 text-slate-500" ></h2>
            <h3 className="col-end-4 col-span-2 font-bold">Allegheny College</h3>
            <h5 className="col-end-4 col-span-2">2003 - 2007</h5>
            <p className="col-end-4 col-span-2">BA in International Studies and Political Science</p>
            <h2 className="col-span-3 text-slate-500" ></h2>
            <h2 className="col-span-1 text-slate-500" >- Skills</h2>
            <p>JavaScript</p>
            <progress className="progress progress-primary w-56" value="40" max="100"></progress>
            <h2 className="col-span-1 text-slate-500" ></h2>
            <p>PHP</p>
            <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
            <h2 className="col-span-1 text-slate-500" ></h2>
            <p>React</p>
            <progress className="progress progress-accent w-56" value="40" max="100"></progress>
            <h2 className="col-span-1 text-slate-500" ></h2>
            <p>Docker</p>
            <progress className="progress progress-primary w-56" value="40" max="100"></progress>
            <h2 className="col-span-1 text-slate-500" ></h2>
            <p>Git</p>
            <progress className="progress progress-secondary w-56" value="80" max="100"></progress>
            <h2 className="col-span-1 text-slate-500" ></h2>
            <p>Laravel</p>
            <progress className="progress progress-accent w-56" value="50" max="100"></progress>
            
            </div>
          </div>
      </div>

        <footer className="items-center p-4 footer bg-neutral text-neutral-content">
              <div className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
                  <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg> 
                <p>Copyright © 2021 - All right reserved</p>
              </div> 
              <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://github.com/cahall555">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a> 
                <a href="https://www.linkedin.com/in/courtneyannhall/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a> 
                <a href="https://codepen.io/cahall555">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/>
                  </svg>
                </a>
              </div>
           </footer>
    
    </>
  )
}
