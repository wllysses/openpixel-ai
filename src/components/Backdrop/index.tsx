export function Backdrop() {
    return (
        <div className="absolute h-screen w-screen flex items-center flex-col gap-2 justify-center bg-zinc-900 bg-opacity-70">
            <div className="w-16 h-16 rounded-full border-4 border-zinc-100 border-t-zinc-500 animate-spin" />
            <span className="font-semibold">Gerando imagem...</span>
        </div>
    );
}
