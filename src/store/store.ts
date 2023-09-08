import { create } from "zustand";

interface StoreProps {
    image_url: string,
    setImage: (value: string) => void
}

const useStore = create<StoreProps>((set) => ({
    image_url: '',
    setImage: (data) => set(() => ({ image_url: data }))
}));

export { useStore };
