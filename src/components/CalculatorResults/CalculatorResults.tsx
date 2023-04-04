import * as React from 'react';
import './CalculatorResults.sass'
import CalculatorSettings from  '../../Settings/CalculatorSettings'
import {useEffect, useState} from "react";

interface IResultsProps {
    toggler_ndfl: boolean,
    salary: number
}

interface ICalculatorResults {
    salary: number,
    calculate_ndfl: number,
    calculate_total: number
}

const CalculatorResults = ({toggler_ndfl, salary}: IResultsProps) => {

    const [calculateResults, setCalculateResults] = useState<ICalculatorResults>(null)
    const salaryValue: number = Number(salary.toString().replace(/\s/g, ''))
    const mask: RegExp = /(\d)(?=(\d\d\d)+([^\d]|$))/g
    const toReplace: string = "$1 "
    const percent: number = 100
    const percentToCalculateNDFL: number = (percent - CalculatorSettings.calculatorNDFL) / percent // Формула для расчета НДФЛ

    useEffect(()=>{

        const calculate_total = !toggler_ndfl
            ? salaryValue * percentToCalculateNDFL
            : salaryValue / percentToCalculateNDFL

        const ndfl = !toggler_ndfl
            ? salaryValue - calculate_total
            : calculate_total - salaryValue

        const res = {
            salary: salary,
            calculate_ndfl: Math.round(ndfl),
            calculate_total: Math.round(calculate_total)
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