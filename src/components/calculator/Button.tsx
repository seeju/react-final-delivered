import React from 'react';
import { connect } from 'react-redux';
import * as ReduxCalculatorActions from '../../redux/calculator/action/action'
import styled from 'styled-components'

export interface IProps {
    button: string,
    id: string,
    display: string,
    dispatch: any,
}

function Button({button, id, display, dispatch}: IProps) {
    const handleClick = (e : any) => {
        if (id === "clear") {
            dispatch(ReduxCalculatorActions.clearDisplay());
        } else if (id === "subtract") {
            dispatch(ReduxCalculatorActions.subtraction(display));
        } else if (id === "multiply") {
            dispatch(ReduxCalculatorActions.multiplication(display));
        } else if (id === "divide") {
            dispatch(ReduxCalculatorActions.division(display));
        } else if (id === "add") {
            dispatch(ReduxCalculatorActions.addition(display));
        } else if (id === "equals") {
            dispatch(ReduxCalculatorActions.equal(display));
        } else {
            dispatch(ReduxCalculatorActions.updateDisplay(button));
        }
    }

    return (
    <>
        <ButtonWrapper
        id={id}
        value={button}
        className="button"
        onClick={handleClick}>
            {button}
        </ButtonWrapper>
    </>
    );
}

export default connect()(Button);


const ButtonWrapper = styled.button `
    display: flex;
    width: 50px;
    height: 50px;
    background-color: grey;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: -3px 5px 10px 0px rgba(0,0,0, .35);
    font-size: 1.5em;
    align-items: center;
    justify-content: center;
`