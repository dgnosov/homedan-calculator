import * as React from 'react';
import './Main.sass'
import Title from "../Title/Title";
import {Col, Container, Row, ThemeProvider} from "react-bootstrap";
import Calculator from "../Calculator/Calculator";

const Main = () => {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <Container className={"calculator"}>
                <Row>
                    <Col><Title/></Col>
                </Row>
                <Row>
                    <Calculator/>
                </Row>
            </Container>
        </ThemeProvider>
    )
}

export default Main