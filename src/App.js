import { useSelector, useDispatch } from 'react-redux';
import { increseCount } from './reducers/counter';
import { Link } from 'react-router-dom';

function App() {
  // dispatch를 사용하기 위한 준비
  // dispatch는 데이터를 변경할 경우 사용되는 것이다.
  const dispatch = useDispatch();

  // store에 접근하여 state 가져오기
  const { count } = useSelector((state) => state.counter);
  console.log('부모화면의 count값 : ', count);
  const increse = () => {
    // store에 있는 state 바꾸는 함수 실행
    dispatch(increseCount());
  };
  return (
    <>
      <div>
        <div>부모 컴포넌트의 count 값 : {count} </div>
        <button onClick={increse}>증가</button>
        <hr />
        <Link to="/ChildComponent">자식 컴포넌트로 이동</Link>
      </div>
    </>
  );
}

export default App;
