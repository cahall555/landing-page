import 'tailwindcss/tailwind.css'
import React from 'react'
import { useState } from 'react';


  export default function AuditService() {

    const [otherOption, setOtherOption] = useState(undefined);

    function handleChange(event) {
        setOtherOption(event.target.value);
    };

   function selectOther() {
        if (otherOption == "other") {
            return <MoreInformation />
        } else {
            return <></>
        }
    };

    function MoreInformation() {
        return (
            <div className="form-control w-full max-w-md">
            <label className="label">
                <span className="label-text">Please describe</span>
            </label>
            <input type="text" placeholder="Other" className="input input-bordered input-primary w-full max-w-md"/>
        </div>
        );
    }

    return (
        <>
            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company name if applicable</span>
                    </label>
                    <input type="text" placeholder="Company Name" className="input input-bordered input-primary w-full max-w-md"/>
                </div>

                <label className="label">
                    <span className="label-text text-left">Will audited data need to be corrected?</span>
                </label>
                <select className="select select-primary w-full max-w-md">
                    <option disabled selected>Select</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </select>

            <label className="label">
                    <span className="label-text text-left">What file format will your data be in?</span>
                </label>
                <select className="select select-primary w-full max-w-md" onChange={handleChange} >
                    <option disabled selected>Select</option>
                    <option value="xml">XML</option>
                    <option value="json">JSON</option>
                    <option value="csv">CSV</option>
                    <option value="other">Other</option>
                </select>
                {selectOther()}

                <label className="label">
                    <span className="label-text text-left">What is the nature of the data being audited?</span>
                </label>
                <select className="select select-primary w-full max-w-md" onChange={handleChange} >
                    <option disabled selected>Select</option>
                    <option value="accounting">Accounting</option>
                    <option value="operational">Operational</option>
                    <option value="both">Both</option>
                    <option value="other">Other</option>
                </select>
                {selectOther()}
                
                <label className="label">
                    <span className="label-text text-left">Please describe what most conserns you about your data currently:</span>
                </label>
                <textarea className="w-full max-w-md textarea textarea-primary" placeholder="Description"></textarea>

                <label className="label">
                    <span className="label-text text-left">What is your expectation on timing?</span>
                </label>
                <select className="select select-primary w-full max-w-md" onChange={handleChange}>
                    <option disabled selected>Select</option>
                    <option value="week">One to two weeks</option>
                    <option value="month">Month</option>
                    <option value="quarter">Three months</option>
                    <option value="ongoing">Ongoing project</option>
                    <option value="other">Other</option>
                </select>
                {selectOther()}

                <label className="label">
                    <span className="label-text text-left">Is there anything else you would like to be considered?</span>
                </label>
                <textarea className="w-full max-w-md textarea textarea-primary" placeholder="Description"></textarea>
            </form>
        </>
     );
};