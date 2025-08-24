import { create } from 'zustand'

export const useFolderContextMenuStore = create((set) => ({
    x: null,
    y: null,
    isVisible: false,
    folder: null,
    setX: (incomingX) => {
        set({
            x: incomingX
        })
    },
    setY: (incomingY) => {
        set({
            y: incomingY
        })
    },
    setIsVisible: (incomingIsVisible) => {
        set({
            isVisible: incomingIsVisible
        })
    },
    setFolder: (incomingFile) => {
        set({
            folder: incomingFile
        })
    }
}));