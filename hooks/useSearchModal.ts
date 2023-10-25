import { create } from "zustand";

//Type
import { SearchModalStore } from "@/types";

const useSearchModal = create<SearchModalStore>((set: any) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useSearchModal;
