import ReduxCalculatorActionType from '../action/reduxCalculatorActionType'
import * as math from 'mathjs'
import { IReduxCalculatorAction, IReduxCalculatorActionPayload } from '../action/action';

export interface IReduxCalculatorStoreState {
    display: string,
    prevOp: string
    accumulated: string,
    history: string    
}

const initialState : IReduxCalculatorStoreState = {
  display: '0',
  prevOp: "",
  accumulated: "0",
  history: '0'
}

export default function (state : IReduxCalculatorStoreState = initialState, action : IReduxCalculatorAction) {
  switch (action.type) {
    case ReduxCalculatorActionType.UPDATE: {
      const updateDisplay : IReduxCalculatorActionPayload = action.payload;
      if ((state.display.includes('.') && updateDisplay.input === ".") || state.display.length > 8) {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          display: state.display == '0' || state.prevOp === "operator" ? updateDisplay.input
            : state.display + updateDisplay.input,
          prevOp: updateDisplay.operation,
        }
      }
    }
    case ReduxCalculatorActionType.ADD: {
      const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4)
        : state.history;
      return {
        ...state,
        display: state.display,
        history: state.history == '0' && state.accumulated == "0" ? state.display + " + "
          : state.accumulated != "0" ? state.accumulated + " + "
            : history() + state.display + " + ",
        prevOp: "operator"
      }
    }
    case ReduxCalculatorActionType.SUBTRACT: {
      const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4)
        : state.history;
      return {
        ...state,
        display: state.display,
        history: state.history == '0' && state.accumulated == "0" ? state.display + " - "
          : state.accumulated != "0" ? state.accumulated + " - "
            : history() + state.display + " - ",
        prevOp: "operator"
      }
    }
    case ReduxCalculatorActionType.MULTIPLY: {
      const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4)
        : state.history;
      return {
        ...state,
        display: state.display,
        history: state.history == '0' && state.accumulated == "0" ? state.display + " * "
          : state.accumulated != "0" ? state.accumulated + " * "
            : history() + state.display + " * ",
        prevOp: "operator"
      }
    }
    case ReduxCalculatorActionType.DIVIDE: {
      const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4)
        : state.history;
      return {
        ...state,
        display: state.display,
        history: state.history == '0' && state.accumulated == "0" ? state.display + " / "
          : state.accumulated != "0" ? state.accumulated + " / "
            : history() + state.display + " / ",
        prevOp: "operator"
      }
    }
    case ReduxCalculatorActionType.CLEAR: {
      return {
        ...state,
        display: '0',
        prevOp: "clear",
        accumulated: 0,
        history: "0"
      }
    }
    case ReduxCalculatorActionType.EQUAL: {
      let states = state.history + state.display;
      //@ts-ignore
      let maths = math.eval(states);
      if (state.prevOp === "equal") {
        return {
          ...state
        }
      } else {
        return {
          ...state,
          history: math.round(maths, 4).toString(),
          display: math.round(maths,4).toString(),
          accumulated: maths.toString(),
          prevOp: "equal",
        }
      }
    }
    default:
      return state;
  }
}