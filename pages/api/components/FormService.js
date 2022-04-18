import 'tailwindcss/tailwind.css'
import React from 'react'


export default function FormService() {
    return (
        <div className="flex flex-col w-full p-10">
            <div className = "grid grid-cols-3 gap-4 place-items-start">
                <form>
                <label className="label">
                        <span className="label-text">Breifly describe the form you need:</span>
                    </label>
                    <textarea className="textarea textarea-primary" placeholder="Description"></textarea>

                    <label className="label">
                        <span className="label-text">Where will form data be stored?</span>
                    </label>
                    <textarea className="textarea textarea-primary" placeholder="Description"></textarea>
                </form>
            </div>
        </div>
    );
};