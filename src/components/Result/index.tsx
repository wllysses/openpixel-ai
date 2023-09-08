"use client";

import { useStore } from "@/store/store";

export default function Result() {

    const { image_url } = useStore();

    return (
        <>
            {
                image_url &&
                <div className="flex flex-col items-center gap-2">
                    <a href={image_url} target="_blank">
                        <img src={image_url} alt="Image generated for AI" className="rounded" loading="lazy" />
                    </a>
                    <span className="text-xs font-semibold italic">*Para realizar o download, basta clicar na imagem.</span>
                </div>
            }
        </>
    );
}
