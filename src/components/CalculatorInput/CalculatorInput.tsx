import * as React from 'react';
import './CalculatorInput.sass'
import {Field} from "react-final-form";
import CalculatorSettings from "../../Settings/CalculatorSettings";
import {useEffect, useState} from "react";
import formatString from "format-string-by-pattern";


interface ICalculatorInputProps {
    activeTab: string
}

const CalculatorInput = ({activeTab}: ICalculatorInputProps) => {

    const initialId: string = "0"

    const [shortNameIndex, setShortNameIndex] = useState<string>(initialId)

    useEffect(()=>{

        let setIndex: any = Number(activeTab.slice(-1)) - 1

        setShortNameIndex(setIndex.toString())

    },[activeTab])

    return (
        <div className={"calculator-input"}>
            <Field
                name="salary"
                component="input"
                type="text"
                placeholder={CalculatorSettings.calculatorInputPlaceholder}
                parse={formatString("XX XXX XXX XXX")}
            />
            <span>
                {CalculatorSettings.calculatorCurrency}{" "}
                {shortNameIndex === initialId ? "" : CalculatorSettings.calculatorInputs[shortNameIndex]?.short_name}
            </span>
        </div>
    )
}

export default CalculatorInput