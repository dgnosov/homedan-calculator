import * as React from 'react';
import './Calculator.sass'
import {Col, Row} from "react-bootstrap";
import CalculatorRadioBtn from "../CalculatorRadioBtn/CalculatorRadioBtn";
import CalculatorResults from "../CalculatorResults/CalculatorResults";
import CalculatorSettings from '../../Settings/CalculatorSettings'
import {Form} from "react-final-form";
import CalculatorInput from "../CalculatorInput/CalculatorInput";
import NDFLToggler from "../NDFLToggler/NDFLToggler";

const Calculator = () => {
    return (
        <div className={"calculator-block"}>
            <Row>
                <Form
                    onSubmit={() => null}
                    initialValues={{ calculator_radio_btn: CalculatorSettings.calculatorInputs[0].id, toggler_ndfl: true }}
                    render={({values}) =>{
                        return <form>
                            <Row>
                                <Col>
                                    <div className={"calculator-radio-btns__block"}>
                                        {CalculatorSettings.calculatorInputs.map(i=><CalculatorRadioBtn key={i.id} id={i.id} name={i.name} hint={i.hint}/>)}
                                    </div>
                                </Col>
                            </Row>
                            {values?.calculator_radio_btn === CalculatorSettings.calculatorInputs[1].id
                                ? false :
                                <>
                                    <Row>
                                        <Col>
                                            <NDFLToggler
                                                toggler_ndfl={
                                                    [
                                                        CalculatorSettings.calculatorInputs[2].id,
                                                        CalculatorSettings.calculatorInputs[3].id
                                                    ].includes(values.calculator_radio_btn) ? true : values.toggler_ndfl}
                                            />
                                        </Col>
                                    </Row>
                                    <Row><Col><CalculatorInput /></Col></Row>
                                </>}
                            {
                                values?.calculator_radio_btn === CalculatorSettings.calculatorInputs[0].id &&
                                values?.salary ? <Row><Col><CalculatorResults toggler_ndfl={values.toggler_ndfl} salary={values.salary}/></Col></Row> : false}
                        </form>
                    }}>
                </Form>
            </Row>
        </div>
    )
}

export default Calculator