import * as React from 'react';
import './CalculatorInput.sass'
import {Field} from "react-final-form";
import CalculatorSettings from "../../Settings/CalculatorSettings";

const CalculatorInput = () => {
    return (
        <div className={"calculator-input"}>
            <Field
                name="salary"
                component="input"
                type="text"
                placeholder={CalculatorSettings.calculatorInputPlaceholder}
            />
            <span>{CalculatorSettings.calculatorCurrency}</span>
        </div>
    )
}

export default CalculatorInput