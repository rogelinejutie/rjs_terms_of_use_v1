import { useState } from "react"

export const HomeStates = () => {
    const [categories, setCategories] = useState({personal: null, business: null})
    const [selected, setSelected] = useState(null)

    return {
        categories: {data: categories, set: setCategories},
        selected: {data: selected, set: setSelected}
    }
}