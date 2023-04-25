import { create } from "zustand";

interface LoginrModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useLoginrModal = create<LoginrModal>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))

export default useLoginrModal;