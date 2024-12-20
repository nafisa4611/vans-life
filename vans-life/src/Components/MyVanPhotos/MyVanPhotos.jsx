import React from "react"
import { useOutletContext } from "react-router-dom"
import "./MyVanPhotos.css"

export default function MyVanPhotos() {
    const { currentVan } = useOutletContext()
    return (
        <img src={currentVan.imageUrl} className="host-van-detail-image" />
    )
}