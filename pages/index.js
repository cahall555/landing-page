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
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a> 
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a> 
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
           </footer>
    
    </>
  )
}
