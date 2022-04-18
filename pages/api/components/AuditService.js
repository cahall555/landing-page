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
            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Please describe</span>
            </label>
            <input type="text" placeholder="Other" className="input input-bordered input-primary w-full max-w-xs"/>
        </div>
        );
    }

    return (
        <div className="flex flex-col w-full p-10">
            <div className = "grid grid-cols-3 gap-4 place-items-start">
                <form>
                <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Company name or N/A</span>
                        </label>
                        <input type="text" placeholder="Company Name" className="input input-bordered input-primary w-full max-w-xs"/>
                    </div>

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Audited data will need to be corrected</span> 
                            <input type="radio" name="radio-6" className="radio checked:bg-primary" checked/>
                        </label>
                        </div>
                        <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Audited data will not need to be corrected</span> 
                            <input type="radio" name="radio-6" className="radio checked:bg-accent-content" checked/>
                        </label>
                    </div>

                <label className="label">
                        <span className="label-text">How will your data be read?</span>
                    </label>
                    <select className="select select-primary w-full max-w-xs" onChange={handleChange} >
                        <option disabled selected>Select</option>
                        <option value="xml">XML</option>
                        <option value="json">JSON</option>
                        <option value="csv">CSV</option>
                        <option value="other">Other</option>
                    </select>
                    {selectOther()}

                    <label className="label">
                        <span className="label-text">What is the nature of the data being audited?</span>
                    </label>
                    <select className="select select-primary w-full max-w-xs" onChange={handleChange} >
                        <option disabled selected>Select</option>
                        <option value="accounting">Accounting</option>
                        <option value="operational">Operational</option>
                        <option value="both">Both</option>
                        <option value="other">Other</option>
                    </select>
                    {selectOther()}
                    
                    <label className="label">
                        <span className="label-text">Please describe what most conserns you about your data currently:</span>
                    </label>
                    <textarea className="textarea textarea-primary" placeholder="Description"></textarea>

                    <label className="label">
                        <span className="label-text">What is your expectation on timing?</span>
                    </label>
                    <select className="select select-primary w-full max-w-xs" onChange={handleChange}>
                        <option disabled selected>Select</option>
                        <option value="week">This project should be completed in a week or two</option>
                        <option value="month">This project will take likely take a month</option>
                        <option value="quarter">This project will take a quarter</option>
                        <option value="ongoing">This will be an ongoing project</option>
                        <option value="other">Other</option>
                    </select>
                    {selectOther()}

                    <label className="label">
                        <span className="label-text">Is there anything else you would like to be considered?</span>
                    </label>
                    <textarea className="textarea textarea-primary" placeholder="Description"></textarea>
                </form>
            </div>
        </div>
     );
};