import { useState } from "react"
import { Cart1 } from '../global/Icons';


export const NavigationStates = () => {
    const [tabs, setTabs] = useState([
        {name:'My Cart', subdir:'/my/cart', ref: 'my', not_active:<Cart1/>, active:<Cart1 fill="#0070EF" stroke="#fff"/>}
    ])
    const [snew, setSnew] = useState('bago')

    return {
        tabs: {data: tabs, set: setTabs},
        new: {data: snew, set: setSnew}
    }
}