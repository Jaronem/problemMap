import React from "react";
import { useParams } from "react-router-dom";


export default function CountryModal()
{
    const params = useParams();
    return (
        <h1>{params.name}</h1>
    );
}
