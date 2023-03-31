import * as React from 'react';
import './NDFLToggler.sass'
import {Field} from "react-final-form";
import CalculatorSettings from "../../Settings/CalculatorSettings";

interface IValuesProps {
    toggler_ndfl:  boolean
}

const NDFLToggler = ({toggler_ndfl}: IValuesProps) => {
    return (
        <div className={"calculator-ndfl__wrapper"}>
            <span className={!toggler_ndfl ? "calculator-ndfl-label calculator-enable-ndfl" : "calculator-ndfl-label"}>{CalculatorSettings.calculatorNDFLBtnText.text1}</span>
            <label className="calculator-ndfl__label">
                <Field
                    name="toggler_ndfl"
                    component="input"
                    type="checkbox"
                    checked={toggler_ndfl}

                />
                <span className="calculator-ndfl__slider round"></span>
            </label>
            <span className={toggler_ndfl ? "calculator-ndfl-label calculator-enable-ndfl" : "calculator-ndfl-label"}>{CalculatorSettings.calculatorNDFLBtnText.text2}</span>
        </div>
    )
}

export default NDFLToggler