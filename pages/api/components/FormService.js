import 'tailwindcss/tailwind.css'
import React from 'react'


export default function FormService() {
    return (
        <>
             <form>
                <label className="label">
                        <span className="label-text">Breifly describe the form you need:</span>
                    </label>
                    <textarea className="w-full max-w-md textarea textarea-primary" placeholder="Description"></textarea>

                    <label className="label">
                        <span className="label-text">Where will form data be stored?</span>
                    </label>
                    <textarea className="w-full max-w-md textarea textarea-primary" placeholder="Description"></textarea>

                <label className="label">
                    <span className="label-text text-left">Do you need assistance storing form data?</span>
                </label>
                <select className="select select-primary w-full max-w-md">
                    <option disabled selected>Select</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </select>
             </form>
         </>
    );
};