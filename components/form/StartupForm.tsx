"use client"

import React, { useActionState, useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button';
import { Send } from 'lucide-react';
import { formSchema } from '@/lib/validation';
import MDEditor from "@uiw/react-md-editor";
import { z } from "zod"
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState("");

    const { toast } = useToast();
    const router = useRouter();

    const handleFormSubmit = async (prevState: any, formData: FormData) => {
        try {
            const formValues = {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                link: formData.get("link") as string,
                pitch
            };

            await formSchema.parseAsync(formValues);
            
            console.log(formValues);

            // const result = await createDiffieHellman(prevState, formData, pitch);

            // if (result.status === "SUCCESS") {
            //     toast({
            //         title: "Success",
            //         description: "Your startup pitch has been created successfully.",
            //     });

            //     router.push(`/startup/${result.id}`)
            // }

            // return result;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = error.flatten().fieldErrors;

                setErrors(fieldErrors as unknown as Record<string, string>);

                toast({
                    title: "Error",
                    description: "Please check the inputs and try again.",
                    variant: "destructive"
                })

                return {...prevState, error: "Validation failed", status: "ERROR"}
            }

            toast({
                title: "Error",
                description: "Please check the inputs and try again.",
                variant: "destructive"
            })

            return {
                ...prevState,
                error: "An unexpected error occurred.",
                status: "ERROR"
            }
        } finally {

        }
    }

    const [state, formAction, isPending] = useActionState(handleFormSubmit, {
        error: "",
        status: "INITIAL"
    });

    return (
        <form className='startup-form' action={formAction}>
            <div>
                <label className='startup-form_label' htmlFor="title">Title</label>
                <Input className='startup-form_input' name='title' id='title' placeholder='Name of your startup' required />
                {errors.title && <p className='startup-form_error'>{errors.title}</p>}
            </div>

            <div>
                <label className='startup-form_label' htmlFor='description'>Description</label>
                <Textarea className='startup-form_textarea' name='description' id='description' placeholder='Short description of your startup idea' required />
                {errors.description && <p className='startup-form_error'>{errors.description}</p>}
            </div>

            <div>
                <label className='startup-form_label' htmlFor="category">Category</label>
                <Input className='startup-form_input' name='category' id='category' placeholder='Choose a category (e.g., Tech, Health, Education, etc.)' required />
                {errors.category && <p className='startup-form_error'>{errors.category}</p>}
            </div>

            <div>
                <label className='startup-form_label' htmlFor="link">Image/Video link</label>
                <Input className='startup-form_input' name='link' id='link' placeholder='Paste a link to your demo or promotional media' required />
                {errors.link && <p className='startup-form_error'>{errors.link}</p>}
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
                {errors.pitch && <p className='startup-form_error'>{errors.pitch}</p>}
            </div>

            <Button className='startup-form_btn text-white' type='submit' disabled={isPending}>
                {isPending ? "Submitting..." : "Submit Your Pitch"}
                <Send className="size-6 ml-2" />
            </Button>
        </form>
    )
}

export default StartupForm