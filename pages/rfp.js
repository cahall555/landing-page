import 'tailwindcss/tailwind.css'
import { useState } from 'react';
import React from 'react';
import Link from 'next/link'
import AuditService from './api/components/AuditService';
import FormService from './api/components/FormService';

export default function Rfp() {
    const [formType, setFormType] = useState(undefined);

    function handleChange(event) {
        setFormType(event.target.value);
    };

   function serviceType() {
        if (formType == "audit") {
            return <AuditService />
        } else if (formType =="form") {
            return <FormService />
        } else {
            return <></>
        }
    };

  
    return (
        <div className = "text-center sm:text-left" data-theme="cupcake">
        <div className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
                <Link href="/">
                    <li><a>Portfolio</a></li>
                </Link>
                    <li><a>About</a></li>
                </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">Request for Proposal</a>
            </div>
            <div className="invisible navbar-end">
                <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
                </button>
            </div>
            </div>

        <form>
            <div className="flex flex-col w-full p-8">
                <div className="grid h-20 card bg-primary text-primary-content rounded-box place-items-center">Contact Information</div> 
                <div className="flex justify-center justify-around flex-wrap">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" placeholder="First Name" className="input input-bordered input-primary w-full max-w-xs"/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" placeholder="Last Name" className="input input-bordered input-primary w-full max-w-xs"/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input type="email" placeholder="Email Address" className="input input-bordered input-primary w-full max-w-xs"/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="phone" placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs"/>
                    </div>
                </div>
                <div className="divider"></div> 
                <div className="grid h-20 card bg-primary text-primary-content rounded-box place-items-center">Project Information</div>
                
                <div className = "flex justify-center py-8 flex-wrap">
                    <select id="serviceType" className="select select-primary w-full max-w-xs" onChange={handleChange}>
                    <option disabled selected>Select service</option>
                        <option value="audit">Audit and Data Clean-up</option>
                        <option value="form">Create a Form</option>
                    </select>
                </div>
                {serviceType()}
                <div className = "pb-8"></div>
                <button className="btn">Submit</button>
            </div>
        </form>
    </div>
    )
}