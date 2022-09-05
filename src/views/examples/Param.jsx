import React from "react";
import { useParams } from "react-router-dom";

const Param = props => {
    const {idt} = useParams()
    return (
        <div className="Param">
        <h1>Params</h1>
        <p>Valor: {idt}!</p>
    </div>
    )
}

export default Param