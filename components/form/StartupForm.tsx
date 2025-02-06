"use client"

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import dynamic from "next/dynamic";
import { Button } from '../ui/button';
import { Send } from 'lucide-react';

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    { ssr: false }
);

const StartupForm = () => {
    const [error, setError] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState("");

    return (
        <form className='startup-form' action={() => { }}>
            <div>
                <label className='startup-form_label' htmlFor="title">Title</label>
                <Input className='startup-form_input' type='text' name='title' id='title' placeholder='Name of your startup' required />
                {error.title && <p className='startup-form_error'>{error.title}</p>}
            </div>

            <div>
                <label className='startup-form_label' htmlFor='description'>Description</label>
                <Textarea className='startup-form_textarea' name='description' id='description' rows={4} placeholder='Short description of your startup idea' required />
                {error.description && <p className='startup-form_error'>{error.description}</p>}
            </div>

            <div>
                <label className='startup-form_label' htmlFor="category">Category</label>
                <Input className='startup-form_input' type='text' name='category' id='category' placeholder='Choose a category (e.g., Tech, Health, Education, etc.)' required />
                {error.category && <p className='startup-form_error'>{error.category}</p>}
            </div>

            <div>
                <label className='startup-form_label' htmlFor="img_video">Image/Video link</label>
                <Input className='startup-form_input' type='text' name='img_video' id='img_video' placeholder='Paste a link to your demo or promotional media' required />
                {error.img_video && <p className='startup-form_error'>{error.img_video}</p>}
            </div>

            <div data-color-mode="light">
                <label className='startup-form_label' htmlFor="pitch">Pitch</label>
                <MDEditor value={pitch} onChange={(value) => {
                    setPitch(value as string)
                }}
                    id='pitch'
                    preview='edit'
                    height={300}
                    style={{ borderRadius: 20, overflow: "hidden" }}
                    textareaProps={{
                        placeholder:
                            "Briefly describe your idea and what problem it solves",
                    }}
                    previewOptions={{
                        disallowedElements: ["style"],
                    }}
                />
                {error.pitch && <p className='startup-form_error'>{error.pitch}</p>}
            </div>

            <Button className='startup-form_btn text-white'>
                Submit your pitch
                <Send className="size-6 ml-2" />
            </Button>
        </form>
    )
}

export default StartupForm