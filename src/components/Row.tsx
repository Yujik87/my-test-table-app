import React, {useState} from "react";

type RowPropsType ={
    model: string
    power: number
}

export function Row(props:RowPropsType) {
    return (
        <tr>
            <td>{props.model}</td>
            <td>{props.power}</td>
        </tr>
    )
}