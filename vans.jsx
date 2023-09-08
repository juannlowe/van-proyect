import React from "react"
import { Link } from "react-router-dom"

export default function Vans(){
    const [vans, setVans] = React.useState([]);
    React.useEffect(()=>{
        fetch("/api/vans")
        .then (res=>res.json())
        .then (data => setVans(data.vans))
    }, [])
const vanElements = vans.map(van => (
    <div>
        <h3>{van.name}</h3>
    </div>
))

    return (
        <div>
        <h2>vans here to choose</h2>
        {vanElements}
        </div>
    )
}