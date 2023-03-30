import * as React from 'react';
import './Title.sass'
import '../../ThemeColors.sass'
import CalculatorSettings from "../../Settings/CalculatorSettings";

const Title = () => <h1 className={"calculator-title"}>{CalculatorSettings.calculatorTitle}</h1>

export default Title