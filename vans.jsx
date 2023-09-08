import React from "react"

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
        <p>{van.price}</p>
    </div>
))

    return (
        <div>

            {vanElements}
        </div>
    )
}