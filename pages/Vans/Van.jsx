import React from "react"
import { Link } from "react-router-dom"


export default function Van({van, typeFilter,searchParams}){
    const {name, type, price, imageUrl, id} = van
    return (
        <Link
        to={id}
        state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter
        }}
    >
        <img src={imageUrl} />
        <div className="van-info">
            <h3>{name}</h3>
            <p>${price}<span>/day</span></p>
        </div>
        <i className={`van-type ${type} selected`}>{type}</i>
    </Link>
    )
}