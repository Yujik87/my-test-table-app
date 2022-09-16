import React from "react";
import {RowType} from "./Table";

export type TotalRowPropsType = {
    rows: Array<RowType>
}

export function TotalRow(props: TotalRowPropsType) {
    let quantity = props.rows.length;
    let averagePower = (props.rows.reduce((acc, el) => acc + el.power, 0)) / quantity;
    return (

            <tr>
                <td className={'total-row'}>{"Total: " + quantity}</td>
                <td className={'total-row'}>{"Average power: " + averagePower}</td>
            </tr>

)
}

