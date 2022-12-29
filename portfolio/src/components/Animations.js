export const container = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0,
            staggerChildren: 0.3
        }
    }
}

export const item = {
    hidden: {
        y: "100%",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.3,
            type: "spring",
            damping: 15,
            stiffness: 105
        }
    },
}