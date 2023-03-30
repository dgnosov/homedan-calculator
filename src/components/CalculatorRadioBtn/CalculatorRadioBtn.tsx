import * as React from 'react';
import './CalculatorRadioBtn.sass'
import {Field} from "react-final-form";
import {Col, Row} from "react-bootstrap";
import Hint from "../Hint/Hint";
import {useState} from "react";

interface RadioProps {
    id: string,
    name: string,
    hint: boolean
}


const CalculatorRadioBtn = ({id, name, hint}: RadioProps) => {

    const [hover, setHover] = useState(false)
    const [check, setCheck] = useState(false)

    const btnHover = (ev) => {
        if(check) return
        setHover(ev)
    }

    const toggleCheck = () => setCheck(!check)

    return (
        <Row>
            <Col>
                <div className={"form_radio"}>
                    <Field
                        name="calculator_radio_btn"
                        component="input"
                        type="radio"
                        value={id}
                        id={id}
                    />{' '}
                    <label className={"calculator-radio-btn"} htmlFor={id}>
                        {name}
                    </label>
                    {hint && <Hint btnHover={btnHover} toggleCheck={toggleCheck} hover={hover} check={check}/>}
                </div>
            </Col>
        </Row>
    )
}

export default CalculatorRadioBtn