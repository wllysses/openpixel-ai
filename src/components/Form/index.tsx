"use client";

import { FormEvent, useState } from "react";
import { api } from "@/services/api";
import { useStore } from "@/store/store";
import { Backdrop } from "../Backdrop";

export default function Form() {

    const { setImage } = useStore();

    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState<boolean | null>(null);

    async function fetchData(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            setIsLoading(true);
            const result = await api.generateImage(input);
            setImage(result[0].items[0].image_resource_url);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) return <Backdrop />

    return (
        <form className='max-w-lg w-full flex items-center gap-2 animate-fade-right' onSubmit={fetchData}>
            <input
                type="text"
                className='bg-zinc-800 p-2 rounded w-full'
                placeholder='Gere uma image de...'
                onChange={(e) => setInput(e.target.value)}
            />
            <button className='bg-emerald-500 p-2 rounded hover:bg-emerald-400 disabled:cursor-not-allowed' disabled={!input}>Gerar</button>
        </form>
    );
}
