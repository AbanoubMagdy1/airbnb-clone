export interface IModalState {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
} 

export function createModalStateHandler(isOpen: boolean = false) {
    return (set: any) => ({
        isOpen,
        onOpen: () => set({isOpen: true}),
        onClose: () => set({isOpen: false})
    })
}