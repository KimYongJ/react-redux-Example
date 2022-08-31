// reducers/index.js

/** root reducer */
import { combineReducers } from 'redux';

// reducers/counter.js 안에 있는 counter 함수.
import { counter } from './counter';

// combineReducers 함수는 reducer를 여러개 사용할 경우
// 여러개의 reducer를 하나로 묶어주는 메소드다.
// 이렇게 하는 이유는 store에 저장되는 리듀서는 오직 1개여야하기 때문이다.
const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
