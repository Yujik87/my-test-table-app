import React from "react";

type ButtonsPropsType ={
    addRow: (model:string, power:number) => void
    model: string
    power: number
}

export function Buttons(props:ButtonsPropsType) {
    return (
        <div>
            {/*<input/>*/}
            <button onClick={() => props.addRow(props.model, props.power)}>Add row</button>
        </div>
    )
}