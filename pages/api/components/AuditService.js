import 'tailwindcss/tailwind.css'
import React from 'react'
import { useState } from 'react';


  export default function AuditService() {

    const [formatOption, setFormatOption] = useState(undefined);

    const [typeOption, setTypeOption] = useState(undefined);

    const [timeOption, setTimeOption] = useState(undefined);

    function formatChange(event) {
        setFormatOption(event.target.value);
    };

    function typeChange(event) {
        setTypeOption(event.target.value);
    };

    function timeChange(event) {
        setTimeOption(event.target.value);
    };

   function otherFormat() {
        if (formatOption == "otherFormat") {
            return <FormatInformation />
        } else {
            return <></>
        }
    };
    
    function otherType() {
        if (typeOption == "otherType") {
            return <TypeInformation />
        }else {
            return <></>
        }
    };

    function otherTime() {
        if (timeOption == "otherTime") {
            return <TimeInformation />
        }else {
            return <></>
        }
    };

    function FormatInformation() {
        return (
            <div className="form-control w-full max-w-md">
            <label className="label">
                <span className="label-text">Please describe</span>
            </label>
            <input type="text" placeholder="Other" className="input input-bordered input-primary w-full max-w-md"/>
        </div>
        );
    }

    function TypeInformation() {
        return (
            <div className="form-control w-full max-w-md">
            <label className="label">
                <span className="label-text">Please describe</span>
            </label>
            <input type="text" placeholder="Other" className="input input-bordered input-primary w-full max-w-md"/>
        </div>
        );
    }

    function TimeInformation() {
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
                <select className="select select-primary w-full max-w-md" onChange={formatChange} >
                    <option disabled selected>Select</option>
                    <option value="xml">XML</option>
                    <option value="json">JSON</option>
                    <option value="csv">CSV</option>
                    <option value="otherFormat">Other</option>
                </select>
                {otherFormat()}

                <label className="label">
                    <span className="label-text text-left">What is the nature of the data being audited?</span>
                </label>
                <select className="select select-primary w-full max-w-md" onChange={typeChange} >
                    <option disabled selected>Select</option>
                    <option value="accounting">Accounting</option>
                    <option value="operational">Operational</option>
                    <option value="both">Both</option>
                    <option value="otherType">Other</option>
                </select>
                {otherType()}
                
                <label className="label">
                    <span className="label-text text-left">Please describe what most conserns you about your data currently:</span>
                </label>
                <textarea className="w-full max-w-md textarea textarea-primary" placeholder="Description"></textarea>

                <label className="label">
                    <span className="label-text text-left">What is your expectation on timing?</span>
                </label>
                <select className="select select-primary w-full max-w-md" onChange={timeChange}>
                    <option disabled selected>Select</option>
                    <option value="week">One to two weeks</option>
                    <option value="month">Month</option>
                    <option value="quarter">Three months</option>
                    <option value="ongoing">Ongoing project</option>
                    <option value="otherTime">Other</option>
                </select>
                {otherTime()}

                <label className="label">
                    <span className="label-text text-left">Is there anything else you would like to be considered?</span>
                </label>
                <textarea className="w-full max-w-md textarea textarea-primary" placeholder="Description"></textarea>
            </form>
        </>
     );
};