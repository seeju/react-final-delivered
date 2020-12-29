import React from 'react';
import Button from './Button'
import styled from 'styled-components'

export interface IProps {
  display: string
}

function Keypad( {display} : IProps) {
  return (
    <>
      <div className="keypad">
        <ButtonGroup className="button-group">
          <ButtonRow className="button-row">
            <Button button={"C"} id={"clear"} display={display}/>
            <Button button={"/"} id={"divide"} display={display} />
            <Button button={"*"} id={"multiply"} display={display} />
          </ButtonRow>
          <ButtonRow className="button-row">
            <Button button={"7"} id={"seven"} display={display}/>
            <Button button={"8"} id={"eight"} display={display}/>
            <Button button={"9"} id={"nine"} display={display}/>
            <Button button={"-"} id={"subtract"} display={display} />
          </ButtonRow>
          <ButtonRow className="button-row">
            <Button button={"4"} id={"four"} display={display}/>
            <Button button={"5"} id={"five"} display={display}/>
            <Button button={"6"} id={"six"} display={display}/>
            <Button button={"+"} id={"add"} display={display}/>
          </ButtonRow>
          <ButtonRow className="button-row">
            <Button button={"1"} id={"one"} display={display}/>
            <Button button={"2"} id={"two"} display={display}/>
            <Button button={"3"} id={"three"} display={display}/>
          </ButtonRow>
        </ButtonGroup>
        <ButtonRow className="button-row">
            <Button button={"0"} id={"zero"} display={display}/>
            <Button button={"."} id={"decimal"} display={display}/>
            <Button button={"="} id={"equals"} display={display}/>
        </ButtonRow>
      </div>
    </>
  );
}

export default Keypad;

const ButtonGroup = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75%;
  height: 60%;
`

const ButtonRow = styled.div `
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15%;
  justify-content: start;
  align-items: center;
`
