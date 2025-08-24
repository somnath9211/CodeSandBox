import { create } from 'zustand'

export const useFileContextMenuStore = create((set) => ({
    x: null,
    y: null,
    isVisible: false,
    file: null,
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
    setFile: (incomingFile) => {
        set({
            file: incomingFile
        })
    }
}));