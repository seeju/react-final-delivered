import React from "react";
import { connect } from "react-redux";
import Display from "../components/calculator/Display";
import Keypad from "../components/calculator/Keypad";
import { getDisplay } from "./../redux/calculator/selector/selector";

export interface IProps {
  display: string,
  dispatch: any
}

function Calculator(props : IProps) {
  return (
    <>
      <div className="calculator-body">
        <div className="display-block">
          <Display
            display={props.display}
          />
        </div>
        <div className="keypad-block">
          <Keypad
            display={props.display}
          />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: any) => {
  console.log('oldState', state)
  const displayValue = getDisplay(state);
  console.log('newState', displayValue)
  return ({
    display: displayValue,
  });
};

export default connect(mapStateToProps, null)(Calculator);
