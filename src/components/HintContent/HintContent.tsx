import * as React from 'react';
import './HintContent.sass'
import CalculatorSettings from "../../Settings/CalculatorSettings";

const HintContent = () => {
    return (
        <div className={"calculator-hint__content"}>
            <span>{CalculatorSettings.calculatorHintText}</span>
        </div>
    )
}

export default HintContent