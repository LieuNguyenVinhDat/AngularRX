import { createReducer, on } from '@ngrx/store'
import * as CalculatorActions from '../actions/caculator.action'
import { CalculatorState } from '../states/calculator.state'

const initialState: CalculatorState = {
  currentNum: '0',
  previousNum: '0',
  operator: '',
};

export const CalculatorReducer = createReducer(
  initialState,
  on(CalculatorActions.enterNumber, (state, action) => {
    let newState = { ...state };
    if (action.number == '.') {
      if (!state.currentNum.includes('.')) {
        newState.currentNum = state.currentNum + '.';
      }
      return newState;
    }
    if (state.currentNum == '0') {
      newState.currentNum = action.number;
    } else {
      newState.currentNum = state.currentNum + action.number;
    }
    //newState.currentNum = state.currentNum + action.number;
    return newState;
  }),
  on(CalculatorActions.enterOperator, (state, action) => {
    let newState = { ...state };

    if (action.operator == '%') {
      return {
        ...state,
        currentNum: (parseFloat(state.currentNum) / 100).toString(),
      };
    }
    if (action.operator == 'C') {
      return {
        ...state,
        currentNum: '0',
        previousNum: '0',
        operator: '',
      };
    }
    // if (action.operator == 'DEL') {
    //   return {
    //     ...state,
    //     currentNum: state.currentNum.slice(
    //       0,
    //       state.currentNum.length - 1
    //     ),
    //   };
    // }
    if (action.operator == '=') {
      let result = 0;
      if (state.operator == '+') {
        result =
          parseFloat(state.previousNum) + parseFloat(state.currentNum);
      } else if (state.operator == '-') {
        result =
          parseFloat(state.previousNum) - parseFloat(state.currentNum);
      } else if (state.operator == '*') {
        result =
          parseFloat(state.previousNum) * parseFloat(state.currentNum);
      } else if (state.operator == '/') {
        result =
          parseFloat(state.previousNum) / parseFloat(state.currentNum);
      }
      return {
        ...state,
        currentNum: result.toString(),
      };
    } else {
      return {
        ...state,
        previousNum: state.currentNum,
        currentNum: '0',
        operator: action.operator,
      };
    }
  })
);
