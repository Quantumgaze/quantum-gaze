'use client';

import ReactTextareaAutosize from "react-textarea-autosize";

export default function InputContainer() {
    return (
        <form action="" onSubmit={(e)=>e.preventDefault()} className="py-32">
            <div className="flex items-center-justify-center">
                <ReactTextareaAutosize 
                    maxRows={8}
                    minRows={1}
                    className="resize-none w-[500px] px-3 py-4 text-white text-xl bg-transparent border-2 border-zinc-500 focus:border-zinc-300 rounded-lg outline-none  "
                    />

                <button type="submit" className="text-zinc-200 px-5  mx-2 rounded-lg bg-green-600 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button>
            </div>

            <div className="ai-engines flex items-center">
                <div className="checkbox-container">
                    <input type="checkbox" className="peer" name="" id="stable-diffusion" />
                    <label htmlFor="stable-diffusion" className="block w-36 h-32 border-2 duration-200 border-zinc-500 peer-checked:border-zinc-300 solid rounded-lg  ">
                        <div className="engine-logo-img ">

                        </div>
                    </label>
                </div>
            </div>
        </form>
    )
}
