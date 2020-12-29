import ReduxCalculatorActionType from './reduxCalculatorActionType'

export interface IReduxCalculatorActionPayload {
    input? : any
    operation : "num" | "operator" | "clear" | "equal"
}

export interface IReduxCalculatorAction {
    type : ReduxCalculatorActionType,
    payload: IReduxCalculatorActionPayload
}

export const updateDisplay = (content: string) : IReduxCalculatorAction => ({
    type: ReduxCalculatorActionType.UPDATE, 
    payload: {
      input: content,
      operation: "num"
    }
  })

export const addition = (content: any) : IReduxCalculatorAction => ({
    type: ReduxCalculatorActionType.ADD, 
    payload: {
      operation: "operator"
    }
  })
  
export const subtraction = (content: any) : IReduxCalculatorAction => ({
    type: ReduxCalculatorActionType.SUBTRACT,
    payload: {
      operation: "operator"
    }
  })
  
export const multiplication = (content: any) : IReduxCalculatorAction => ({
    type: ReduxCalculatorActionType.MULTIPLY,
    payload: {
      operation: "operator"
    }
  });
  
export const division = (content: any) : IReduxCalculatorAction => ({
    type: ReduxCalculatorActionType.DIVIDE,
    payload: {
      operation: "operator"
    }
  });
  
export const clearDisplay = () : IReduxCalculatorAction => ({
    type: ReduxCalculatorActionType.CLEAR,
    payload: {
      operation: "clear"
    }
  })
  
export const equal = (content: any) : IReduxCalculatorAction => ({
    type: ReduxCalculatorActionType.EQUAL,
    payload: {
      operation: "equal"
    }
  })