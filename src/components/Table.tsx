import React, {useState} from "react";
import {Row} from "./Row";
import {TotalRow} from "./TotalRow";

export type RowType = {
    model: string
    power: number
}

export function Table() {

    const addNewRow = (model: string, power: number) => {
        setRows(
            [...rows, {model, power}]
        )
    }

    const cancelLastAction = (state:RowType[]) => {
        let copyState = [...state];
        copyState.pop();
        setRows(copyState);
    }

    let [rows, setRows] = useState(
        [
            {model: "Audi S4", power: 265},
            {model: "BMW M3", power: 321},
            {model: "Volvo S60R", power: 300},
            {model: "Alfa-Romeo 156GTA", power: 250},

        ]
    )

    let [model, setModel] = useState("")
    let [power, setPower] = useState("")

    return (
        <div className={'main'}>
            <table border={1}>
                <caption>Class D compare</caption>
                <th>Model</th>
                <th>Power (hp)</th>

                {rows.map(r =>
                    <Row model={r.model} power={Number(r.power)}/>
                )}

                <TotalRow rows={rows}/>

                <tr>
                    <td>
                        <input
                            placeholder={"Enter model"}
                            value={model}
                            onChange={(e) => setModel(e.currentTarget.value)}
                        />
                    </td>
                    <td>
                        <input
                            placeholder={"Enter power"}
                            value={power}
                            onChange={(e) => setPower(e.currentTarget.value)}/>
                    </td>
                </tr>
            </table>

            <div className={'button-block'}>
                <button onClick={() => setRows([])}>Clear table</button>

                <button onClick={() => cancelLastAction(rows)}>Cancel last action</button>

                <button onClick={() => {
                    addNewRow(model, Number(power));
                    setModel('');
                    setPower('');
                }}>
                    Add row
                </button>
            </div>

            {/*<div>
                <textarea></textarea>
                <button onClick={(e) => document.execCommand('undo')} id="zzz">ctrl+Z</button>
                <button onClick={(e) => document.execCommand('redo')} id="yyy">ctrl+Y</button>
            </div>*/}
        </div>
    )
}