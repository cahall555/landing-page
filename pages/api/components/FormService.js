import 'tailwindcss/tailwind.css'
import React from 'react'


export default function FormService() {
    return (
        <div class="flex flex-col w-full p-10">
            <div class = "grid grid-cols-3 gap-4 place-items-start">
                <form>
                <label class="label">
                        <span class="label-text">Breifly describe the form you need:</span>
                    </label>
                    <textarea class="textarea textarea-primary" placeholder="Description"></textarea>

                    <label class="label">
                        <span class="label-text">Where will form data be stored?</span>
                    </label>
                    <textarea class="textarea textarea-primary" placeholder="Description"></textarea>
                </form>
            </div>
        </div>
    );
};