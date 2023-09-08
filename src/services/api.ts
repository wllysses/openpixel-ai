export async function generateImage(prompt: string) {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL as string, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        body: JSON.stringify({
            num_images: 1,
            providers: "replicate",
            resolution: "512x512",
            response_as_dict: false,
            text: prompt
        })
    });
    const data = await response.json();
    return await data;
}

export const api = {
    generateImage
}
