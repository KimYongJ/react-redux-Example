// reducers/counter.js

// reducer를 많이 만들면 action상수를 정의할 때 중복될 수 있으므로
// 액션이름 앞에 파일 이름을 넣는다. ex) 'COUNT/INCRESE'
export const INCRESE = 'COUNT/INCRESE';

export const increseCount = () => ({ type: INCRESE, initalState });

//초기 데이터이다.
const initalState = {
  count: 0,
};

export const counter = (state = initalState, action) => {
  // action 안에 type: INCRESE 과 initalState 이들어있다.
  switch (action.type) {
    case INCRESE:
      action.initalState.count += 1;
      return {
        ...state,
        count: action.initalState.count,
      };
    // default를 써주지 않으면 처음 app화면에 표시되는 state의 count 값이 undefined가 나온다.
    // 그렇기 때문에 default를 써야 한다.
    default:
      return state;
  }
};
