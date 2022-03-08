import { useState } from "react"

export const StatisticsState = () => {
    const [chart, setChart] = useState(null)
    // const [overview, setOverview] = useState({
    //     affected: 300,
    //     death: 5,
    //     recovered: 1,
    //     active: 200,
    //     serious: 20
    // })

    const [overview, setOverview] = useState([
        {id: 1, name: 'afFected', value: 300},
        {id: 34, name: 'dEath', value: 5},
        {id: 123, name: 'Recovered', value: 1},
        {id: 6, name: 'actIve', value: 200},
        {id: 5324234, name: 'sErious', value: 20}
    ])

    return {
        chart: {data: chart, set: setChart},
        overview: {data: overview, set: setOverview},
    }
}