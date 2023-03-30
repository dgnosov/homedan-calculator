import * as React from 'react';
import './CalculatorResults.sass'
import CalculatorSettings from  '../../Settings/CalculatorSettings'
import {useEffect, useState} from "react";

interface ResultsProps {
    toggler_ndfl: boolean,
    salary: number
}

const CalculatorResults = ({toggler_ndfl, salary}: ResultsProps) => {

    const [calculateResults, setCalculateResults] = useState(null)
    const mask = /(\d)(?=(\d\d\d)+([^\d]|$))/g
    const toReplace = "$1 "

    useEffect(()=>{

        const salaryValue = salary
        const ndfl = (salaryValue * CalculatorSettings.calculatorNDFL) / 100
        const calculate_total = ndfl + Number(salaryValue)

        const res = {
            salary: toggler_ndfl ? salary : salaryValue - ndfl,
            calculate_ndfl: ndfl,
            calculate_total: toggler_ndfl ? calculate_total : calculate_total - ndfl
        }

        setCalculateResults(res)

    },[toggler_ndfl, salary])

    return (
        <div className={"calculator-results"}>
            <p><span>{calculateResults?.salary.toString().replace(mask, toReplace)} {CalculatorSettings.calculatorCurrency}</span> {CalculatorSettings.calculatorResultsTest.salary}</p>
            <p><span>{calculateResults?.calculate_ndfl.toString().replace(mask, toReplace)} {CalculatorSettings.calculatorCurrency}</span> {CalculatorSettings.calculatorResultsTest.ndfl.text1}, {CalculatorSettings.calculatorNDFL}% {CalculatorSettings.calculatorResultsTest.ndfl.text2}</p>
            <p><span>{calculateResults?.calculate_total.toString().replace(mask, toReplace)} {CalculatorSettings.calculatorCurrency}</span> {CalculatorSettings.calculatorResultsTest.total}</p>
        </div>
    )
}

export default CalculatorResults