import React from "react"
import { useOutletContext } from "react-router-dom"
import "./MyVanPricing.css"

export default function MyVanPricing() {
    const { currentVan } = useOutletContext()
    return (
        <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
    )
}