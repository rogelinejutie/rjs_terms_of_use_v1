import { useState } from "react"

export const ToolStates = () => {
    const [prefetch, setPrefetch] = useState(false)

    return {
        prefetch: {data: prefetch, set: setPrefetch},
    }
}