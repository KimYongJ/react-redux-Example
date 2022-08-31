import { useSelector, useDispatch } from 'react-redux';
import { increseCount } from './reducers/counter';
import { Link } from 'react-router-dom';
export default function ChildComponent() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  console.log('자식화면의 count값 : ', count);
  const increse = () => {
    dispatch(increseCount());
  };
  return (
    <>
      <div>자식 컴포넌트의 count 값 : {count} </div>

      <button onClick={increse}>증가</button>

      <hr />
      <Link to="/">부모 컴포넌트로 이동</Link>
    </>
  );
}
