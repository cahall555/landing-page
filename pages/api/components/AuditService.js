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
            <div class="form-control w-full max-w-xs">
            <label class="label">
                <span class="label-text">Please describe</span>
            </label>
            <input type="text" placeholder="Other" class="input input-bordered input-primary w-full max-w-xs"/>
        </div>
        );
    }

    return (
        <div class="flex flex-col w-full p-10">
            <div class = "grid grid-cols-3 gap-4 place-items-start">
                <form>
                <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Company name or N/A</span>
                        </label>
                        <input type="text" placeholder="Company Name" class="input input-bordered input-primary w-full max-w-xs"/>
                    </div>

                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text">Audited data will need to be corrected</span> 
                            <input type="radio" name="radio-6" class="radio checked:bg-primary" checked/>
                        </label>
                        </div>
                        <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text">Audited data will not need to be corrected</span> 
                            <input type="radio" name="radio-6" class="radio checked:bg-accent-content" checked/>
                        </label>
                    </div>

                <label class="label">
                        <span class="label-text">How will your data be read?</span>
                    </label>
                    <select class="select select-primary w-full max-w-xs" onChange={handleChange} >
                        <option disabled selected>Select</option>
                        <option value="xml">XML</option>
                        <option value="json">JSON</option>
                        <option value="csv">CSV</option>
                        <option value="other">Other</option>
                    </select>
                    {selectOther()}

                    <label class="label">
                        <span class="label-text">What is the nature of the data being audited?</span>
                    </label>
                    <select class="select select-primary w-full max-w-xs" onChange={handleChange} >
                        <option disabled selected>Select</option>
                        <option value="accounting">Accounting</option>
                        <option value="operational">Operational</option>
                        <option value="both">Both</option>
                        <option value="other">Other</option>
                    </select>
                    {selectOther()}
                    
                    <label class="label">
                        <span class="label-text">Please describe what most conserns you about your data currently:</span>
                    </label>
                    <textarea class="textarea textarea-primary" placeholder="Description"></textarea>

                    <label class="label">
                        <span class="label-text">What is your expectation on timing?</span>
                    </label>
                    <select class="select select-primary w-full max-w-xs" onChange={handleChange}>
                        <option disabled selected>Select</option>
                        <option value="week">This project should be completed in a week or two</option>
                        <option value="month">This project will take likely take a month</option>
                        <option value="quarter">This project will take a quarter</option>
                        <option value="ongoing">This will be an ongoing project</option>
                        <option value="other">Other</option>
                    </select>
                    {selectOther()}

                    <label class="label">
                        <span class="label-text">Is there anything else you would like to be considered?</span>
                    </label>
                    <textarea class="textarea textarea-primary" placeholder="Description"></textarea>
                </form>
            </div>
        </div>
     );
};